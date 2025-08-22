import Header from '../components/Header'
import BookForm from '../components/BookForm'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div id="home">
      <Header />
      <main>

        {/* Hero */}
        <section id="hero" className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Diseño de eventos con estilo y detalle.</h1>
              <p>Experiencias memorables, curadas con precisión.</p>
              <div className="hero-ctas">
                <a href="#book-now" className="btn btn-primary">Book Now</a>
                <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
              </div>
            </div>
            <div className="collage" aria-hidden="true">
              <div className="card c1">
                <picture>
                  <source srcSet="/images/hero-1.webp" type="image/webp" />
                  <img src="/images/hero-1.png" alt="" loading="eager" />
                </picture>
              </div>
              <div className="card c2">
                <picture>
                  <source srcSet="/images/hero-2.webp" type="image/webp" />
                  <img src="/images/hero-2.png" alt="" loading="eager" />
                </picture>
              </div>
              <div className="card c3">
                <picture>
                  <source srcSet="/images/hero-3.webp" type="image/webp" />
                  <img src="/images/hero-3.png" alt="" loading="eager" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <div className="container hero-grid" style={{gridTemplateColumns:'0.9fr 1.1fr'}}>
            <div className="about-text">
              <h2>About</h2>
              <p>En High Quality Decor diseñamos y coordinamos eventos con una visión editorial: estética, organización impecable y atención personalizada.</p>
              <p>Nuestro equipo combina diseño floral, ambientación, invitaciones y producción audiovisual para contar historias únicas.</p>
            </div>
            <div className="collage" aria-hidden="true" style={{minHeight:'360px'}}>
              <div className="card c1">
                <picture>
                  <source srcSet="/images/about-1.webp" type="image/webp" />
                  <img src="/images/about-1.png" alt="" loading="lazy" />
                </picture>
              </div>
              <div className="card c2">
                <picture>
                  <source srcSet="/images/about-2.webp" type="image/webp" />
                  <img src="/images/about-2.png" alt="" loading="lazy" />
                </picture>
              </div>
              <div className="card c3">
                <picture>
                  <source srcSet="/images/about-3.webp" type="image/webp" />
                  <img src="/images/about-3.png" alt="" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="section why">
          <div className="container">
            <h2>¿Por qué elegirnos?</h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="2.2" stroke="currentColor" fill="none"/><path d="M12 2c2.5 2.5 2.5 5 0 7-2.5-2-2.5-4.5 0-7zM12 22c-2.5-2.5-2.5-5 0-7 2.5 2 2.5 4.5 0 7zM2 12c2.5-2.5 5-2.5 7 0-2 2.5-4.5 2.5-7 0zM22 12c-2.5 2.5-5 2.5-7 0 2-2.5 4.5-2.5 7 0z" stroke="currentColor" fill="none"/></svg>
                </div>
                <h3>Atención Personalizada</h3>
                <p>Escuchamos tu visión y la traducimos en cada detalle.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M20 4l-7 7 3 3 7-7-3-3z" stroke="currentColor" fill="none"/><path d="M3 21c2 0 4-1 5-3l6-6-2-2-6 6c-2 2-3 3-3 5z" stroke="currentColor" fill="none"/></svg>
                </div>
                <h3>Diseño con Estilo</h3>
                <p>Ambientes sofisticados con elegancia atemporal.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" fill="none"/><path d="M3 8h18M8 2v4M16 2v4" stroke="currentColor" fill="none"/></svg>
                </div>
                <h3>Organización Integral</h3>
                <p>Coordinamos cada etapa para que disfrutes sin preocupaciones.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 7h4l2-3h6l2 3h4v12H3z" stroke="currentColor" fill="none"/><circle cx="12" cy="13" r="4" stroke="currentColor" fill="none"/></svg>
                </div>
                <h3>Recuerdos Memorables</h3>
                <p>Fotografía y video profesional para revivir cada momento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section services">
          <div className="container">
            <h2>Servicios</h2>
            <div className="services-grid">
              {['Flower Bouquets','Decoration','Invitation Cards','Venue Selection','Entertainment','Documentary','Crafting Design'].map((s, i) => (
                <article className="service" key={i}>
                  <div className="ico">
                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 12c6-6 12-6 18 0-6 6-12 6-18 0z" stroke="currentColor" fill="none"/></svg>
                  </div>
                  <div>
                    <h3>{s}</h3>
                    <p>{{
                      0:'Arreglos florales a medida que realzan tu celebración.',
                      1:'Ambientación y diseño de espacios sofisticados.',
                      2:'Invitaciones personalizadas con el tono de tu evento.',
                      3:'Asesoría para elegir el venue perfecto.',
                      4:'Música y experiencias para una atmósfera ideal.',
                      5:'Foto y video profesional para documentar tu historia.',
                      6:'Diseño de camisetas y artículos personalizados.'
                    }[i]}</p>
                    <a className="btn btn-ghost" href={`#book-now?service=${encodeURIComponent(s)}`}>Reservar</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section portfolio">
          <div className="container">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
              {Array.from({length:6}).map((_,i)=> (
                <div className="ph" key={i}>
                  <picture>
                    <source srcSet={`/images/portfolio-${i+1}.webp`} type="image/webp" />
                    <img src={`/images/portfolio-${i+1}.png`} alt={`Portafolio ${i+1}`} loading="lazy" />
                  </picture>
                  <div className="label">Evento {i+1}</div>
                </div>
              ))}
            </div>
            <div className="center" style={{marginTop:'12px'}}>
              <a className="btn btn-outline" target="_blank" rel="noopener" href="https://www.instagram.com/highquality_decor/">Ver más en Instagram</a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="section process">
          <div className="container">
            <h2>Cómo trabajamos</h2>
            <ol className="process-steps">
              {['Consulta inicial','Diseño & planificación','Ejecución impecable','Recuerdos inolvidables'].map((t,i)=>(
                <li key={i}>
                  <h3><span className="badge">{i+1}</span>{t}</h3>
                  <p>{[
                    'Escuchamos tus ideas y objetivos.',
                    'Creamos la propuesta visual y logística.',
                    'Coordinamos cada detalle el día del evento.',
                    'Entregamos foto y video profesional.'
                  ][i]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            <div className="accordion">
              {[
                ['¿Con cuánta anticipación debo reservar?','Recomendamos 3–6 meses para asegurar disponibilidad.'],
                ['¿Trabajan en otras ciudades?','Sí, nos desplazamos según magnitud y logística.'],
                ['¿Ofrecen paquetes personalizados?','Adaptamos cada servicio a tus necesidades y presupuesto.'],
                ['¿Cómo funcionan pagos y anticipos?','Anticipo para reservar; el resto antes del evento.'],
                ['¿Puedo contratar servicios individuales?','Sí: flores, invitaciones, fotografía, etc.']
              ].map(([q,a],i)=>(
                <details key={i}>
                  <summary><span>{q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </summary>
                  <div className="content">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA stripe */}
        <section className="section">
          <div className="container">
            <div className="cta-stripe">
              <div><strong>¿Listos para diseñar tu evento?</strong><div>Hablemos de tu fecha y estilo ideal.</div></div>
              <a href="#book-now" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </section>

        {/* Book Now */}
        <section id="book-now" className="section book">
          <div className="container">
            <h2>Reserva tu evento con nosotros</h2>
            <BookForm />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="container center">
            <h2>Contacto</h2>
            <p>Puedes escribirnos directamente en redes o mediante el formulario de reserva.</p>
            <div style={{display:'flex', gap:'12px', justifyContent:'center', marginTop:'12px'}}>
              <a className="btn btn-outline" href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener">Instagram</a>
              <a className="btn btn-outline" href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
