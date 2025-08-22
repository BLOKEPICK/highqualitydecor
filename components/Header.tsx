'use client'
import { useState, useEffect } from 'react'
export default function Header(){
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="High Quality Decor — Home">
          <span className="brand-text">HIGH QUALITY DECOR</span>
        </a>
        <nav className="nav-desktop" role="navigation" aria-label="Principal">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#book-now" className="btn btn-primary">Book Now</a>
        </nav>
        <button className="nav-toggle" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}>
          <img src="/icons/menu.svg" alt="" width={24} height={24} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu__header">
          <span className="brand-text">HIGH QUALITY DECOR</span>
          <button className="mobile-close" aria-label="Cerrar menú" onClick={close}>
            <img src="/icons/close.svg" alt="" width={24} height={24} aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-menu__links" role="menu">
          <a role="menuitem" href="#home" onClick={close}>Home</a>
          <a role="menuitem" href="#about" onClick={close}>About Us</a>
          <a role="menuitem" href="#services" onClick={close}>Services</a>
          <a role="menuitem" href="#portfolio" onClick={close}>Portfolio</a>
          <a role="menuitem" href="#contact" onClick={close}>Contact</a>
          <a role="menuitem" href="#book-now" className="btn btn-primary" onClick={close}>Book Now</a>
        </div>
        <div className="mobile-menu__social">
          <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="" width={24} height={24} aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="" width={24} height={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
