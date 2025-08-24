"use client";

/**
 * HeroDesktopCentered — Centered / Comfy (No images)
 * Desktop & tablet only (wrap with .desktop or use show-desktop toggle in page.js)
 */
const CONFIG = {
  size: "comfy", // "compact" | "comfy" | "spacious"
  eyebrow: "Premium Interior Decor",
  titleStrong: "High Quality Decor",
  subtitle:
    "Refined interiors delivered on time. We handle design, materials, and installation with precision and care.",
  ctaPrimary: { label: "View Services", href: "#services" },
  ctaGhost:   { label: "Get a Quote", href: "#contact" },
  trust: ["Licensed & Insured", "On-time Delivery", "Premium Materials", "Warranty Included"],
  accent: "var(--accent)",
  accent2: "var(--accent-600)"
};

export default function HeroDesktopCentered() {
  const pad = CONFIG.size === "compact" ? {y1: 72, y2: 84}
            : CONFIG.size === "spacious" ? {y1: 128, y2: 150}
            : {y1: 100, y2: 120};

  return (
    <section className="hero hero-centered show-desktop" aria-label="High Quality Decor — Hero">
      <div className="container">
        <div className="headline">
          <p className="eyebrow">{CONFIG.eyebrow}</p>
          <h1 className="hero-title">
            Design that lasts.{" "}
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
            {CONFIG.trust.map((t,i)=>(<li key={i}>{t}</li>))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .hero-centered {
          position: relative;
          overflow: hidden;
          padding: ${pad.y1}px 0 ${pad.y2}px;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
          isolation: isolate;
          text-align: center;
        }
        .headline { max-width: 980px; margin: 0 auto; position: relative; z-index: 1; }

        /* Soft glows */
        .hero-centered::before, .hero-centered::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(60px);
          opacity: .5;
          z-index: 0;
        }
        .hero-centered::before {
          top: -120px; left: 20%;
          width: 520px; height: 520px;
          background: radial-gradient(60% 60% at 40% 40%, ${CONFIG.accent} 0%, transparent 70%);
        }
        .hero-centered::after {
          bottom: -140px; right: 15%;
          width: 520px; height: 520px;
          background: radial-gradient(60% 60% at 60% 60%, ${CONFIG.accent2} 0%, transparent 70%);
          opacity: .35;
        }

        .accent-underline { position: relative; }
        .accent-underline::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -6px;
          height: var(--u-thick);
          background: linear-gradient(90deg, ${CONFIG.accent} 0%, rgba(143,0,255,0) var(--u-fade));
        }

        .hero-cta { display: inline-flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 10px; }
        .trust-row { margin-top: 10px; display: flex; gap: 18px; flex-wrap: wrap; justify-content: center; color: var(--muted); font-size: 14px; }
        .trust-row li { position: relative; padding-left: 18px; }
        .trust-row li::before { content: ""; position: absolute; left: 0; top: 8px; width: 8px; height: 8px; border-radius: 999px; background: ${CONFIG.accent}; opacity: .9; }

        /* Ensure hidden on mobile if using .show-desktop wrapper locally */
        @media (max-width: 1023px) {
          .show-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
