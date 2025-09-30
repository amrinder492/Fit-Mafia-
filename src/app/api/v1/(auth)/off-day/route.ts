import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json()
        const { email, days } = body

        if (!email || !days) {
            return NextResponse.json(new ApiResponse(400, 'Email and days are required'), { status: 400 });
        }

        const existUser = await User.findOne({ email }) 
        if (!existUser) {
            return NextResponse.json(new ApiResponse(404, 'User not found'), { status: 404 })
        };

        if (!existUser.isSubscribed) {
            return NextResponse.json(new ApiResponse(400, "You do not have an active subscription plan"), { status: 400 });
        }

        // if (!existUser.isPaymentVerified) return NextResponse.json(new ApiResponse(400, "payment not verified"), { status: 400 });
        
        if (!existUser.subscriptionEndDate || !(new Date(existUser.subscriptionEndDate) >= new Date())) return NextResponse.json(new ApiResponse(400, "Your subscription is near to expiration"), { status: 400 });

        const daysToAdd = parseInt(days)
        if (isNaN(daysToAdd) || daysToAdd <= 0) {
            return NextResponse.json(new ApiResponse(400, "Invalid number of days"), { status: 400 });
        }

        existUser.offDays = existUser.offDays || [];
        if( daysToAdd === 1) {
            existUser.offDays.unshift(new Date())
            existUser.subscriptionEndDate = new Date(existUser.subscriptionEndDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        }
        if( daysToAdd === 2) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1); 
            existUser.offDays.unshift(tomorrow )
            existUser.subscriptionEndDate = new Date(existUser.subscriptionEndDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        }
        await existUser.save();

        return NextResponse.json(new ApiResponse(200, `You skipped ${days == 1 ? 'one day' : `${days} days` }. Subscription updated successfully`), { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json(new ApiResponse(500, 'Internal Server Error'), { status: 500 })
    }

};