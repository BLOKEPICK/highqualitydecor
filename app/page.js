import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <section id="services" className="section placeholder"><div className="container"><h2>Services</h2><p>Balloon decor, romantic setups, brunch trays, and more.</p></div></section>
      <section id="about" className="section placeholder alt"><div className="container"><h2>About Us</h2><p>We are creatives focused on unforgettable experiences.</p></div></section>
      <section id="gallery" className="section placeholder"><div className="container"><h2>Gallery</h2><p>Curated shots of our work coming soon.</p></div></section>
      <section id="contact" className="section placeholder alt"><div className="container"><h2>Contact</h2><p>Tap BOOK NOW or reach out via Instagram.</p></div></section>
    </main>
  );
}
