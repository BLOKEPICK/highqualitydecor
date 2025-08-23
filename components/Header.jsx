"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const openBtnRef = useRef(null);

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open && openBtnRef.current) openBtnRef.current.focus();
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="High Quality Decor — Home">
          <span className="brand-title">High Quality Decor</span>
        </Link>

        {/* Desktop nav (pruned) */}
        <nav className="main-nav desktop" aria-label="Main navigation">
          <Link className="nav-item" href="/#services">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {/* Spark/Tools */}
              <path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M5 14l.6 1.9L8 17l-1.9.6L5 20l-.6-1.9L2 17l1.9-.6L5 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="label">Services</span>
          </Link>

          <Link className="nav-item" href="/#about">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {/* Users */}
              <circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="label">About Us</span>
          </Link>

          <Link className="nav-item" href="/#gallery">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {/* Photo frame */}
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4.5 17.2l4.2-3.4c.6-.5 1.5-.5 2.1 0l2.9 2.4c.5.4 1.2.4 1.7-.1l4.1-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="label">Gallery</span>
          </Link>

          <Link className="nav-item" href="/#contact">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {/* Mail */}
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="label">Contact</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={openBtnRef}
          className="hamburger mobile"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-backdrop"
          onClick={toggle}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
      </div>

      {/* Backdrop + side panel */}
      <Portal>
        <div
          id="mobile-backdrop"
          className={`backdrop blur ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <aside className={`sidepanel light ${open ? "open" : ""}`}>
            <div className="panel-header">
              <div id="mobile-menu-title" className="brand-title">High Quality Decor</div>
              <button className="close-btn" aria-label="Close menu" onClick={close}>✕</button>
            </div>

            {/* Mobile nav (pruned) */}
            <nav className="panel-nav pro" aria-label="Mobile navigation">
              <div className="section-label">Menu</div>
              <ul className="nav-pro" role="list">
                <li>
                  <Link className="pro-item" href="/#services" onClick={close}>
                    <span className="title">Services</span><span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="pro-item" href="/#about" onClick={close}>
                    <span className="title">About Us</span><span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="pro-item" href="/#gallery" onClick={close}>
                    <span className="title">Gallery</span><span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="pro-item" href="/#contact" onClick={close}>
                    <span className="title">Contact</span><span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Socials — Instagram only */}
            <div className="socials" aria-label="Social">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="socials-link">
                <svg className="ig" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
              </a>
            </div>

            {/* Sticky CTA footer */}
            <div className="panel-footer">
              <Link className="cta-primary" href="/#contact" onClick={close} aria-label="Book now">
                <svg className="cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 3v3M18 3v3M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>BOOK NOW</span>
              </Link>
            </div>
          </aside>
        </div>
      </Portal>
    </header>
  );
}
