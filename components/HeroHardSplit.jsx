// No "use client": Server Component
import Hero from "./Hero";
import HeroDesktopGlassFollowChipsV3 from "./HeroDesktopGlassFollowChipsV3";

/**
 * HeroHardSplit — hard separation by viewport (no client toggle logic)
 * - Desktop default: shows Desktop Hero, hides Mobile Hero.
 * - Mobile via media query: flips to show Mobile Hero and hide Desktop Hero.
 * Rationale: inline <style media="..."> ensures CSS is parsed immediately,
 * and default inline styles prevent the wrong hero from flashing.
 */
export default function HeroHardSplit() {
  return (
    <>
      {/* Desktop path: default visible */}
      <div className="__desktop-only" style={{display: "block"}}>
        <style
          // hide desktop block on small screens ASAP
          media="(max-width: 1023px)"
          dangerouslySetInnerHTML={{ __html: `.__desktop-only{display:none!important}` }}
        />
        <HeroDesktopGlassFollowChipsV3 />
      </div>

      {/* Mobile path: default hidden */}
      <div className="__mobile-only" style={{display: "none"}}>
        <style
          // show mobile block on small screens ASAP
          media="(max-width: 1023px)"
          dangerouslySetInnerHTML={{ __html: `.__mobile-only{display:block!important}` }}
        />
        <Hero />
      </div>
    </>
  );
}
