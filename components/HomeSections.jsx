"use client";

// components/HomeSections.jsx
// Services section — sits directly under the hero on both /desktop and /mobile.
// Uses styled-jsx, so this file must be a Client Component.

export default function HomeSections() {
  return (
    <>
      <section id="services" className="services" aria-label="Our services">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2 className="title">What we do</h2>
          <p className="sub">
            Choose a service or mix &amp; match. We handle design, setup and teardown — on time.
          </p>

          <ul className="grid" role="list">
            {/* 1 */}
            <li className="card" aria-label="Balloon Decor & Garlands">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3c4.2 0 7 3.2 7 6.8 0 2.8-1.9 5.2-4.3 6.7l.6 2.8-2.4-2-2.4 2 .6-2.8C6.9 15 5 12.6 5 9.8 5 6.2 7.8 3 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Balloon Decor &amp; Garlands</h3>
              <p>Custom color palettes, organic shapes, backdrops and installs for any venue.</p>
              <div className="meta">
                <span className="pill">Design + Install</span>
                <span className="pill">Indoor/Outdoor</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Balloon Decor">Book</a>
              </div>
            </li>

            {/* 2 */}
            <li className="card" aria-label="Romantic Setups">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12.1 20.7 4.5 13c-2.1-2.1-2.1-5.6 0-7.7 2.1-2.1 5.4-2.1 7.5 0l.1.1.1-.1c2.1-2.1 5.4-2.1 7.5 0 2.1 2.1 2.1 5.6 0 7.7l-7.6 7.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Romantic Setups</h3>
              <p>Proposals, anniversaries and surprises. Elegant styling, candles and florals.</p>
              <div className="meta">
                <span className="pill">On‑site Setup</span>
                <span className="pill">Theme Options</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Romantic Setup">Book</a>
              </div>
            </li>

            {/* 3 */}
            <li className="card" aria-label="Luxury Picnic">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.5 10.5h17M5 8h14l1.5 8.5H3.5L5 8Zm6.5-5 4 5m-8 0 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Luxury Picnic</h3>
              <p>Styled tablescapes, rugs, cushions and tableware — just show up and enjoy.</p>
              <div className="meta">
                <span className="pill">2–12 Guests</span>
                <span className="pill">Delivery Included</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Luxury Picnic">Book</a>
              </div>
            </li>

            {/* 4 */}
            <li className="card" aria-label="Brunch Trays">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.5 17.5h17M5 17.5c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M11.5 6.5h1a2.5 2.5 0 0 1 2.5 2.5v2h-6v-2A2.5 2.5 0 0 1 11.5 6.5Z" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </div>
              <h3>Brunch Trays</h3>
              <p>Sweet or savory sets curated to match your theme and dietary needs.</p>
              <div className="meta">
                <span className="pill">Customizable</span>
                <span className="pill">Add‑ons</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Brunch Trays">Book</a>
              </div>
            </li>

            {/* 5 */}
            <li className="card" aria-label="Backdrops & Props">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Backdrops &amp; Props</h3>
              <p>Panels, arches, pedestals, neon and signage para fotos memorables.</p>
              <div className="meta">
                <span className="pill">Rental</span>
                <span className="pill">Delivery</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Backdrops & Props">Book</a>
              </div>
            </li>

            {/* 6 */}
            <li className="card" aria-label="Custom Design">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.5 18.5 12 5.5l7.5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Custom Design</h3>
              <p>Cuéntanos tu idea y la convertimos en una experiencia completa.</p>
              <div className="meta">
                <span className="pill">Concept to Setup</span>
                <span className="pill">Moodboards</span>
              </div>
              <div className="cta-row">
                <a href="/book" className="btn" aria-label="Book Custom Design">Book</a>
              </div>
            </li>
          </ul>
        </div>

        <style jsx>{`
          .services {
            padding: 56px 0 64px;
            border-top: 1px solid var(--line);
            background: #fff;
          }
          .container { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
          .eyebrow {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: #6b7280;
          }
          .title { margin: 6px 0 6px; font-size: clamp(22px, 3.6vw, 32px); font-weight: 800; line-height: 1.15; }
          .sub { color: #525252; margin-bottom: 18px; max-width: 60ch; }

          .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
          }
          @media (min-width: 640px) {
            .grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          }
          @media (min-width: 1024px) {
            .grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
          }

          .card {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: #fff;
            box-shadow: 0 1px 0 rgba(0,0,0,.04);
            transition: transform .06s ease, box-shadow .15s ease;
          }
          .card:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,.06); }
          .icon { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: #f5f5f5; }
          .icon :global(svg) { width: 22px; height: 22px; display: block; }
          h3 { margin: 4px 0 0; font-size: 16px; font-weight: 700; }
          p { color: #4b5563; font-size: 14px; line-height: 1.6; }
          .meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 2px; }
          .pill {
            display: inline-flex; align-items: center;
            padding: 6px 10px;
            border: 1px solid var(--line);
            border-radius: 999px;
            background: #fff;
            font-size: 12px;
            color: #111;
          }
          .cta-row { margin-top: auto; }
          .btn {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 10px 14px; border-radius: 12px; font-weight: 700; font-size: 13px;
            border: 1px solid var(--line); background: #111; color: #fff;
            transition: transform .08s ease, box-shadow .15s ease;
          }
          .btn:hover { transform: translateY(-1px); box-shadow: 0 10px 20px rgba(0,0,0,.12); }
        `}</style>
      </section>
    </>
  );
}
