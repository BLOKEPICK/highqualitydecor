"use client";

/**
 * HeroDesktopMetrics — Split + Metrics (No images)
 * Left: copy / Right: metric cards (no images)
 */
const CONFIG = {
  size: "comfy", // "compact" | "comfy" | "spacious"
  eyebrow: "Interior Design & Installation",
  titleStrong: "High Quality Decor",
  subtitle:
    "Trusted by homeowners and developers. We deliver beautifully finished interiors with zero guesswork.",
  ctaPrimary: { label: "Our Services", href: "#services" },
  ctaGhost:   { label: "Free Estimate", href: "#contact" },
  metrics: [
    { label: "Projects Delivered", value: "240+" },
    { label: "Avg. Rating", value: "4.9/5" },
    { label: "Years Experience", value: "12" }
  ],
  accent: "var(--accent)",
  accent2: "var(--accent-600)"
};

export default function HeroDesktopMetrics() {
  const pad = CONFIG.size === "compact" ? {y1: 72, y2: 84}
            : CONFIG.size === "spacious" ? {y1: 128, y2: 150}
            : {y1: 96, y2: 120};

  return (
    <section className="hero hero-metrics show-desktop" aria-label="High Quality Decor — Hero">
      <div className="container">
        <div className="inner">
          <div className="copy">
            <p className="eyebrow">{CONFIG.eyebrow}</p>
            <h1 className="hero-title">
              Spaces with intent.{" "}
              <span className="accent-underline">{CONFIG.titleStrong}</span>
            </h1>
            <p className="hero-sub">{CONFIG.subtitle}</p>
            <div className="hero-cta">
              <a href={CONFIG.ctaPrimary.href} className="cta-primary">{CONFIG.ctaPrimary.label}</a>
              <a href={CONFIG.ctaGhost.href} className="cta-ghost">{CONFIG.ctaGhost.label}</a>
            </div>
          </div>

          <div className="metrics" aria-label="Company highlights">
            {CONFIG.metrics.map((m, i) => (
              <div className="card" key={i}>
                <div className="value">{m.value}</div>
                <div className="label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-metrics {
          position: relative;
          overflow: hidden;
          padding: ${pad.y1}px 0 ${pad.y2}px;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
          isolation: isolate;
        }
        .inner {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .card {
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 22px 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.5));
          backdrop-filter: saturate(120%) blur(2px);
          box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 1px 0 rgba(255,255,255,.5);
        }
        .value {
          font-size: clamp(22px, 4vw, 40px);
          font-weight: 700;
          line-height: 1.1;
        }
        .label {
          margin-top: 6px;
          color: var(--muted);
          font-size: 14px;
        }

        /* Accent glows */
        .hero-metrics::before, .hero-metrics::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(60px);
          opacity: .5;
          z-index: 0;
        }
        .hero-metrics::before {
          top: -120px; right: -120px;
          width: 420px; height: 420px;
          background: radial-gradient(60% 60% at 40% 40%, ${CONFIG.accent} 0%, transparent 70%);
        }
        .hero-metrics::after {
          bottom: -140px; left: -140px;
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

        /* Hidden on mobile if using local show-desktop convention */
        @media (max-width: 1023px) {
          .show-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
