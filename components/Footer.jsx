export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div>© {year} Nuevo Sitio</div>
          <div className="legal">Deploy-ready en Vercel | Next.js App Router</div>
        </div>
      </div>
    </footer>
  );
}
