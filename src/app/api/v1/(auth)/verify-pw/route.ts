import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json()
        const { email, newPassword } = body

        if(!email || !newPassword) {
            return NextResponse.json(new ApiResponse(400, 'Email and new password are required'), { status: 400 })
        };

        const existUser = await User.findOne({ email })
        if (!existUser) {
            return NextResponse.json(new ApiResponse(400, 'User not exist'), { status: 400 })
        };
        const { isOtpVerified, otpVerifiedAt } = existUser;
        if (!isOtpVerified) {
            return NextResponse.json(new ApiResponse(400, 'OTP not verified'), { status: 400 })
        };
        const currentTime = Date.now();
        if (currentTime > otpVerifiedAt) {
            return NextResponse.json(new ApiResponse(400, 'session expired ,Please re-verify OTP'), { status: 400 })
        };
        const hashPW = await bcrypt.hash(newPassword, 10)
        existUser.password = hashPW

        existUser.isOtpVerified = false
        existUser.OTP = null
        existUser.otpExpire = null
        existUser.otpVerifiedAt = null
        await existUser.save()
        return NextResponse.json(new ApiResponse(200, "Password successfully updated",{hashPW}), { status: 200 })
    } catch (error) {
        console.log("Error in verify-pw route", error)
        return NextResponse.json(new ApiResponse(500, "Internal Server Error"), { status: 500 })
    };
}