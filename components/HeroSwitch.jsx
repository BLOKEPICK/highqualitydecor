"use client";
import Hero from "./Hero";
import HeroDesktopGlass from "./HeroDesktopGlass";

/**
 * HeroSwitch — version wired to the new Glass hero
 * - Mobile (<=1023px): <Hero />
 * - Desktop/Tablet (>=1024px): <HeroDesktopGlass />
 */
export default function HeroSwitch() {
  return (
    <section aria-label="Hero switch">
      <div className="only-mobile"><Hero /></div>
      <div className="only-desktop"><HeroDesktopGlass /></div>

      <style jsx>{`
        .only-mobile { display: none; }
        .only-desktop { display: block; }
        @media (max-width: 1023px) {
          .only-mobile { display: block; }
          .only-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
