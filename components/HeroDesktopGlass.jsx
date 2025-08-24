"use client";

/**
 * HeroDesktopGlass — Glass Card / Full-bleed (No images)
 * Desktop & tablet only (render via HeroSwitch or a desktop-only wrapper)
 * Uses CSS variables from app/globals.css: --accent, --accent-600, etc.
 */
export default function HeroDesktopGlass() {
  return (
    <section className="hero-glass" aria-label="High Quality Decor — Hero">
      <div className="bg-layers" aria-hidden="true">
        <div className="mesh a" />
        <div className="mesh b" />
        <div className="stripes" />
      </div>

      <div className="container">
        <div className="card">
          <p className="eyebrow">Interior Design &amp; Installation</p>
          <h1 className="title">
            Crafted for living.{" "}
            <span className="accent-underline">High Quality Decor</span>
          </h1>
          <p className="sub">
            We design and deliver refined interiors—on schedule—using premium materials, precise finishes, and a seamless process.
          </p>

          <div className="cta-row">
            <a href="#services" className="btn primary" aria-label="View Services">View Services</a>
            <a href="#contact" className="btn ghost" aria-label="Get a Quote">Get a Quote</a>
          </div>

          <ul className="trust" aria-label="Highlights">
            <li>Licensed &amp; Insured</li>
            <li>On-time Delivery</li>
            <li>Warranty Included</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .hero-glass {
          position: relative;
          overflow: hidden;
          padding: 132px 0 164px;
          border-bottom: 1px solid var(--line);
          background: linear-gradient(180deg, #fff, #fafafa);
          isolation: isolate;
        }

        /* Background decorative layers (no images) */
        .bg-layers { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .mesh { position: absolute; border-radius: 999px; filter: blur(70px); opacity: .55; mix-blend-mode: multiply; }
        .mesh.a { top: -10%; left: -5%; width: 520px; height: 520px;
          background: radial-gradient(60% 60% at 40% 40%, var(--accent) 0%, transparent 70%); }
        .mesh.b { bottom: -8%; right: -6%; width: 620px; height: 620px;
          background: radial-gradient(60% 60% at 60% 60%, var(--accent-600) 0%, transparent 70%); opacity: .35; }
        .stripes {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg,
            rgba(0,0,0,.04) 0px,
            rgba(0,0,0,.04) 1px,
            transparent 1px,
            transparent 20px
          );
          mask-image: radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,0.7), transparent 80%);
        }

        .container { position: relative; z-index: 1; }

        .card {
          margin: 0 auto;
          max-width: 980px;
          padding: 36px 28px 28px;
          border-radius: 28px;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.45));
          backdrop-filter: saturate(120%) blur(6px);
          box-shadow:
            0 10px 35px rgba(0,0,0,.06),
            inset 0 1px 0 rgba(255,255,255,.6);
        }

        .eyebrow {
          font-size: 13px;
          color: var(--muted);
          letter-spacing: .02em;
        }
        .title {
          margin: 10px 0 6px;
          font-size: clamp(28px, 4vw, 56px);
          line-height: 1.08;
          font-weight: 700;
        }
        .accent-underline { position: relative; }
        .accent-underline::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: var(--u-thick);
          background: linear-gradient(90deg, var(--accent) 0%, rgba(143,0,255,0) var(--u-fade));
        }
        .sub {
          margin-top: 8px;
          color: #525252;
          font-size: clamp(14px, 1.6vw, 18px);
          line-height: 1.7;
        }

        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 14px; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 18px; border-radius: 14px; font-weight: 600; font-size: 14px;
          transition: transform .08s ease, background .15s ease, border-color .15s ease, color .15s ease, box-shadow .15s ease;
          border: 1px solid var(--line);
        }
        .btn.primary { color: #fff; background: #111; border-color: #111; }
        .btn.primary:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,.15); }
        .btn.ghost { background: #fff; color: #111; }
        .btn.ghost:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,.08); }

        .trust {
          display: flex; gap: 18px; flex-wrap: wrap;
          margin-top: 14px; color: var(--muted); font-size: 14px;
        }
        .trust li { position: relative; padding-left: 18px; }
        .trust li::before {
          content: ""; position: absolute; left: 0; top: 8px;
          width: 8px; height: 8px; border-radius: 999px; background: var(--accent); opacity: .9;
        }

        @media (min-width: 1280px) {
          .hero-glass { padding: 148px 0 184px; }
          .card { padding: 44px 34px 34px; }
        }
      `}</style>
    </section>
  );
}
