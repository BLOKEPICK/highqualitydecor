// No "use client": Server Component
import { headers } from "next/headers";
import Hero from "../components/Hero";
import HeroDesktopGlassFollowChipsV2 from "../components/HeroDesktopGlassFollowChipsV2";

export default function HeroUAWrapper() {
  const ua = headers().get("user-agent") || "";
  const isIpad = /iPad/i.test(ua);
  const isTablet = /Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) || isIpad;
  const isMobile = (/Mobi/i.test(ua) || /iPhone|iPod/i.test(ua) || (/Android/i.test(ua) && /Mobile/i.test(ua))) && !isIpad;
  const showDesktop = !isMobile || isTablet;
  return showDesktop ? <HeroDesktopGlassFollowChipsV2 /> : <Hero />;
}
