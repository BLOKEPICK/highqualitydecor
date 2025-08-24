"use client";
// v4.0.9 — Desktop mosaic hero (forced), mobile unchanged
import Image from "next/image";
import Link from "next/link";

const BOOK_URL = "/book";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Decorative gradient blobs */}
      <div className="hero-bg" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left copy */}
        <div className="hero-copy">
          <span className="eyebrow">Premium Event Styling</span>
          <h1 className="hero-title">
            Elevate your <span className="accent">moments</span> with
            <br/> High Quality Decor
          </h1>
          <p className="hero-sub">From intimate surprises to bold celebrations — we design, stage, and delight.</p>

          <div className="hero-cta">
            <Link className="cta-primary" href={BOOK_URL} aria-label="Book now from hero">
              <svg className="cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 3v3M18 3v3M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>BOOK NOW</span>
            </Link>
            <a className="cta-ghost" href="/#gallery" aria-label="View gallery">
              <svg className="vg-ico" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 14l2.5-2.5c.4-.4 1-.4 1.4 0L12 13l3-3c.4-.4 1-.4 1.4 0L18 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>View Gallery</span>
            </a>
          </div>

          {/* Desktop chips with icons */}
          <ul className="hero-chips desktop" role="list">
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>We set it up</span>
            </li>
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h10M4 17h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Custom design</span>
            </li>
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              <span>Book today</span>
            </li>
          </ul>

          {/* Mobile chips (clearer text + icons) */}
          <ul className="hero-chips mobile" role="list">
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>We set it up</span>
            </li>
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h10M4 17h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Custom design</span>
            </li>
            <li>
              <svg className="chip-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              <span>Book today</span>
            </li>
          </ul>
        </div>

        {/* Right mosaic for desktop (forced) */}
        <div className="hero-art mosaic" aria-hidden="true">
          <div className="frame f1">
            <div className="inner">
              <Image src="/media/hero-romance-a.webp" alt="Romantic dinner setup by candlelight" fill priority sizes="(min-width: 1024px) 420px, 0px" />
            </div>
          </div>
          <div className="frame f2">
            <div className="inner">
              <Image src="/media/hero-brunch-b.webp" alt="Brunch tray with fruits and rosé" fill priority sizes="(min-width: 1024px) 360px, 0px" />
            </div>
          </div>
          <div className="frame f3">
            <div className="inner">
              <Image src="/media/hero-decor-c.webp" alt="Balloon and floral backdrop for events" fill priority sizes="(min-width: 1024px) 380px, 0px" />
            </div>
          </div>
        </div>

        {/* Mobile carousel (kept for markup; hidden in CSS for mobile per v4.0.5) */}
        <div className="hero-mobile">
          <div className="snap-row">
            <figure className="snap-card">
              <Image src="/media/hero-romance-a.webp" alt="Romantic dinner setup by candlelight" fill sizes="(max-width: 1023px) 88vw, 0px" />
            </figure>
            <figure className="snap-card">
              <Image src="/media/hero-brunch-b.webp" alt="Brunch tray with fruits and rosé" fill sizes="(max-width: 1023px) 88vw, 0px" />
            </figure>
            <figure className="snap-card">
              <Image src="/media/hero-decor-c.webp" alt="Balloon and floral backdrop for events" fill sizes="(max-width: 1023px) 88vw, 0px" />
            </figure>
          </div>
          <div className="snap-dots" aria-hidden="true">
            <span/><span/><span/>
          </div>
        </div>
      </div>
    </section>
  );
}
