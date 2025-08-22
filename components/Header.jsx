'use client'
import { useEffect, useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector('.site-header')
      if(!el) return
      if(window.scrollY > 10) el.classList.add('scrolled')
      else el.classList.remove('scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
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
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#book-now" className="btn btn-primary">Book Now</a>
        </nav>
        <button className="nav-toggle" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu__header">
          <span className="brand-text">HIGH QUALITY DECOR</span>
          <button className="mobile-close" aria-label="Cerrar menú" onClick={close}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="mobile-menu__links" role="menu">
          <a role="menuitem" href="#home" onClick={close}>Home</a>
          <a role="menuitem" href="#about" onClick={close}>About</a>
          <a role="menuitem" href="#services" onClick={close}>Services</a>
          <a role="menuitem" href="#portfolio" onClick={close}>Portfolio</a>
          <a role="menuitem" href="#contact" onClick={close}>Contact</a>
          <a role="menuitem" href="#book-now" className="btn btn-primary" onClick={close}>Book Now</a>
        </div>
        <div className="mobile-menu__social">
          <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M13.5 22v-8h2.5l.5-3h-3v-1.9c0-.9.3-1.5 1.7-1.5H17V4.1C16.6 4 15.6 4 14.5 4 12 4 10.3 5.5 10.3 8v3H8v3h2.3v8h3.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
