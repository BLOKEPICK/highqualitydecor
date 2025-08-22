import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">HIGH QUALITY DECOR</div>
          <p className="footer-tagline">Diseño de eventos con estilo y detalle.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#book-now">Book Now</a>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener" aria-label="Instagram">
            <Image src="/icons/instagram.svg" alt="" width={20} height={20} aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener" aria-label="Facebook">
            <Image src="/icons/facebook.svg" alt="" width={20} height={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-legal">
        <p>© 2025 High Quality Decor. Todos los derechos reservados.</p>
        <div className="footer-legal-links">
          <a href="/seo/robots.txt">Política de Robots</a>
          <a href="/seo/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
