import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="section py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-lg">High Quality Decor</div>
          <p className="p mt-2">Premium décor, bouquets, invitations, entertainment, and documentary services. Nationwide in the U.S.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Services</div>
          <ul className="space-y-2 text-aurora-white/80">
            <li>Flower Bouquets</li>
            <li>Decoration</li>
            <li>Invitation Cards</li>
            <li>Entertainment</li>
            <li>Documentary</li>
            <li>Graphic Design</li>
            <li>Gift Wrapping</li>
            <li>Crafting Design</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-aurora-white/80">
            <li>Email: info@highqualitydecor.com</li>
            <li>WhatsApp: +1 (000) 000-0000</li>
            <li className="flex items-center gap-2">
              <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
              <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer">@highquality_decor</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section pb-8 text-xs text-aurora-white/60">© {new Date().getFullYear()} High Quality Decor. All rights reserved.</div>
    </footer>
  )
}
