import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import "@/models/mealsPlan.Model";
import "@/models/paymentHistory.Model";
import User from "@/models/user.Model";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await db();
        const allUsers = await User.find().select('email userName address subscriptionPlan isSubscribed subscribedAt isPaymentVerified')
        .populate('paymentHistory').populate('subscribePlans').exec()
        if (!allUsers) {
            return NextResponse.json(new ApiResponse(404,  "No users found", {allUsers}), { status: 404 });
        };
        return NextResponse.json(new ApiResponse(200, "All users fetched successfully", {allUsers}), { status: 200 });

    } catch (error) {
        console.log("Error in all-users route", error)
        return NextResponse.json(new ApiResponse(500, "Internal Server Error"), { status: 500 })
    }
    
}