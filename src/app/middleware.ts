import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt";


export async function middleware (req:NextRequest){
    const { pathname } = req.nextUrl
    const token = await getToken({req})

    if( token &&  pathname.startsWith('sign-in') ) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    if (pathname.startsWith('/api/v1/register') || pathname.startsWith('/api/v1/sign-in')) {
        return NextResponse.next();
    }

};

export const config = {
    matcher: [
        'sign-in',
        'register'
    ],
  }