import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />

      {/* Placeholder sections for anchors */}
      <section id="services" className="section placeholder">
        <div className="container">
          <h2>Services</h2>
          <p>Tell us what you need—balloon decor, romantic setups, brunch trays, and more.</p>
        </div>
      </section>

      <section id="about" className="section placeholder alt">
        <div className="container">
          <h2>About Us</h2>
          <p>We are passionate creatives focused on unforgettable experiences.</p>
        </div>
      </section>

      <section id="gallery" className="section placeholder">
        <div className="container">
          <h2>Gallery</h2>
          <p>Soon: curated shots of our work.</p>
        </div>
      </section>

      <section id="contact" className="section placeholder alt">
        <div className="container">
          <h2>Contact</h2>
          <p>Ready to plan? Tap BOOK NOW or reach out via Instagram.</p>
        </div>
      </section>
    </main>
  );
}
