"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const btnRef = useRef(null);

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
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click backdrop to close
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (overlayRef.current && e.target === overlayRef.current) close();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Restore focus
  useEffect(() => { if (!open && btnRef.current) btnRef.current.focus(); }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="inner">
        <a className="brand" href="/" aria-label="High Quality Decor — Inicio">
          <span className="brand-title">High Quality Decor</span>
        </a>

        <nav className="nav-desktop" aria-label="Navegación principal">
          <a href="/#servicios">Servicios</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/#nosotros">Nosotros</a>
          <a className="btn" href="/#contacto">Contacto</a>
        </nav>

        <button
          ref={btnRef}
          className="hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Overlay móvil */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        className={`overlay ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="sheet" role="document">
          <div className="sheet-head">
            <div id="mobile-menu-title" className="brand-title">High Quality Decor</div>
            <button className="close" aria-label="Cerrar menú" onClick={close}>✕</button>
          </div>
          <nav className="nav-mobile" aria-label="Navegación móvil">
            <a href="/#servicios" onClick={close}>Servicios</a>
            <a href="/#proyectos" onClick={close}>Proyectos</a>
            <a href="/#nosotros" onClick={close}>Nosotros</a>
            <a className="btn" href="/#contacto" onClick={close}>Contacto</a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        :root {
          --bg: #0f1115;
          --text: #e8e8e8;
          --muted: #a9afbb;
          --line: #242836;
        }
        .site-header {
          position: sticky;
          top: 0;
          z-index: 70;
          backdrop-filter: saturate(140%) blur(10px);
          background: rgba(15,17,21,0.65);
          border-bottom: 1px solid var(--line);
        }
        .inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand-title {
          font-weight: 700;
          letter-spacing: .02em;
          text-transform: uppercase;
          font-size: 16px;
          color: var(--text);
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-desktop a {
          display: inline-block;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid transparent;
        }
        .nav-desktop a:hover { background: #181b25; border-color: #1f2330; }
        .btn {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid #2a2f3d;
          background: #1a1f2b;
          font-weight: 600;
        }

        .hamburger {
          display: none;
          appearance: none;
          border: 1px solid #2a2f3d;
          background: #1a1f2b;
          border-radius: 12px;
          padding: 8px 10px;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          margin: 4px 0;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 80;
          background: rgba(8,10,14,0.92);
          backdrop-filter: blur(8px);
          transform: translateY(-100%);
          opacity: 0;
          transition: transform .25s ease, opacity .25s ease;
        }
        .overlay.open { transform: translateY(0); opacity: 1; }
        .sheet {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          padding: 16px;
        }
        .sheet-head {
          display: flex; align-items: center; justify-content: space-between;
          min-height: 56px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .close {
          appearance: none;
          border: 1px solid #2a2f3d;
          background: #1a1f2b;
          color: var(--text);
          border-radius: 10px;
          font-size: 16px;
          padding: 8px 12px;
          cursor: pointer;
        }
        .nav-mobile {
          display: grid;
          gap: 10px;
          padding: 16px 8px;
        }
        .nav-mobile a {
          display: block;
          padding: 14px 12px;
          border-radius: 12px;
          border: 1px solid #2a2f3d;
          background: #141926;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .nav-desktop { display: none; }
          .hamburger { display: inline-block; }
        }
      `}</style>
    </header>
  );
}
