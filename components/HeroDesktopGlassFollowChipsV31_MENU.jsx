"use client";
import MenuSocials from "./MenuSocials";

/**
 * HeroDesktopGlassFollowChipsV31_MENU
 * - Desktop hero que usa EXACTAMENTE los SVG del menú móvil a través de <MenuSocials />
 * - En una sola línea, con separación, y tamaños fijos para evitar “saltos”.
 */
export default function HeroDesktopGlassFollowChipsV31_MENU() {
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

            {/* Misma tira de iconos que el menú móvil */}
            <div className="social-inline" aria-label="Follow us">
              <span className="label">Follow us</span>
              <div className="icons">
                <MenuSocials />
              </div>
            </div>
          </div>

          <ul className="chips-desktop" aria-label="Highlights">
            <li className="chip">
              <svg className="chip-ico" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M13 7h6M13 12h6M13 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>We set it up</span>
            </li>
            <li className="chip">
              <svg className="chip-ico" width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Custom design</span>
            </li>
            <li className="chip">
              <svg className="chip-ico" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Book today</span>
            </li>
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
        .bg-layers { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .mesh { position: absolute; border-radius: 999px; filter: blur(70px); opacity: .55; mix-blend-mode: multiply; }
        .mesh.a { top: -10%; left: -5%; width: 520px; height: 520px;
          background: radial-gradient(60% 60% at 40% 40%, var(--accent) 0%, transparent 70%); }
        .mesh.b { bottom: -8%; right: -6%; width: 620px; height: 620px;
          background: radial-gradient(60% 60% at 60% 60%, var(--accent-600) 0%, transparent 70%); opacity: .35; }
        .stripes {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(90deg, rgba(0,0,0,.04) 0px, rgba(0,0,0,.04) 1px, transparent 1px, transparent 20px);
          mask-image: radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,0.7), transparent 80%);
        }

        .container { position: relative; z-index: 1; }
        .card {
          margin: 0 auto;
          max-width: 1040px;
          padding: 40px 32px 32px;
          border-radius: 28px;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.45));
          backdrop-filter: saturate(120%) blur(6px);
          box-shadow: 0 10px 35px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6);
        }

        .title { margin: 10px 0 6px; font-size: clamp(28px, 4vw, 56px); line-height: 1.08; font-weight: 700; }
        .accent-underline { position: relative; }
        .accent-underline::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: var(--u-thick);
          background: linear-gradient(90deg, var(--accent) 0%, rgba(143,0,255,0) var(--u-fade));
        }
        .sub { margin-top: 8px; color: #525252; font-size: clamp(14px, 1.6vw, 18px); line-height: 1.7; }

        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 14px; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 18px; border-radius: 14px; font-weight: 600; font-size: 14px; transition: transform .08s ease, background .15s ease, border-color .15s ease, color .15s ease, box-shadow .15s ease; border: 1px solid var(--line); }
        .btn.primary { color: #fff; background: #111; border-color: #111; }
        .btn.primary:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,.15); }

        /* Una sola línea + espacio y tamaño fijo (iguales al móvil) */
        .social-inline { display:inline-flex; align-items:center; gap:12px; white-space:nowrap; }
        .social-inline .icons { display:inline-flex; align-items:center; gap:14px; }
        .social-inline :global(.socials) { display:inline-flex; gap:14px; align-items:center; }
        .social-inline :global(.socials a svg) { width:22px; height:22px; display:block; }

        .chips-desktop { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:16px; }
        .chip {
          display:inline-flex; align-items:center; gap:8px; padding:8px 12px;
          border:1px solid var(--line); border-radius:999px; background:#fff;
          box-shadow:0 1px 0 rgba(0,0,0,.05); font-size:13px; color:#111;
        }
        .chip :global(.chip-ico) { width:16px; height:16px; display:block; }

        @media (min-width: 1280px) {
          .hero-glass { padding: 148px 0 184px; }
          .card { padding: 46px 36px 36px; }
        }
      `}</style>
    </section>
  );
}
