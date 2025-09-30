import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import { NextResponse } from "next/server";


export async function GET(){
   try {
    await db();
     const token = 'hhjhjhjhjkhjhjh'
 
     return NextResponse.json( new ApiResponse(201, "hello", '',token ), { status: 201 })
 
   } catch (error) {
     console.log("Error in check-health route", error)
     return NextResponse.json( new ApiResponse(500, "Internal Server Error"), { status: 500 })
   }
};