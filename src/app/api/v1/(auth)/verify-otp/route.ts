import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json()
        const { email, otp } = body

        if (!email || !otp) {
            return NextResponse.json(new ApiResponse(400, 'Email and otp are required'), { status: 400 })
        };

        const existUser = await User.findOne({ email })
        if (!existUser) {
            return NextResponse.json(new ApiResponse(400, 'User not exist'), { status: 400 })
        };
        const { OTP, otpExpire } = existUser;
        console.log(existUser)
        if (!OTP || !otpExpire) {
            return NextResponse.json(new ApiResponse(400, 'OTP not generated'), { status: 400 })
        };
        const currentTime = Date.now();
        if (currentTime > otpExpire) {
            return NextResponse.json(new ApiResponse(400, 'OTP expired'), { status: 400 })
        };
        if (otp !== OTP) {
            return NextResponse.json(new ApiResponse(400, 'Invalid OTP'), { status: 400 })
        };
        existUser.isOtpVerified = true
        existUser.OTP = null
        existUser.otpExpire = null
        existUser.otpVerifiedAt = Date.now() + 10 * 60 * 1000 // 10 minutes
        await existUser.save()
        return NextResponse.json(new ApiResponse(200, "OTP verified successfully"), { status: 200 })
    } catch (error) {
        console.log("Error in verify-otp route", error)
        return NextResponse.json(new ApiResponse(500, "Internal Server Error"), { status: 500 })
    };
}