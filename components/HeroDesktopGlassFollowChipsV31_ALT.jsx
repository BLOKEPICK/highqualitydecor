"use client";
import SocialsInline from "./SocialsInline"; // <-- pega aquí los <a>...</a> del Header

export default function HeroDesktopGlassFollowChipsV31_ALT() {
  return (
    <section className="hero-glass" aria-label="High Quality Decor — Hero">
      <div className="container">
        <div className="card">
          <div className="cta-row">
            <a href="#services" className="btn primary" aria-label="View Services">View Services</a>

            <div className="social-inline" aria-label="Follow us">
              <span className="label">Follow us</span>
              <div className="icons">
                <SocialsInline />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-glass { padding: 40px 0; }
        .card { max-width: 1040px; margin: 0 auto; }
        .cta-row { display: inline-flex; gap: 12px; align-items: center; }

        .social-inline { display: inline-flex; align-items: center; gap: 12px; white-space: nowrap; }
        .social-inline .icons { display: inline-flex; align-items: center; gap: 14px; }
        .social-inline :global(.socials) { display: inline-flex; gap: 14px; align-items: center; }
        .social-inline :global(.socials a svg) { width: 22px; height: 22px; display: block; }
      `}</style>
    </section>
  );
}
