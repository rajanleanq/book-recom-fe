import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/books", request.nextUrl),)
    }
    return NextResponse.next();
}

export const config = {
    matchers: [
        "/admin/:path*"
    ]
}