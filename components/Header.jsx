export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="High Quality Decor — Inicio">
          <span className="brand-title">High Quality Decor</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="/#servicios">Servicios</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/#nosotros">Nosotros</a>
          <a className="btn-primary" href="/#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
