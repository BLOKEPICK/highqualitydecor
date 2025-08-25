// middleware.js — UA-based hard split to /desktop or /mobile
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Only handle the homepage (adjust if needed)
  if (pathname !== "/") return NextResponse.next();

  const ua = req.headers.get("user-agent") || "";
  const isIpad = /iPad/i.test(ua);
  const isTablet = /Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) || isIpad;
  const isMobile = (/Mobi/i.test(ua) || /iPhone|iPod/i.test(ua) || (/Android/i.test(ua) && /Mobile/i.test(ua))) && !isIpad;
  const toDesktop = !isMobile || isTablet;

  const url = req.nextUrl.clone();
  url.pathname = toDesktop ? "/desktop" : "/mobile";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/"],
};
