import Image from 'next/image'
import Header from '@/components/Header'
import BookForm from '@/components/BookForm'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <div id="home">
      <Header />
      <main>
        {/* Hero */}
        <section id="hero" className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Diseño de eventos con estilo y detalle</h1>
              <p>Creamos experiencias memorables, cuidando cada elemento para que tu celebración sea única.</p>
              <div className="hero-ctas">
                <a href="#book-now" className="btn btn-primary">Book Now</a>
                <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
              </div>
            </div>
            <div className="hero-media">
              <Image src="/images/hero.webp" alt="Decoración elegante de evento" width={1600} height={1000} priority />
            </div>
          </div>
        </section>

        {/* About (anchor target) */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-text">
              <h2>About Us</h2>
              <p>En High Quality Decor diseñamos y coordinamos eventos con una visión editorial: estética, organización impecable y atención personalizada.</p>
              <p>Nuestro equipo combina diseño floral, ambientación, invitaciones y producción audiovisual para contar historias únicas.</p>
            </div>
            <div className="about-media">
              <Image src="/images/about.webp" alt="Equipo de diseño preparando la decoración" width={1400} height={900} />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="section why">
          <div className="container">
            <h2>¿Por qué elegirnos para tu evento?</h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon"><Image src="/icons/flower.svg" alt="" width={28} height={28} aria-hidden/></div>
                <h3>Atención Personalizada</h3>
                <p>Cada celebración es única. Diseñamos tu evento a medida, escuchando tu visión y plasmándola en cada detalle.</p>
              </div>
              <div className="why-item">
                <div className="why-icon"><Image src="/icons/brush.svg" alt="" width={28} height={28} aria-hidden/></div>
                <h3>Diseño con Estilo</h3>
                <p>Ambientes sofisticados que combinan creatividad, tendencia y elegancia atemporal.</p>
              </div>
              <div className="why-item">
                <div className="why-icon"><Image src="/icons/calendar.svg" alt="" width={28} height={28} aria-hidden/></div>
                <h3>Organización Integral</h3>
                <p>De la planificación al montaje final, coordinamos cada etapa para que disfrutes sin preocupaciones.</p>
              </div>
              <div className="why-item">
                <div className="why-icon"><Image src="/icons/camera.svg" alt="" width={28} height={28} aria-hidden/></div>
                <h3>Experiencias Memorables</h3>
                <p>Más que eventos, creamos recuerdos inolvidables que quedarán contigo y tus invitados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section services">
          <div className="container">
            <h2>Nuestros Servicios</h2>
            <div className="services-grid">
              <article className="service">
                <Image src="/icons/flower.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Flower Bouquets</h3>
                <p>Arreglos florales únicos y personalizados que realzan la esencia de cada evento.</p>
              </article>
              <article className="service">
                <Image src="/icons/brush.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Decoration</h3>
                <p>Diseño y ambientación de espacios con un estilo sofisticado y memorable.</p>
              </article>
              <article className="service">
                <Image src="/icons/invite.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Invitation Cards</h3>
                <p>Invitaciones personalizadas que comunican el tono y la elegancia de tu celebración.</p>
              </article>
              <article className="service">
                <Image src="/icons/map-pin.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Venue Selection</h3>
                <p>Asesoría y selección del lugar ideal para que tu evento tenga el escenario perfecto.</p>
              </article>
              <article className="service">
                <Image src="/icons/music.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Entertainment</h3>
                <p>Coordinamos música, shows y experiencias para garantizar la mejor atmósfera.</p>
              </article>
              <article className="service">
                <Image src="/icons/camera.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Documentary</h3>
                <p>Fotografía y filmación profesional para capturar cada momento especial.</p>
              </article>
              <article className="service">
                <Image src="/icons/scissors.svg" alt="" width={28} height={28} className="service-icon" />
                <h3>Crafting Design</h3>
                <p>Diseños exclusivos en camisetas y artículos personalizados para tu celebración.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section portfolio">
          <div className="container">
            <h2>Nuestro Trabajo</h2>
            <div className="portfolio-grid">
              <Image src="/images/portfolio-1.webp" alt="Portafolio 1" width={1200} height={800} />
              <Image src="/images/portfolio-2.webp" alt="Portafolio 2" width={1200} height={800} />
              <Image src="/images/portfolio-3.webp" alt="Portafolio 3" width={1200} height={800} />
              <Image src="/images/portfolio-4.webp" alt="Portafolio 4" width={1200} height={800} />
              <Image src="/images/portfolio-5.webp" alt="Portafolio 5" width={1200} height={800} />
              <Image src="/images/portfolio-6.webp" alt="Portafolio 6" width={1200} height={800} />
            </div>
            <div className="center">
              <a className="btn btn-outline" target="_blank" rel="noopener" href="https://www.instagram.com/highquality_decor/">Ver más en Instagram</a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="section process">
          <div className="container">
            <h2>Cómo trabajamos</h2>
            <ol className="process-steps">
              <li>
                <h3>Consulta inicial</h3>
                <p>Escuchamos tus ideas, necesidades y expectativas para tu evento.</p>
              </li>
              <li>
                <h3>Diseño &amp; planificación</h3>
                <p>Creamos la propuesta visual y organizativa que refleja tu estilo único.</p>
              </li>
              <li>
                <h3>Ejecución impecable</h3>
                <p>Coordinamos cada detalle el día del evento para que disfrutes sin preocupaciones.</p>
              </li>
              <li>
                <h3>Recuerdos inolvidables</h3>
                <p>Capturamos cada momento con fotografía y video para entregarte una memoria eterna.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            <div className="accordion">
              <details>
                <summary><span>¿Con cuánta anticipación debo reservar?</span><Image src="/icons/chevron.svg" alt="" width={20} height={20} aria-hidden/></summary>
                <div className="content">Recomendamos reservar con al menos 3–6 meses de anticipación para garantizar disponibilidad.</div>
              </details>
              <details>
                <summary><span>¿Trabajan solo en esta ciudad o también en otros lugares?</span><Image src="/icons/chevron.svg" alt="" width={20} height={20} aria-hidden/></summary>
                <div className="content">Nos desplazamos a distintas locaciones, dependiendo de la magnitud y logística del evento.</div>
              </details>
              <details>
                <summary><span>¿Ofrecen paquetes personalizados?</span><Image src="/icons/chevron.svg" alt="" width={20} height={20} aria-hidden/></summary>
                <div className="content">Sí, adaptamos cada servicio a tus necesidades y presupuesto.</div>
              </details>
              <details>
                <summary><span>¿Cómo funciona el pago o anticipo?</span><Image src="/icons/chevron.svg" alt="" width={20} height={20} aria-hidden/></summary>
                <div className="content">Solicitamos un anticipo para reservar la fecha y el resto se liquida antes del evento.</div>
              </details>
              <details>
                <summary><span>¿Puedo contratar solo algunos servicios?</span><Image src="/icons/chevron.svg" alt="" width={20} height={20} aria-hidden/></summary>
                <div className="content">Sí, puedes elegir servicios individuales como flores, invitaciones o fotografía.</div>
              </details>
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

        {/* Contact anchor */}
        <section id="contact" className="section contact">
          <div className="container center">
            <h2>Contacto</h2>
            <p>Puedes escribirnos directamente en redes o mediante el formulario de reserva.</p>
            <div className="social-inline">
              <a className="icon-btn" href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener" aria-label="Instagram">
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} aria-hidden/>
              </a>
              <a className="icon-btn" href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener" aria-label="Facebook">
                <Image src="/icons/facebook.svg" alt="" width={20} height={20} aria-hidden/>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
