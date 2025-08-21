
'use client'
import Link from 'next/link'
export default function NavDock(){
  return (
    <nav className="dock md:hidden">
      <Link href="#top" aria-label="Home"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 8h-3v9H6v-9H3l9-8z"/></svg>Home</Link>
      <Link href="#services" aria-label="Services"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v4H3V5zm0 6h18v8H3v-8z"/></svg>Services</Link>
      <Link href="#portfolio" aria-label="Portfolio"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h6v6H4V6zm10 0h6v6h-6V6zM4 16h6v6H4v-6zm10 0h6v6h-6v-6z"/></svg>Work</Link>
      <Link href="#quote" aria-label="Quote"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v4H3V4zm0 6h18v10H3V10zm5 2v6h8v-6H8z"/></svg>Quote</Link>
      <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.6-30.6c-21.13-8.42-71.2-6.49-94.11-6.49s-73-.19-94.11,6.49a54,54,0,0,0-30.6,30.6c-8.42,21.13-6.49,71.2-6.49,94.11s-.19,73,6.49,94.11a54,54,0,0,0,30.6,30.6c21.13,8.42,71.2,6.49,94.11,6.49s73,.19,94.11-6.49a54,54,0,0,0,30.6-30.6c8.42-21.13,6.49-71.2,6.49-94.11S357.13,182.79,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85-148a19,19,0,1,1,19-19A19,19,0,0,1,309,190Z"/></svg>IG</a>
    </nav>
  )
}
