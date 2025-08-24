// No "use client": this is a Server Component
import Hero from "./Hero";
import HeroDesktopGlassFollowChipsV2 from "./HeroDesktopGlassFollowChipsV2";

/**
 * HeroSSRWrapper — renders exactly one hero at paint time using global CSS
 * - Uses global .mobile / .desktop classes defined in app/globals.css
 * - Avoids Client-side styled-jsx toggles to prevent the brief double-hero flash
 */
export default function HeroSSRWrapper() {
  return (
    <>
      <div className="mobile"><Hero /></div>
      <div className="desktop"><HeroDesktopGlassFollowChipsV2 /></div>
    </>
  );
}
