'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IconInstagram, IconTiktok, IconFacebook, IconYoutube } from './icons';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <Link href="/"><Image src="/logo-wordmark-dark.png" alt="High Quality Decor" width={220} height={72} priority/></Link>
        </div>
        <button aria-label="Menu" onClick={()=>setOpen(!open)} className="btn btn-outline">{open?'Close':'Menu'}</button>
        <div className="nav-links" style={{display: open ? 'flex' : undefined}}>
          <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/faq">FAQ</Link><Link href="/about">About</Link>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>
      <div className="nav-sub">
        <div className="container nav-sub-inner">
          <div className="tags"><span>Occasions:</span><Link href="/services#weddings">Weddings</Link><Link href="/services#quince">Quinceañeras</Link><Link href="/services#birthdays">Birthdays</Link><Link href="/services#corporate">Corporate</Link><Link href="/services#funerals">Funeral & Memorial</Link></div>
          <div className="socials">
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} aria-label="Instagram" target="_blank"><IconInstagram/></a>
            <a href="#" aria-label="TikTok" target="_blank"><IconTiktok/></a>
            <a href="#" aria-label="Facebook" target="_blank"><IconFacebook/></a>
            <a href="#" aria-label="YouTube" target="_blank"><IconYoutube/></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
