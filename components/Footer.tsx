import Image from 'next/image';
import Link from 'next/link';
import { IconInstagram } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid">
        <div className="brand">
          <Image src="/logo-monogram-light.png" alt="HQD" width={56} height={56} />
          <div>
            <strong>High Quality Decor</strong>
            <div>Elegant, family-first event decor across the United States.</div>
            <div className="badge" style={{marginTop:8}}>Nationwide coverage</div>
          </div>
        </div>
        <div>
          <strong>Quick Links</strong>
          <ul style={{listStyle:'none', padding:0, margin:'10px 0 0'}}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <strong>Connect</strong>
          <ul style={{listStyle:'none', padding:0, margin:'10px 0 0'}}>
            <li><a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com'} target="_blank">Instagram <IconInstagram style={{verticalAlign:'middle'}}/></a></li>
            <li><a href="mailto:hello@highqualitydecor.com">hello@highqualitydecor.com</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{marginTop:24, opacity:.7, fontSize:14}}>
        © {new Date().getFullYear()} High Quality Decor. All rights reserved.
      </div>
    </footer>
  );
}
