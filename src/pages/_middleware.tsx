import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const secret = process.env.JWT_SECRET;

type NextRequestUnion = NextRequest & NextApiRequest;

export async function middleware(req: NextRequestUnion, _ev: NextFetchEvent) {
  const token = await getToken({ req, secret });

  if (token || req.nextUrl.pathname.includes("/api/auth")) {
    return NextResponse.next();
  }

  if (!token && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect("/");
  }
}
