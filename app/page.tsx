
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import ServiceTiles from '@/components/ServiceTiles'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage(){
  return (
    <>
      {/* HERO - Light */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-brand-lavender blur-3xl opacity-50 orn" />
        <Section className="pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge">Family-led · Nationwide</span>
              <h1 className="h1 font-display mt-4">Elegant décor for the moments that matter.</h1>
              <p className="p mt-4">Bouquets, decoration, invitations, entertainment, and documentary services — tailored with care.</p>
              <div className="mt-8 flex items-center gap-3">
                <Link href="#quote" className="btn-primary">Get a Quote</Link>
                <Link href="#services" className="btn-ghost">Explore Services</Link>
              </div>
            </div>
            <div className="relative h-72 md:h-[420px] rounded-xl3 overflow-hidden card">
              <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1800&auto=format&fit=crop" alt="Elegant event" fill className="object-cover" priority />
            </div>
          </div>
        </Section>
      </section>

      {/* SERVICES - New tiles layout */}
      <Section id="services" className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 font-display">Our Services</h2>
          <p className="p mt-2">Thoughtful, family-friendly packages crafted to your brief.</p>
        </div>
        <div className="mt-10">
          <ServiceTiles />
        </div>
      </Section>

      {/* IG STRIP */}
      <Section className="py-10">
        <div className="card p-4 md:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            <div className="text-sm">Follow our latest décor on <a href="https://www.instagram.com/highquality_decor/" className="underline" target="_blank" rel="noreferrer">@highquality_decor</a></div>
          </div>
          <Link href="https://www.instagram.com/highquality_decor/" className="btn-outline" target="_blank">Open Instagram</Link>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl3 overflow-hidden card">
            <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="About HQD" fill className="object-cover" />
          </div>
          <div>
            <h2 className="h2 font-display">About High Quality Decor</h2>
            <p className="p mt-3">We are a U.S.-based, family-led studio. Our mission is to bring warmth and precision to every celebration — from design boards to full production and documentary coverage.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-brand-gray">
              {['Design Boards','Venue Walkthrough','Setup & Styling','Photography','Videography','Entertainment'].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-purple" /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS simple */}
      <Section className="py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <article key={t.name} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="font-medium">{t.name}</div>
              </div>
              <p className="p mt-4">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </Section>

      {/* QUOTE */}
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
    </>
  )
}

const testimonials = [
  { name: 'Sofía G.', quote: 'Professional, kind, and incredibly detail‑oriented — our guests were amazed!', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Camila R.', quote: 'They captured our style perfectly — décor and photos were flawless.', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Natalie P.', quote: 'Clear communication and stunning design. Highly recommended.', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
]
