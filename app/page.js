import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>Arranquemos fuerte 🚀</h1>
          <p>Base limpia, performance sólida y lista para escalar en Vercel.</p>
          <div className="cta">
            <a className="btn" href="#inicio">Empezar</a>
          </div>
        </div>
      </section>

      <section id="inicio" className="content">
        <div className="container">
          <h2>Estructura lista para crecer</h2>
          <ul>
            <li><strong>App Router</strong> con layout y metadata.</li>
            <li>Componentes base (Header, Footer).</li>
            <li>Estilos globales simples sin dependencias extra.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
