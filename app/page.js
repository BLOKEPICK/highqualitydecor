import Hero from "../components/Hero";
import HeroDesktopNoImage from "../components/HeroDesktopNoImage";

export default function Page() {
  return (
    <main>
      <div className="show-mobile"><Hero /></div>
        <div className="show-desktop"><HeroDesktopNoImage /></div>

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
    
      <style jsx>{`
        /* Local responsive toggles (do not rely on global .mobile/.desktop) */
        .show-mobile { display: none; }
        .show-desktop { display: block; }

        @media (max-width: 1023px) {
          .show-mobile { display: block; }
          .show-desktop { display: none; }
        }
      `}</style>

    </main>
  );
}
