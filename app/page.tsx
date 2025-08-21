import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage(){
  return (
    <>
      {/* HEADER STRIPE */}
      <div className="w-full bg-gradient-to-r from-hqd-plum/40 via-hqd-purple/30 to-hqd-plum/40 h-0.5" />

      {/* HERO SPLIT */}
      <Section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase opacity-90">
              <span className="h-1 w-8 bg-hqd-purple rounded-full" /> Premium Event Studio
            </div>
            <h1 className="h1 mt-4 font-display">Considered design. Family warmth.</h1>
            <p className="p mt-5">We style meaningful celebrations with refined décor, floral artistry, bespoke invitations, entertainment, and documentary services—nationwide.</p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="#quote" className="btn-primary">Get a Quote</Link>
              <Link href="#portfolio" className="btn-ghost">View Portfolio</Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-xl3 overflow-hidden card">
            <Image src="https://images.unsplash.com/photo-1506127946181-abc2f8be18d5?q=80&w=2000&auto=format&fit=crop" alt="Elegant décor" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>
      </Section>

      <div className="divider" />

      {/* SERVICES MOSAIC */}
      <Section id="services" className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 font-display">Our Services</h2>
          <p className="p mt-2">Everything you need for an elevated celebration.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.slice(0,3).map(s=> <ServiceCard key={s.title} {...s} layout="tall" />)}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {services.slice(3).map(s=> <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>

      {/* FEATURE STRIP */}
      <Section className="py-6">
        <div className="card p-5 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-slate-200/80">
          {['Nationwide','Family-led','Design Boards','Photo & Video','Entertainment','Gifts & Crafting'].map((x)=> (
            <div key={x} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-hqd-purple" /> {x}
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO MASONRY (CSS columns) */}
      <Section id="portfolio" className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 font-display">Featured Work</h2>
          <p className="p mt-2">A glimpse into recent celebrations.</p>
        </div>
        <div className="mt-10 [column-count:1] sm:[column-count:2] lg:[column-count:3] gap-4 space-y-4">
          {portfolio.map((src, i)=> (
            <div key={i} className="break-inside-avoid rounded-xl3 overflow-hidden">
              <div className="relative w-full" style={{paddingBottom:'130%'}}>
                <Image src={src} alt="portfolio" fill className="object-cover hover:scale-105 transition" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT STRIP */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="h2 font-display">About High Quality Decor</h2>
            <p className="p mt-3">We are a family-led studio crafting elevated décor with warmth and precision. U.S.-based, serving nationwide through trusted partners and tailored logistics.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200/80">
              {['Venue Walkthrough','Setup & Styling','Lighting & Backdrops','Custom Florals','Documentary','Entertainment'].map(x=> (
                <li key={x} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-hqd-purple rounded-full" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl3 overflow-hidden card">
            <Image src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop" alt="About image" fill className="object-cover" />
          </div>
        </div>
      </Section>

      {/* QUOTE FORM */}
      <Section id="quote" className="py-20">
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

      <div className="divider" />
    </>
  )
}

const services = [
  { title: 'Flower Bouquets', desc: 'Custom arrangements matching your theme and budget.', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Decoration', desc: 'Full-service décor: backdrops, tablescapes, balloons, lighting.', img: 'https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Invitation Cards', desc: 'Bespoke print & digital invitations that set the tone.', img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Entertainment', desc: 'Live music, DJs, MCs, kids entertainment, serenades.', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Documentary', desc: 'Photo & video: highlight films, reels, drone, gallery.', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Graphic Design', desc: 'Monograms, signage, menus, seating charts.', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Gift Wrapping', desc: 'Premium wrapping & custom gift sets for surprises.', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Crafting Design', desc: 'Handmade keepsakes, favors, memory boxes.', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
]

const portfolio = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506127946181-abc2f8be18d5?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop'
]
