
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="section">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="HQD" width={28} height={28} />
            <span className="font-display text-lg">High Quality Decor</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#services" className="navlink">Services</a>
            <a href="#about" className="navlink">About</a>
            <a href="#quote" className="navlink">Quote</a>
            <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="ml-2 p-2 rounded-pill hover:bg-gray-100" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
