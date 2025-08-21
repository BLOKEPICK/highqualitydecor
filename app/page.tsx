import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import ServicesScroller from '@/components/ServicesScroller'
import Packages from '@/components/Packages'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage(){
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="https://images.unsplash.com/photo-1606857521015-7f88b22ecb4c?q=80&w=2400&auto=format&fit=crop" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-aurora-ink/90" />
        </div>
        <Section className="pt-28 pb-28">
          <div className="max-w-3xl">
            <div className="chips">
              <span className="chip chip-active">Family-led</span>
              <span className="chip">Nationwide</span>
              <span className="chip">Premium</span>
            </div>
            <h1 className="h1 font-display mt-6">Design-led décor for unforgettable family events.</h1>
            <p className="p mt-4">Weddings, quinceañeras, graduations, baby showers, memorials — we style, plan, and capture your most meaningful moments.</p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="#quote" className="btn-primary">Get a Quote</Link>
              <Link href="#services" className="btn-ghost">Explore Services</Link>
            </div>
          </div>
        </Section>
      </section>

      {/* SERVICES — HORIZONTAL SCROLLER */}
      <Section id="services" className="py-16 md:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="h2 font-display">Our Services</h2>
            <p className="p mt-2">Swipe to explore. Tap a card for details.</p>
          </div>
          <Link href="#packages" className="text-sm underline opacity-80 hover:opacity-100">See Packages</Link>
        </div>
        <div className="mt-8">
          <ServicesScroller />
        </div>
      </Section>

      {/* CAPABILITIES STRIP */}
      <Section className="pb-12">
        <div className="card px-4 py-6 md:px-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
          {['Design Boards','Venue Walkthrough','Setup & Styling','Photo / Video','Entertainment','Gifts & Crafting'].map(x => (
            <div key={x} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-aurora-purple" /> {x}
            </div>
          ))}
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" className="py-12 md:py-16">
        <Packages />
      </Section>

      {/* GALLERY STRIP */}
      <Section id="portfolio" className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {gallery.map((src, i)=> (
            <div key={i} className="relative aspect-[4/5] rounded-xl3 overflow-hidden">
              <Image src={src} alt="portfolio" fill className="object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[360px] md:h-[460px] rounded-xl3 overflow-hidden card">
            <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="About HQD" fill className="object-cover" />
          </div>
          <div>
            <h2 className="h2 font-display">About High Quality Decor</h2>
            <p className="p mt-3">We are a family-led studio crafting elevated décor with warmth and precision. Based in the U.S., serving nationwide through trusted partners and tailored logistics. From design boards to full production and documentary coverage — we handle it with care.</p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="#quote" className="btn-primary">Start your plan</Link>
              <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.6-30.6c-21.13-8.42-71.2-6.49-94.11-6.49s-73-.19-94.11,6.49a54,54,0,0,0-30.6,30.6c-8.42,21.13-6.49,71.2-6.49,94.11s-.19,73,6.49,94.11a54,54,0,0,0,30.6,30.6c21.13,8.42,71.2,6.49,94.11,6.49s73,.19,94.11-6.49a54,54,0,0,0,30.6-30.6c8.42-21.13,6.49-71.2,6.49-94.11S357.13,182.79,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85-148a19,19,0,1,1,19-19A19,19,0,0,1,309,190Z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* QUOTE */}
      <Section id="quote" className="py-24">
        <div className="max-w-3xl mx-auto card p-6 md:p-10">
          <div className="text-center">
            <h2 className="h2 font-display">Get a Quote</h2>
            <p className="p mt-2">Tell us about your event and we’ll tailor a package for you.</p>
          </div>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  )
}

const gallery = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527254059246-0767acec03d4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393781-e0bd7a9b64f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
]
