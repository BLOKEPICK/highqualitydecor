import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-hqd-lavender to-white" />
        <Section className="py-20 md:py-28 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/70 border border-hqd-purple px-4 py-1 mb-5 text-sm font-medium">Nationwide · Family‑led · Premium Décor</span>
            <h1 className="h1 font-[var(--font-playfair)]">Elegant décor for unforgettable family moments.</h1>
            <p className="p mt-5">We design, craft, and coordinate beautiful events — from weddings and quinceañeras to graduations, baby showers, and memorials.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="#quote" className="btn-primary">Get a Quote</Link>
              <Link href="#portfolio" className="btn-secondary">View Portfolio</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl3 overflow-hidden shadow-soft">
                <Image alt="Decor sample" fill className="object-cover" src={`https://images.unsplash.com/photo-15${i}000000-8c6c8f3b7c0a?auto=format&fit=crop&w=1600&q=60`} />
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Services */}
      <Section id="services" className="py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="h2 font-[var(--font-playfair)]">Services</h2>
          <p className="p mt-2">Everything you need for an elevated celebration.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16">
        <div className="text-center mb-10">
          <h2 className="h2 font-[var(--font-playfair)]">How it works</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: '01', t: 'Consultation', d: 'Tell us your story, date, venue, and budget.' },
            { n: '02', t: 'Design & Plan', d: 'Moodboards, color palette, and timeline.' },
            { n: '03', t: 'Celebrate', d: 'We set up, style, and capture the memories.' },
          ].map((x) => (
            <div key={x.n} className="card p-7 text-center">
              <div className="text-hqd-purple font-semibold">{x.n}</div>
              <div className="h3 mt-2 font-[var(--font-playfair)]">{x.t}</div>
              <p className="p mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio teaser */}
      <Section id="portfolio" className="py-16">
        <div className="text-center mb-10">
          <h2 className="h2 font-[var(--font-playfair)]">Featured Portfolio</h2>
          <p className="p mt-2">Highlights from recent celebrations.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["wedding","quince","graduation","baby","funeral","serenade"].map((tag, i) => (
            <div key={tag} className="relative aspect-[4/3] rounded-xl3 overflow-hidden group">
              <Image alt={`${tag} decor`} fill className="object-cover transition scale-100 group-hover:scale-105" src={`https://images.unsplash.com/photo-16${i}200000-9d1d7a3ef9e1?auto=format&fit=crop&w=1600&q=60`} />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 text-white font-medium">{tag.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Form */}
      <Section id="quote" className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="h2 font-[var(--font-playfair)]">Get a Quote</h2>
            <p className="p mt-2">Tell us about your event and we’ll tailor a package for you.</p>
          </div>
          <div className="card p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 text-center">
        <div className="card px-6 py-10 md:py-12">
          <h3 className="h3 font-[var(--font-playfair)]">Ready to elevate your celebration?</h3>
          <p className="p mt-2">Reserve your date. Limited availability each month.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="#quote" className="btn-primary">Request Estimate</Link>
            <a href="https://wa.me/1" className="btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </Section>
    </>
  )
}

const services = [
  { title: 'Flower Bouquets', desc: 'Custom arrangements for your theme, colors, and budget.' },
  { title: 'Decoration', desc: 'Full‑service styling: backdrops, tablescapes, balloons, lighting.' },
  { title: 'Invitation Cards', desc: 'Bespoke print & digital invitations that set the tone.' },
  { title: 'Entertainment', desc: 'Live music, DJs, MCs, kids entertainment, serenades.' },
  { title: 'Documentary', desc: 'Photo & video: highlight films, reels, drone, online gallery.' },
  { title: 'Graphic Design', desc: 'Monograms, signage, menus, seating charts, event branding.' },
  { title: 'Gift Wrapping', desc: 'Premium wrapping & custom gift sets for surprises.' },
  { title: 'Crafting Design', desc: 'Handmade keepsakes, favors, and memory boxes.' },
]
