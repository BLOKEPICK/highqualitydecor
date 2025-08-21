import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import Quote from '@/components/Quote';
import Packages from '@/components/Packages';
import { Ribbon } from '@/components/decorative';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Family-first · Elegant · Mobile-first</span>
          <h1>Memories, designed beautifully.</h1>
          <p>We transform life’s moments—big or small—into beautiful memories. Flowers, decor, films, and design crafted with love.</p>
          <div className="cta">
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            <Link href="/portfolio" className="btn btn-outline">See Portfolio</Link>
          </div>
        </div>
        <Ribbon className="ribbon" />
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cols-3">
            <div className="highlight">
              <h3>Signature Florals</h3>
              <p>Romantic lilacs, modern black & white, or lush garden vibes—our florals fit your story.</p>
            </div>
            <div className="highlight">
              <h3>Decor & Ambience</h3>
              <p>We craft backdrops, tablescapes, lighting and all the little details guests remember.</p>
            </div>
            <div className="highlight">
              <h3>Film & Design</h3>
              <p>We document your day with photo/video and design invitation suites that set the tone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we do</h2>
          <p className="subtitle">From intimate surprises to grand ceremonies—nationwide.</p>
          <div className="grid cols-3">
            <ServiceCard title="Flower Bouquets" img="/images/flowers.jpg" desc="Signature bouquets for proposals, birthdays, graduations and more." />
            <ServiceCard title="Decoration" img="/images/decor.jpg" desc="Complete event styling: backdrops, tablescapes, lighting and ambiance." />
            <ServiceCard title="Invitation Cards" img="/images/cards.jpg" desc="Custom invitations and stationery that set the tone of your event." />
            <ServiceCard title="Entertainment" img="/images/entertainment.jpg" desc="Live music, DJs and performance acts to lift the mood." />
            <ServiceCard title="Documentary" img="/images/documentary.jpg" desc="Photo/video—ceremonies, funerals, first birth, serenades, music videos." />
            <ServiceCard title="Graphic Design" img="/images/graphic.jpg" desc="Branding and visuals for events and businesses." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Popular packages</h2>
          <p className="subtitle">Clear options you can tailor to your date and venue.</p>
          <Packages />
        </div>
      </section>

      <section className="section">
        <div className="container grid cols-2">
          <Quote text="They handled our wedding end-to-end—flowers, decor, even the video. It felt like a dream." author="María & Daniel" />
          <Quote text="Professional, warm and organized. Our corporate gala looked stunning." author="Avery, Event Manager" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="grid cols-3">
            <div className="card step"><div className="num">1</div><div><strong>Tell us about your event</strong><p>Share date, location, vibe and references.</p></div></div>
            <div className="card step"><div className="num">2</div><div><strong>We craft a proposal</strong><p>Clear scope, moodboard and pricing.</p></div></div>
            <div className="card step"><div className="num">3</div><div><strong>Production & Day-Of</strong><p>We deliver, set up and capture memories.</p></div></div>
          </div>
          <div className="banner" style={{marginTop:16}}>
            <div className="grid cols-2">
              <div><strong>Nationwide availability</strong><p>We operate across the United States. Travel costs may apply depending on distance and timing.</p></div>
              <div style={{display:'grid', alignContent:'center'}}><Link href="/contact" className="btn btn-primary" style={{justifySelf:'end'}}>Book a 15‑min call</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
