import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

type NextRequestUnion = NextRequest & NextApiRequest;

export async function middleware(req: NextRequestUnion, _ev: NextFetchEvent) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (token || pathname.includes("/api/auth")) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/") {
    return NextResponse.redirect("/");
  }
}
