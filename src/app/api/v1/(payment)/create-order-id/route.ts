// import { db } from "@/config/db"
// import { ApiResponse } from "@/lib/ApiResponse";
// import { NextRequest, NextResponse } from "next/server"
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
// export async function POST (req: NextRequest) {
//     try {
//         await db();
//         const body = await req.json();
//       const { userId, cost, email } = body
//       console.log('mmmmmmmmmmmmmm', userId , cost)

//       if ( !userId || !cost || !email ){
//          return NextResponse.json( new ApiResponse(400, 'Id, cost and Email are required'),{ status: 400 })
//         };
  
//       // create a product
//       const product = await stripe.products.create({
//         name :`product name`,
//         metadata: {              // Store custom data in metadata
//           userId: `${userId}`,
//         //   postId: `${roomId}`,
//         }
//       })
  
//       // create product price
//       if(!product.id) {
//         return NextResponse.json( new ApiResponse(400, 'Product is not created',{product}),{ status: 400 })
//     } 
//         const price = await stripe.prices.create({
//           product: `${product.id}`,
//           unit_amount: cost * 100,
//           currency: 'inr'
//         })
  
//         // create session
//       if (!price.id)return NextResponse.json( new ApiResponse(400, 'price.id is not generated'), {status: 400 })
//       const session = await stripe.checkout.sessions.create({
//         line_items:[
//           {
//             price : `${price.id}`,
//             quantity : 1
//           }
//         ],
//         mode:'payment',
//         success_url : `http://localhost:3000/payment/success`,
//         cancel_url : 'http://localhost:3000/payment/cancel',
//         customer_email : `${email}`
//         // customer_email : 'test@test.com'
//       })
//       console.log('sessionssssssssss', session)
//       return NextResponse.json( new ApiResponse(400, 'successfully product created', {session}), )
//     } catch (error) {
//       console.log(error)
//       return NextResponse.json( new ApiResponse(500, 'Product not created, try again, internal server error', {error: error}), {status: 500})
//     }
//   }





import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { body } = await req.json()
    console.log(body)
    // your logic here
    return new Response("Success");
  }
  