import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Family-first · Elegant · Mobile-first</span>
          <h1>High Quality Decor</h1>
          <p>We transform life’s moments—big or small—into beautiful memories. Flowers, decor, films, and design crafted with love.</p>
          <div className="cta">
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} className="btn btn-outline" target="_blank">Instagram</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we do</h2>
          <p className="subtitle">From intimate surprises to grand ceremonies, we cover it all—nationwide.</p>
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
          <h2>How it works</h2>
          <div className="grid cols-3">
            <div className="card step"><div className="num">1</div><div><strong>Tell us about your event</strong><p>Share date, location, vibe and references.</p></div></div>
            <div className="card step"><div className="num">2</div><div><strong>We craft a proposal</strong><p>Clear scope, moodboard and pricing.</p></div></div>
            <div className="card step"><div className="num">3</div><div><strong>Production & Day-Of</strong><p>We deliver, set up and capture memories.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>Nationwide availability</h3>
            <p>We operate across the United States. Travel costs may apply depending on distance and timing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
