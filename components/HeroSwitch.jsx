"use client";
import Hero from "./Hero";
import HeroDesktopNoImage from "./HeroDesktopNoImage";

/**
 * Ensures exactly 1 hero is visible:
 * - Mobile (<=1023px): <Hero />
 * - Desktop/Tablet (>=1024px): <HeroDesktopNoImage />
 * Uses local styled-jsx (valid in Client Components).
 */
export default function HeroSwitch() {
  return (
    <section aria-label="Hero switch">
      <div className="only-mobile"><Hero /></div>
      <div className="only-desktop"><HeroDesktopNoImage /></div>

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
