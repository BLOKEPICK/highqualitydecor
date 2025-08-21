'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-hqd-ink/40 border-b border-white/10">
      <div className="section">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 md:flex-1">
            <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl3 border border-white/15">
              <span className="sr-only">Menu</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2"/></svg>
            </button>
          </div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="HQD" width={32} height={32} />
            <span className="font-display text-lg">High Quality Decor</span>
          </Link>
          <div className="hidden md:flex items-center justify-end gap-6 md:flex-1 text-sm">
            <a href="#services" className="hover:text-hqd-lilac">Services</a>
            <a href="#portfolio" className="hover:text-hqd-lilac">Portfolio</a>
            <a href="#quote" className="hover:text-hqd-lilac">Get a Quote</a>
            <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-90">
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-hqd-panel/90 backdrop-blur">
          <nav className="section py-4 flex flex-col gap-3 text-sm">
            <a href="#services" onClick={()=>setOpen(false)} className="hover:text-hqd-lilac">Services</a>
            <a href="#portfolio" onClick={()=>setOpen(false)} className="hover:text-hqd-lilac">Portfolio</a>
            <a href="#quote" onClick={()=>setOpen(false)} className="hover:text-hqd-lilac">Get a Quote</a>
            <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-90">
              <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} /> @highquality_decor
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
