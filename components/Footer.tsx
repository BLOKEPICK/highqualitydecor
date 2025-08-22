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
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.5l.5-3h-3v-1.9c0-.9.3-1.5 1.7-1.5H17V4.1C16.6 4 15.6 4 14.5 4 12 4 10.3 5.5 10.3 8v3H8v3h2.3v8h3.2z"/></svg>
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
