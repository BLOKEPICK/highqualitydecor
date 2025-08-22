"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
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

  // Backdrop click
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) close();
  };

  // Focus return
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
          onClick={toggle}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>

        {/* Fullscreen overlay with gradient background */}
        <div
          id="mobile-menu"
          ref={overlayRef}
          className={`mobile-menu-overlay fancy ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          onClick={onBackdrop}
        >
          <div className="overlay-card centered" role="document">
            <div className="overlay-header">
              <div id="mobile-menu-title" className="brand-title">High Quality Decor</div>
              <button className="close-btn" aria-label="Cerrar menú" onClick={close}>✕</button>
            </div>
            <nav className="overlay-nav big" aria-label="Navegación móvil">
              <a className="menu-item" href="/#servicios" onClick={close}>
                <span className="mi-title">Servicios</span>
                <span className="mi-sub">Qué hacemos</span>
              </a>
              <a className="menu-item" href="/#proyectos" onClick={close}>
                <span className="mi-title">Proyectos</span>
                <span className="mi-sub">Casos y resultados</span>
              </a>
              <a className="menu-item" href="/#nosotros" onClick={close}>
                <span className="mi-title">Nosotros</span>
                <span className="mi-sub">Quiénes somos</span>
              </a>
              <a className="menu-item primary" href="/#contacto" onClick={close}>
                <span className="mi-title">Contacto</span>
                <span className="mi-sub">Hablemos</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
