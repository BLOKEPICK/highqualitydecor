import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import PhotoCollage from '@/components/PhotoCollage'
import TimelineServices from '@/components/TimelineServices'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage(){
  return (
    <>
      {/* HERO — editorial centered */}
      <section className="relative overflow-hidden">
        <Section className="pt-20 pb-8 text-center">
          <span className="badge">Family-led · Nationwide</span>
          <h1 className="h1 font-display mt-4">High Quality Decor</h1>
          <p className="p max-w-2xl mx-auto mt-4">Elegant, thoughtful décor and media for weddings, quinceañeras, graduations, baby showers, memorials and more.</p>
        </Section>
        <Section className="pb-10">
          <PhotoCollage />
        </Section>
      </section>

      {/* SERVICES — vertical timeline */}
      <Section id="services" className="py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="h2 font-display">Our Services</h2>
          <p className="p mt-2">A guided journey from idea to celebration.</p>
        </div>
        <div className="mt-10">
          <TimelineServices />
        </div>
      </Section>

      {/* PORTFOLIO — editorial strip */}
      <Section id="portfolio" className="py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((g, i)=> (
            <figure key={i} className="card overflow-hidden">
              <div className="relative w-full" style={{paddingBottom: i===1 ? '130%' : '70%'}}>
                <Image src={g.src} alt={g.caption} fill className="object-cover" />
              </div>
              <figcaption className="p-4 text-sm text-ser-gray">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="h2 font-display">About Us</h2>
            <p className="p mt-3">We’re a family-led studio blending warmth with precision. From design boards and invitations to on-site styling, entertainment, photography and film—our team cares for every detail.</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-ser-gray">
              {['Design Boards','Invitations','Floral Artistry','Backdrops & Lighting','Photography','Videography','Entertainment','Gift Wrapping'].map(x=> (
                <li key={x} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-ser-plum" /> {x}</li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <Link href="#quote" className="btn-primary">Plan your date</Link>
              <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noreferrer" className="btn-outline">Instagram</a>
            </div>
          </div>
          <div className="card p-6">
            <blockquote className="text-xl leading-relaxed">&ldquo;They captured our style perfectly—elegant florals, seamless setup, and a film we’ll treasure.&rdquo;</blockquote>
            <div className="mt-4 text-sm text-ser-gray">— Daniela & Luis</div>
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
    </>
  )
}

const gallery = [
  { src:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop', caption:'Tablescape in lavender & gold' },
  { src:'https://images.unsplash.com/photo-1527254059246-0767acec03d4?q=80&w=1600&auto=format&fit=crop', caption:'Bouquets and aisle installation' },
  { src:'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop', caption:'Invitation suite & signage' },
]
