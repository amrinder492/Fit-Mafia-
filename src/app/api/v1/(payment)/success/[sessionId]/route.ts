import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { body } = await req.json()
    console.log(body)
    // your logic here
    return new Response("Success");
  }
  