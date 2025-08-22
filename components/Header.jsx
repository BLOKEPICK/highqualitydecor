"use client";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const openBtnRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          onClick={() => setOpen(true)}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>

        {/* Fullscreen mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu-overlay ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="overlay-header">
            <div className="brand-title">High Quality Decor</div>
            <button
              className="close-btn"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <nav className="overlay-nav" aria-label="Navegación móvil">
            <a href="/#servicios" onClick={() => setOpen(false)}>Servicios</a>
            <a href="/#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
            <a href="/#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
            <a className="btn-primary" href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
