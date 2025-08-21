'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand" style={{display:'flex', alignItems:'center', gap:12}}>
          <Link href="/">
            <Image src="/logo-wordmark-dark.png" alt="High Quality Decor" width={220} height={72} priority />
          </Link>
        </div>
        <button aria-label="Menu" onClick={()=>setOpen(!open)} className="btn btn-outline" style={{display:'inline-flex'}}>
          Menu
        </button>
        <div style={{width:'100%'}} />
        <div className="nav-links" style={{display: open ? 'flex' : undefined}}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
}
