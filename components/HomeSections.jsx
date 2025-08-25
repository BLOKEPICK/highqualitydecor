"use client";

// components/HomeSections.jsx
// Redesigned: richer visuals, purple accents (uses var(--accent) with fallback), minimal CTAs.
// Sections: Services → How it works → Why choose us + single CTA.

export default function HomeSections() {
  return (
    <>
      {/* ===== SERVICES ===== */}
      <section id="services" className="s-services" aria-label="Our services">
        <div className="bg" aria-hidden="true">
          <div className="blob a" />
          <div className="blob b" />
          <div className="gridlines" />
        </div>

        <div className="container">
          <header className="hdr">
            <div className="eyebrow">Services</div>
            <h2 className="title">
              Crafted set‑ups, <span className="accent">memorable moments</span>
            </h2>
            <p className="sub">Pick a base and we tailor the details — colors, props and delivery.</p>
          </header>

          <ul className="cards" role="list">
            {SERVICES.map((s) => (
              <li key={s.key} className="card" aria-label={s.h3}>
                <div className="icobadge" aria-hidden="true">
                  {s.icon}
                </div>
                <div className="body">
                  <h3>{s.h3}</h3>
                  <p>{s.p}</p>
                  <div className="meta">
                    {s.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
                {/* whole card is hoverable; we keep CTAs minimal, no extra buttons here */}
              </li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          .s-services {
            position: relative;
            padding: 68px 0 56px;
            background: #fff;
            border-top: 1px solid var(--line);
            overflow: hidden;
            isolation: isolate;
          }
          .bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
          .blob { position: absolute; filter: blur(90px); opacity: .5; border-radius: 999px; }
          .blob.a { top: -10%; left: -6%; width: 540px; height: 540px; background: radial-gradient(60% 60% at 30% 40%, var(--accent, #6D28D9), transparent 70%); }
          .blob.b { bottom: -18%; right: -12%; width: 700px; height: 700px; background: radial-gradient(60% 60% at 60% 60%, color-mix(in oklab, var(--accent, #6D28D9) 70%, #111 30%), transparent 70%); opacity: .28; }
          .gridlines {
            position: absolute; inset: -20px;
            background: repeating-linear-gradient(90deg, rgba(0,0,0,.04) 0 1px, transparent 1px 22px),
                        repeating-linear-gradient(0deg, rgba(0,0,0,.035) 0 1px, transparent 1px 22px);
            mask-image: radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,.85), transparent 78%);
          }

          .container { position: relative; z-index: 1; max-width: 1120px; margin: 0 auto; padding: 0 16px; }
          .hdr { text-align: left; }
          .eyebrow {
            display: inline-flex; align-items: center; gap: 8px;
            font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
            color: #6b7280;
          }
          .eyebrow::after {
            content: ""; width: 64px; height: 2px; border-radius: 2px;
            background: linear-gradient(90deg, var(--accent, #6D28D9), rgba(111,0,255,0));
          }
          .title { margin: 8px 0 8px; font-size: clamp(24px, 3.8vw, 34px); font-weight: 900; line-height: 1.08; }
          .accent { position: relative; white-space: pre; }
          .accent::after {
            content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 10px;
            background: linear-gradient(90deg, color-mix(in oklab, var(--accent, #6D28D9) 25%, transparent 75%), transparent);
            border-radius: 6px;
          }
          .sub { color: #4b5563; max-width: 60ch; }

          .cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 18px;
          }
          @media (min-width: 640px) { .cards { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .cards { grid-template-columns: repeat(3, 1fr); } }

          .card {
            position: relative;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 14px;
            padding: 16px;
            border-radius: 18px;
            border: 1px solid var(--line);
            background:
              radial-gradient(140% 120% at 10% -10%, rgba(255,255,255,.9) 20%, rgba(255,255,255,.5) 60%),
              linear-gradient(180deg, rgba(255,255,255,.7), rgba(255,255,255,.5));
            backdrop-filter: saturate(120%) blur(6px);
            box-shadow: 0 8px 24px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6);
            transition: transform .08s ease, box-shadow .18s ease, border-color .18s ease;
          }
          .card::after {
            /* subtle purple keyline on hover */
            content:""; position:absolute; inset:0; border-radius:18px; pointer-events:none; opacity:0;
            box-shadow: 0 0 0 2px color-mix(in oklab, var(--accent, #6D28D9) 55%, transparent);
            transition: opacity .18s ease;
          }
          .card:hover { transform: translateY(-3px); box-shadow: 0 16px 32px rgba(0,0,0,.08); border-color: color-mix(in oklab, var(--accent, #6D28D9) 25%, var(--line)); }
          .card:hover::after { opacity: 1; }
          .icobadge {
            width: 44px; height: 44px; border-radius: 14px;
            display:grid; place-items:center;
            background: radial-gradient(100% 100% at 50% 0%, color-mix(in oklab, var(--accent, #6D28D9) 80%, #fff 20%), color-mix(in oklab, var(--accent, #6D28D9) 35%, #fff 65%));
            color: #fff;
            box-shadow: 0 8px 18px color-mix(in oklab, var(--accent, #6D28D9) 25%, transparent);
          }
          .icobadge :global(svg){ width:22px; height:22px; display:block; }
          .body h3 { margin: 2px 0 4px; font-size: 16px; font-weight: 800; }
          .body p { color:#4b5563; font-size: 14px; line-height: 1.65; }
          .meta { margin-top: 6px; display:flex; flex-wrap:wrap; gap: 8px; }
          .pill {
            display:inline-flex; align-items:center; gap:6px; padding:6px 10px; border-radius:999px;
            border:1px solid color-mix(in oklab, var(--accent, #6D28D9) 30%, var(--line));
            background: linear-gradient(180deg, #fff, #fafafa);
            font-size:12px; color:#111;
          }
        `}</style>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="process" className="s-process" aria-label="How it works">
        <div className="container">
          <header className="hdr">
            <div className="eyebrow">Process</div>
            <h2 className="title">How it works</h2>
          </header>

          <ol className="track" role="list">
            {STEPS.map((st) => (
              <li key={st.n} className="step">
                <span className="dot" aria-hidden="true">{st.n}</span>
                <div className="copy">
                  <h3>{st.h3}</h3>
                  <p>{st.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <style jsx>{`
          .s-process {
            position: relative;
            background: linear-gradient(180deg, #fafafa, #fff);
            border-top: 1px solid var(--line);
            padding: 48px 0;
          }
          .container { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
          .hdr .eyebrow { font-size: 12px; font-weight: 800; letter-spacing:.08em; text-transform:uppercase; color:#6b7280; }
          .hdr .title { margin: 6px 0 14px; font-size: clamp(22px, 3.6vw, 32px); font-weight: 900; }

          .track {
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
            padding-left: 4px;
          }
          @media (min-width: 768px) { .track { grid-template-columns: repeat(3, 1fr); } }
          .track::before {
            /* subtle purple gradient line that connects steps on mobile */
            content:""; position:absolute; left: 13px; top: 18px; bottom: 18px; width: 2px;
            background: linear-gradient(180deg, var(--accent, #6D28D9), transparent);
            border-radius: 2px;
          }
          @media (min-width: 768px) { .track::before { display:none; } }

          .step {
            position: relative;
            display:flex; gap:12px; align-items:flex-start;
            padding: 14px; border:1px solid var(--line); border-radius: 14px; background:#fff;
            box-shadow: 0 1px 0 rgba(0,0,0,.04);
            transition: transform .08s ease, box-shadow .18s ease, border-color .18s ease;
          }
          .step:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,.08); border-color: color-mix(in oklab, var(--accent, #6D28D9) 20%, var(--line)); }
          .dot {
            display:grid; place-items:center; flex:0 0 auto; width: 28px; height: 28px; border-radius: 10px;
            color:#fff; font-weight:900; font-size: 13px;
            background: linear-gradient(180deg, color-mix(in oklab, var(--accent, #6D28D9) 85%, #111 15%), var(--accent, #6D28D9));
            box-shadow: 0 8px 18px color-mix(in oklab, var(--accent, #6D28D9) 25%, transparent);
          }
          .copy h3 { margin: 0 0 4px; font-size: 15px; font-weight: 900; }
          .copy p { margin: 0; color:#4b5563; font-size:14px; line-height:1.65; }
        `}</style>
      </section>

      {/* ===== WHY CHOOSE US + CTA ===== */}
      <section id="why" className="s-why" aria-label="Why choose us">
        <div className="bg" aria-hidden="true">
          <div className="mesh a" />
          <div className="mesh b" />
        </div>
        <div className="container">
          <header className="hdr">
            <div className="eyebrow">Why choose us</div>
            <h2 className="title">Purple‑powered quality</h2>
          </header>

          <ul className="badges" role="list">
            {BADGES.map((b) => (
              <li key={b} className="badge">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7 9 18l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="cta">
            <div className="copy">
              <h3>Ready when you are</h3>
              <p>One simple booking — we handle the rest.</p>
            </div>
            <a href="/book" className="btn" aria-label="Book now">Book now</a>
          </div>
        </div>

        <style jsx>{`
          .s-why {
            position: relative;
            padding: 50px 0 70px;
            background: linear-gradient(180deg, #fff, #fafafa);
            border-top: 1px solid var(--line);
            overflow: hidden;
            isolation: isolate;
          }
          .bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
          .mesh { position: absolute; filter: blur(90px); opacity:.55; border-radius:999px; }
          .mesh.a { top: -12%; right: 10%; width: 520px; height: 520px; background: radial-gradient(60% 60% at 40% 40%, var(--accent, #6D28D9), transparent 70%); }
          .mesh.b { bottom: -15%; left: 6%; width: 700px; height: 700px; background: radial-gradient(60% 60% at 60% 60%, color-mix(in oklab, var(--accent, #6D28D9) 70%, #111 30%), transparent 70%); opacity:.25; }

          .container { position: relative; z-index: 1; max-width: 1120px; margin: 0 auto; padding: 0 16px; }
          .hdr .eyebrow { font-size: 12px; font-weight: 800; letter-spacing:.08em; text-transform:uppercase; color:#6b7280; }
          .hdr .title { margin: 6px 0 14px; font-size: clamp(22px, 3.6vw, 32px); font-weight: 900; }

          .badges { display:flex; flex-wrap:wrap; gap:10px; margin-bottom: 16px; }
          .badge {
            display:inline-flex; align-items:center; gap:8px;
            padding:8px 12px; border:1px solid color-mix(in oklab, var(--accent, #6D28D9) 30%, var(--line)); border-radius:999px; background:#fff;
            font-size:13px; color:#111;
            box-shadow: 0 1px 0 rgba(0,0,0,.04);
          }
          .badge :global(svg){ width:16px; height:16px; display:block; }

          .cta {
            display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;
            padding: 16px; border-radius: 16px; border:1px solid var(--line);
            background: linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.6)),
                        conic-gradient(from 180deg at 80% 0%, color-mix(in oklab, var(--accent, #6D28D9) 10%, transparent), transparent 60%);
            box-shadow: 0 12px 28px rgba(0,0,0,.06);
          }
          .cta .copy h3 { margin:0 0 2px; font-size: 18px; font-weight: 900; }
          .cta .copy p { margin:0; color:#4b5563; font-size: 14px; }
          .btn {
            display:inline-flex; align-items:center; justify-content:center;
            padding: 10px 14px; border-radius: 12px; font-weight: 800; font-size: 13px;
            border: 1px solid color-mix(in oklab, var(--accent, #6D28D9) 45%, #111);
            background: linear-gradient(180deg, color-mix(in oklab, var(--accent, #6D28D9) 85%, #111 15%), var(--accent, #6D28D9));
            color: #fff;
            transition: transform .08s ease, box-shadow .18s ease;
          }
          .btn:hover { transform: translateY(-1px); box-shadow: 0 14px 28px color-mix(in oklab, var(--accent, #6D28D9) 25%, transparent); }
        `}</style>
      </section>
    </>
  );
}

const SERVICES = [
  {
    key: "balloons",
    h3: "Balloon Decor & Garlands",
    p: "Custom color palettes, organic shapes, backdrops and installs for any venue.",
    tags: ["Design + Install", "Indoor/Outdoor"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <path d="M12 3c4.2 0 7 3.2 7 6.8 0 2.8-1.9 5.2-4.3 6.7l.6 2.8-2.4-2-2.4 2 .6-2.8C6.9 15 5 12.6 5 9.8 5 6.2 7.8 3 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "romance",
    h3: "Romantic Setups",
    p: "Proposals, anniversaries and surprises. Elegant styling, candles and florals.",
    tags: ["On‑site Setup", "Theme Options"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <path d="M12.1 20.7 4.5 13c-2.1-2.1-2.1-5.6 0-7.7 2.1-2.1 5.4-2.1 7.5 0l.1.1.1-.1c2.1-2.1 5.4-2.1 7.5 0 2.1 2.1 2.1 5.6 0 7.7l-7.6 7.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "picnic",
    h3: "Luxury Picnic",
    p: "Styled tablescapes, rugs, cushions and tableware — just show up and enjoy.",
    tags: ["2–12 Guests", "Delivery Included"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <path d="M3.5 10.5h17M5 8h14l1.5 8.5H3.5L5 8Zm6.5-5 4 5m-8 0 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "brunch",
    h3: "Brunch Trays",
    p: "Sweet or savory sets curated to match your theme and dietary needs.",
    tags: ["Customizable", "Add‑ons"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <path d="M3.5 17.5h17M5 17.5c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M11.5 6.5h1a2.5 2.5 0 0 1 2.5 2.5v2h-6v-2A2.5 2.5 0 0 1 11.5 6.5Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    key: "backdrops",
    h3: "Backdrops & Props",
    p: "Panels, arches, pedestals, neon and signage for memorable photos.",
    tags: ["Rental", "Delivery"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "custom",
    h3: "Custom Design",
    p: "Tell us your idea and we turn it into a full experience.",
    tags: ["Concept to Setup", "Moodboards"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
        <path d="M4.5 18.5 12 5.5l7.5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const STEPS = [
  { n: 1, h3: "Consultation", p: "Tell us your date, venue and vibe. We’ll align on scope, mood and budget." },
  { n: 2, h3: "Custom design", p: "We craft a tailored concept — colors, props, florals and add‑ons." },
  { n: 3, h3: "Setup & teardown", p: "We handle delivery, on‑site install and a clean teardown after your event." },
];

const BADGES = [
  "Licensed & insured",
  "On‑time delivery",
  "We set it up",
  "Book today",
];
