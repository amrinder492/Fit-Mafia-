import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import Subscriber from "@/models/subscriberModel";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest,) {
        try {
            await db()
            const body = await req.json();
            console.log('body----', body)
            const { phoneNumber } = body

            if (!phoneNumber) {
                return NextResponse.json(new ApiResponse(400, "Phone Number is required."), { status: 400 });
            };
            const existPhoneNumber = await Subscriber.findOne({phoneNumber: phoneNumber})
            
            if (existPhoneNumber || (existPhoneNumber as [])?.length === 0 ) {
                console.log('-=-=-=-==-=--==',existPhoneNumber)
                return NextResponse.json(new ApiResponse(400, "Email already subscribed."), { status: 400 }); 
            };
            const newSubscriber = await Subscriber.create({
                phoneNumber: phoneNumber
            });
            
            if (!newSubscriber) {
                return NextResponse.json(new ApiResponse(500, "Failed to subscribe."), { status: 500 }); 
            };
            return NextResponse.json(new ApiResponse(200, "Thanks for subscribing!"), { status: 200 });
        } catch (error) {
            console.error("Subscription error:", error);
            return NextResponse.json(new ApiResponse(500, "Something went wrong."), { status: 500 });            
        }

}