"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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

  // Body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Return focus to hamburger
  useEffect(() => {
    if (!open && openBtnRef.current) openBtnRef.current.focus();
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="High Quality Decor — Inicio">
          <span className="brand-title">High Quality Decor</span>
        </a>

        {/* Desktop nav */}
        <nav className="main-nav desktop" aria-label="Navegación principal">
          <a href="/#servicios">Servicios</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/#nosotros">Nosotros</a>
          <a className="btn-primary" href="/#contacto">Contacto</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={openBtnRef}
          className="hamburger mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-backdrop"
          onClick={toggle}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
      </div>

      {/* Backdrop + panel rendered at <body> level via portal */}
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
              <button className="close-btn" aria-label="Cerrar menú" onClick={close}>✕</button>
            </div>

            {/* Pro mobile nav */}
            <nav className="panel-nav pro" aria-label="Navegación móvil">
              <div className="section-label">Menú</div>
              <ul className="nav-pro" role="list">
                <li>
                  <a className="pro-item" href="/#servicios" onClick={close}>
                    <span className="title">Servicios</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a className="pro-item" href="/#proyectos" onClick={close}>
                    <span className="title">Proyectos</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a className="pro-item" href="/#nosotros" onClick={close}>
                    <span className="title">Nosotros</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Sticky CTA: BOOK NOW (from v3.5) */}
            <div className="panel-footer">
              <a className="cta-primary" href="/#contacto" onClick={close} aria-label="Book now">
                <svg className="cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 3v3M18 3v3M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>BOOK NOW</span>
              </a>
            </div>
          </aside>
        </div>
      </Portal>
    </header>
  );
}
