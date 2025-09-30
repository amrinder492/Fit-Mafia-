import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import generateOTP from "@/lib/generateOTP";
import { sendEmail } from "@/lib/sendEmail";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    await db()
    const body = await req.json()
    const { email } = body

    if(!email) {
      return NextResponse.json(new ApiResponse(400, 'Email is required'), { status: 400 })
  };

    const existUser = await User.findOne({ email })
    if (!existUser) {
      return NextResponse.json(new ApiResponse(400, 'User not exist'), { status: 400 })
    };
    const otp = generateOTP();
    const otpExpire = Date.now() + 5 * 60 * 1000 // 5 minutes

    existUser.OTP = otp
    existUser.otpExpire = otpExpire
    await existUser.save();
    const html = `<p>Your OTP is <strong>${otp}</strong>. It is valid for 5 minutes.</p>`;
    await sendEmail(email, 'Your OTP Code', html);

    return NextResponse.json(new ApiResponse(200, "successfully send otp on email", {otpExpire, otp, existUser}), { status: 200 })
  } catch (error) {
    console.log("Error in sign-in route", error)
    return NextResponse.json(new ApiResponse(500, "Internal Server Error"), { status: 500 })
  }

};