
"use client";
import Hero from "./Hero";
import HeroDesktopGlassFollowChipsV2 from "./HeroDesktopGlassFollowChipsV2";

export default function HeroSwitch() {
  return (
    <section aria-label="Hero switch">
      <div className="only-mobile"><Hero /></div>
      <div className="only-desktop"><HeroDesktopGlassFollowChipsV2 /></div>

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
