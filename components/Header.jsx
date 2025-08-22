"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const openBtnRef = useRef(null);

  // Toggle helpers
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  // Lock body scroll when open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside overlay content to close
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (overlayRef.current && e.target === overlayRef.current) closeMenu();
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Return focus to hamburger when closing
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
          aria-controls="mobile-menu"
          onClick={openMenu}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>

        {/* Fullscreen mobile menu */}
        <div
          id="mobile-menu"
          ref={overlayRef}
          className={`mobile-menu-overlay ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="overlay-card" role="document">
            <div className="overlay-header">
              <div id="mobile-menu-title" className="brand-title">High Quality Decor</div>
              <button
                className="close-btn"
                aria-label="Cerrar menú"
                onClick={closeMenu}
              >
                ✕
              </button>
            </div>
            <nav className="overlay-nav" aria-label="Navegación móvil">
              <a href="/#servicios" onClick={closeMenu}>Servicios</a>
              <a href="/#proyectos" onClick={closeMenu}>Proyectos</a>
              <a href="/#nosotros" onClick={closeMenu}>Nosotros</a>
              <a className="btn-primary" href="/#contacto" onClick={closeMenu}>Contacto</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
