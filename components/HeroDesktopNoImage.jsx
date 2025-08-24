"use client";

/**
 * HeroDesktopNoImage — Split / Spacious (Commercial Copy)
 * Desktop & tablet only (wrap with .desktop and keep your mobile hero intact)
 * Pure CSS (no images). Uses global CSS variables defined in app/globals.css
 */
const CONFIG = {
  layout: "split",        // "centered" | "split"
  size: "spacious",       // "compact" | "comfy" | "spacious"
  eyebrow: "High-End Interior Decor",
  titleStrong: "High Quality Decor",
  subtitle:
    "From concept to flawless installation, we craft refined spaces with premium materials, precise finishes, and a seamless, on-schedule process.",
  ctaPrimary: { label: "View Services", href: "#services" },
  ctaGhost:   { label: "Get a Quote", href: "#contact" },
  trust: ["Licensed & Insured", "On‑time Delivery", "Premium Materials", "Warranty Included"],
  accent: "var(--accent)",
  accent2: "var(--accent-600)"
};

export default function HeroDesktopNoImage() {
  const pad = CONFIG.size === "compact" ? {y1: 72, y2: 84}
            : CONFIG.size === "spacious" ? {y1: 128, y2: 160}
            : {y1: 96, y2: 120}; // comfy

  return (
    <section
      className={`hero hero-noimg desktop ${CONFIG.layout === "split" ? "is-split" : "is-centered"}`}
      aria-label="High Quality Decor — Hero"
    >
      <div className="container">
        <div className={`inner ${CONFIG.layout === "split" ? "grid-2" : "grid-1"}`}>
          <div className="copy">
            <p className="eyebrow">{CONFIG.eyebrow}</p>
            <h1 className="hero-title">
              Design that elevates.&nbsp;{" "}
              <span className="accent-underline">{CONFIG.titleStrong}</span>
            </h1>
            <p className="hero-sub">{CONFIG.subtitle}</p>

            <div className="hero-cta">
              <a href={CONFIG.ctaPrimary.href} className="cta-primary" aria-label={CONFIG.ctaPrimary.label}>
                {CONFIG.ctaPrimary.label}
              </a>
              <a href={CONFIG.ctaGhost.href} className="cta-ghost" aria-label={CONFIG.ctaGhost.label}>
                {CONFIG.ctaGhost.label}
              </a>
            </div>

            <ul className="trust-row" aria-label="Key value highlights">
              {CONFIG.trust.map((t, i) => (<li key={i}>{t}</li>))}
            </ul>
          </div>

          {CONFIG.layout === "split" && (
            <div className="art" aria-hidden="true">
              <div className="blob a" />
              <div className="blob b" />
              <div className="ring" />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hero-noimg {
          position: relative;
          overflow: hidden;
          padding: ${pad.y1}px 0 ${pad.y2}px;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
          isolation: isolate;
        }

        /* Global glows */
        .hero-noimg::before,
        .hero-noimg::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(60px);
          opacity: 0.5;
          z-index: 0;
          animation: float 16s ease-in-out infinite alternate;
        }
        .hero-noimg::before {
          top: -120px;
          right: -120px;
          width: 420px;
          height: 420px;
          background: radial-gradient(60% 60% at 40% 40%, ${CONFIG.accent} 0%, transparent 70%);
        }
        .hero-noimg::after {
          bottom: -140px;
          left: -140px;
          width: 520px;
          height: 520px;
          background: radial-gradient(60% 60% at 60% 60%, ${CONFIG.accent2} 0%, transparent 70%);
          opacity: 0.35;
          animation-delay: .6s;
        }
        @keyframes float {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(12px,-10px,0); }
        }

        .inner.grid-1 {
          display: grid;
          gap: 24px;
          max-width: 980px;
          position: relative;
          z-index: 1;
        }

        .inner.grid-2 {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 48px;
          position: relative;
          z-index: 1;
        }

        .copy {}
        .art {
          height: 400px;
          position: relative;
        }
        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(34px);
          opacity: .55;
          mix-blend-mode: multiply;
          animation: pulse 12s ease-in-out infinite alternate;
        }
        .blob.a {
          top: 8%;
          left: 10%;
          width: 240px;
          height: 240px;
          background: radial-gradient(60% 60% at 40% 40%, ${CONFIG.accent} 0%, transparent 70%);
        }
        .blob.b {
          bottom: 6%;
          right: 10%;
          width: 280px;
          height: 280px;
          background: radial-gradient(60% 60% at 60% 60%, ${CONFIG.accent2} 0%, transparent 70%);
          animation-delay: .4s;
        }
        .ring {
          position: absolute;
          inset: 10% 16%;
          border-radius: 28px;
          border: 1px solid var(--line);
          box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 1px 0 rgba(255,255,255,.5);
          backdrop-filter: saturate(120%) blur(2px);
          background: linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35));
        }
        @keyframes pulse {
          from { transform: scale(1); }
          to   { transform: scale(1.05) translate3d(6px,-4px,0); }
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
          background: linear-gradient(90deg, ${CONFIG.accent} 0%, rgba(143,0,255,0) var(--u-fade));
        }

        .hero-cta {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .trust-row {
          margin-top: 8px;
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
          background: ${CONFIG.accent};
          opacity: 0.9;
        }

        @media (min-width: 1280px) {
          .art { height: 460px; }
        }
      `}</style>
    </section>
  );
}
