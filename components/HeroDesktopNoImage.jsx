"use client";

export default function HeroDesktopNoImage() {
  return (
    <section className="hero hero-noimg desktop" aria-label="High Quality Decor — Hero">
      <div className="container">
        <div className="inner">
          <p className="eyebrow">Premium Interior Decor</p>
          <h1 className="hero-title">
            Elevate your space with <span className="accent-underline">High Quality Decor</span>
          </h1>
          <p className="hero-sub">
            Bespoke designs, meticulous finishes, and a seamless experience from concept to completion.
          </p>

          <div className="hero-cta">
            <a href="#services" className="cta-primary" aria-label="Explore our services">
              Explore Services
            </a>
            <a href="#contact" className="cta-ghost" aria-label="Request a quote">
              Get a Quote
            </a>
          </div>

          <ul className="trust-row" aria-label="Key value highlights">
            <li>On‑time Delivery</li>
            <li>Premium Materials</li>
            <li>Warranty Included</li>
          </ul>
        </div>
      </div>

      {/* Local styles: no external images, only CSS shapes/gradients */}
      <style jsx>{`
        .hero-noimg {
          position: relative;
          overflow: hidden;
          padding: 96px 0 108px;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
        }
        /* Soft gradient glows (pure CSS) */
        .hero-noimg::before,
        .hero-noimg::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(60px);
          opacity: 0.5;
        }
        .hero-noimg::before {
          top: -120px;
          right: -120px;
          width: 420px;
          height: 420px;
          background: radial-gradient(60% 60% at 40% 40%, var(--accent) 0%, transparent 70%);
        }
        .hero-noimg::after {
          bottom: -140px;
          left: -140px;
          width: 520px;
          height: 520px;
          background: radial-gradient(60% 60% at 60% 60%, var(--accent-600) 0%, transparent 70%);
          opacity: 0.35;
        }

        .hero-noimg .inner {
          display: grid;
          gap: 20px;
          max-width: 920px;
        }
        .accent-underline {
          position: relative;
        }
        .accent-underline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: var(--u-thick);
          background: linear-gradient(90deg, var(--accent) 0%, rgba(143,0,255,0) var(--u-fade));
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .trust-row {
          margin-top: 6px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 14px;
        }
        .trust-row li {
          position: relative;
          padding-left: 18px;
        }
        .trust-row li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0.9;
        }

        /* Tablet/Laptop spacings */
        @media (min-width: 1024px) {
          .hero-noimg { padding: 120px 0 140px; }
          .hero-noimg .inner { gap: 24px; }
        }
      `}</style>
    </section>
  );
}
