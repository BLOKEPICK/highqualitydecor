import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage(){
  return (
    <>
      {/* HERO PRO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-hqd-pearl rounded-t-[50%]" />
        </div>
        <Section className="pt-28 pb-40 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase opacity-90">
              <span className="h-1 w-8 bg-hqd-purple rounded-full" /> Premium Event Studio
            </div>
            <h1 className="h1 mt-4 font-display">Elevated décor for unforgettable family moments.</h1>
            <p className="p mt-4 text-white/80">Weddings, quinceañeras, graduations, baby showers, memorials — we design, style, and capture it all.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="#quote" className="btn-primary">Get a Quote</Link>
              <Link href="#portfolio" className="btn-ghost">View Portfolio</Link>
            </div>
          </div>
        </Section>
        {/* Corner ornament */}
        <div className="absolute top-6 left-6 ornament hidden md:block">
          <Image src="/ornaments/flourish.svg" alt="" width={120} height={120} />
        </div>
        <div className="absolute top-6 right-6 ornament hidden md:block rotate-90">
          <Image src="/ornaments/flourish.svg" alt="" width={120} height={120} />
        </div>
      </section>

      {/* TRUST / BADGES */}
      <Section className="-mt-10">
        <div className="card py-6 px-4 md:px-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {['Nationwide','Family-led','Tailored Design','Photo & Video','Entertainment'].map((x)=> (
            <div key={x} className="flex items-center gap-2 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-hqd-purple" /> {x}
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section id="services" className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 font-display">Our Services</h2>
          <p className="p mt-2">Everything you need for a refined celebration.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s)=> <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>

      {/* PORTFOLIO STRIP */}
      <Section id="portfolio" className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {portfolio.map((src, i)=> (
            <div key={i} className="relative aspect-[4/5] rounded-xl3 overflow-hidden">
              <Image src={src} alt="portfolio" fill className="object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT BLEND */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-hqd-lavender/40" />
        <Section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[360px] md:h-[460px] rounded-xl3 overflow-hidden shadow-soft">
            <Image src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1600&auto=format&fit=crop" alt="About" fill className="object-cover" />
          </div>
          <div>
            <h2 className="h2 font-display">About High Quality Decor</h2>
            <p className="p mt-3">We are a family-led studio crafting elevated décor with warmth and precision. Based in the U.S., serving nationwide through trusted partners and tailored logistics.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Design Boards','Venue Walkthrough','Setup & Styling','Photo / Video','Entertainment','Gifts & Crafting'].map(x=> (
                <li key={x} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-hqd-purple rounded-full" /> {x}</li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      {/* TESTIMONIALS */}
      <Section className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 font-display">What Clients Say</h2>
          <p className="p mt-2">A few words from recent celebrations.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map(t => (
            <article key={t.name} className="card p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.event}</div>
                </div>
              </div>
              <p className="p mt-4">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </Section>

      {/* QUOTE FORM */}
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

const services = [
  { title: 'Flower Bouquets', desc: 'Custom arrangements matching your theme and budget.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Decoration', desc: 'Full-service décor: backdrops, tablescapes, balloons, lighting.', img: 'https://images.unsplash.com/photo-1527254059246-0767acec03d4?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Invitation Cards', desc: 'Bespoke print & digital invitations that set the tone.', img: 'https://images.unsplash.com/photo-1519681393781-e0bd7a9b64f5?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Entertainment', desc: 'Live music, DJs, MCs, kids entertainment, serenades.', img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Documentary', desc: 'Photo & video: highlight films, reels, drone, gallery.', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Graphic Design', desc: 'Monograms, signage, menus, seating charts.', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Gift Wrapping', desc: 'Premium wrapping & custom gift sets for surprises.', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Crafting Design', desc: 'Handmade keepsakes, favors, memory boxes.', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
]

const portfolio = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527254059246-0767acec03d4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393781-e0bd7a9b64f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
]

const testimonials = [
  { name: 'Sofía G.', event: 'Wedding', quote: 'Professional, kind, and incredibly detail‑oriented. Our guests were amazed!', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Camila R.', event: 'Quinceañera', quote: 'They captured our style perfectly — décor, photo, and music were seamless.', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Natalie P.', event: 'Graduation', quote: 'Clear communication and stunning design. Couldn’t recommend more.', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
]
