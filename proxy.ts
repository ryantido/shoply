import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

const PUBLIC_FILE = /\.(.*)$/;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const isAuthRoute = pathname.startsWith("/auth");

  if (session?.user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!session?.user && !isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/sign-in";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
