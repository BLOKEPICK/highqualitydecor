'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="section h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="HQD" width={32} height={32} />
          <span className="font-display text-lg">High Quality Decor</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-hqd-lavender">Services</a>
          <a href="#portfolio" className="hover:text-hqd-lavender">Portfolio</a>
          <a href="#quote" className="hover:text-hqd-lavender">Get a Quote</a>
          <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="hover:opacity-90" aria-label="Instagram">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
        </nav>
        <a href="#quote" className="btn-primary hidden md:inline-flex">Contact</a>
      </div>
    </header>
  )
}
