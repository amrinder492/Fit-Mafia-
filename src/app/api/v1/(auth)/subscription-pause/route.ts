import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json()
        const { email } = body

        if (!email) {
            return NextResponse.json(new ApiResponse(400, 'Email is required'), { status: 400 });
        }

        const existUser = await User.findOne({ email }) 
        if (!existUser) {
            return NextResponse.json(new ApiResponse(404, 'User not found'), { status: 404 })
        };

        if (!existUser.isSubscribed) {
            return NextResponse.json(new ApiResponse(400, "You do not have an active subscription plan"), { status: 400 });
        }

        if (existUser.isSubscriptionPaused) {
            return NextResponse.json(new ApiResponse(400, "Your subscription is already paused"), { status: 400 });
        }

        // if (!existUser.isPaymentVerified) return NextResponse.json(new ApiResponse(400, "payment not verified"), { status: 400 });
        
        if (!existUser.subscriptionEndDate || !(new Date(existUser.subscriptionEndDate) >= new Date())) return NextResponse.json(new ApiResponse(400, "Your subscription is near to expiration"), { status: 400 });

        existUser.isSubscriptionPaused = true
        existUser.subscriptionPausedAt = new Date()
        
        await existUser.save();

        return NextResponse.json(new ApiResponse(200, `Your subscription has been paused successfully.`), { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json(new ApiResponse(500, 'Internal Server Error'), { status: 500 })
    }

};