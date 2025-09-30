import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import { DeliveryAddressType, SubscribePlanType, UserType } from "@/lib/types";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json();
        console.log('body----', body)
        const { preference, duration, plan, address, email } = body

        const { firstName, lastName, meals, portion, goal, street, addressLine2, city, province, postalCode, phoneNumber, deliveryInstructions } = address
        
        if(!email) return NextResponse.json(new ApiResponse(400, "Email is required"), { status: 400 });

        if (!preference || !deliveryInstructions) {
            return NextResponse.json(new ApiResponse(400, "Please select Plan"), { status: 400 });
        };

        if (![firstName, lastName, street, city, province, postalCode, phoneNumber].some((e) => e.length > 0)) {
            return NextResponse.json(new ApiResponse(400, "Delivery Address is required"), { status: 400 });
        };

        // if (!promoCode || promoCode.length < 5) {
        //     return NextResponse.json(new ApiResponse(400, "Promo code is invalid"), { status: 400 });
        // };

        const existUser = await User.findOne({email})
        if (!existUser) return NextResponse.json(new ApiResponse(404, "User not found"), { status: 404 });

        // if (existUser.isSubscribed) return NextResponse.json(new ApiResponse(400, "Already subscribed"), { status: 400 });

        if (existUser.isBanned) return NextResponse.json(new ApiResponse(400, "You are banned"), { status: 400 });

        const subscribePlan: SubscribePlanType = {
            duration: duration,
            preference: preference,
            plan,
            meals, 
            portion,
            goal
        };

        const weeks = parseInt(duration)
        console.log("weeks", weeks)

        const deliveryAddressObj: DeliveryAddressType = {
            firstName,
            lastName,
            street,
            addressLine2: addressLine2 || null,
            city,
            province,
            postalCode,
            phoneNumber,
            enterDeliveryInstruction: deliveryInstructions
        };
        existUser.currentSubscribedPlan = subscribePlan;
        existUser.deliveryAddress = deliveryAddressObj;
        existUser.isSubscribed = true; 
        existUser.subscribedAt = new Date();
        existUser.isPaymentVerified = false
        existUser.subscriptionEndDate = new Date(Date.now() + weeks * 7 * 24 * 60 * 60 * 1000)
        existUser.subscribePlans = existUser.subscribePlans || []
        existUser.subscribePlans.unshift(subscribePlan);
        // await existUser.save();
        console.log(existUser)
        
        // return new Response(JSON.stringify({ message: "Subscription successful" }), { status: 200 })
        return NextResponse.json(new ApiResponse<UserType>(200, "Subscription successful",existUser ), { status: 200 })
    } catch (error) {
        console.log("Error in subscribe-plan route", error)
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    };
};