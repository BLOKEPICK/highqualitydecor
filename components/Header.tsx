import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
      <div className="section h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="HQD" width={32} height={32} />
          <span className="font-[var(--font-playfair)] text-lg">High Quality Decor</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-hqd-purple">Services</a>
          <a href="#portfolio" className="hover:text-hqd-purple">Portfolio</a>
          <a href="#quote" className="hover:text-hqd-purple">Get a Quote</a>
          <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="hover:text-hqd-purple">Instagram</a>
        </nav>
        <a href="#quote" className="btn-primary hidden md:inline-flex">Contact</a>
      </div>
    </header>
  )
}
