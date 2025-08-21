import Image from 'next/image'

const steps = [
  {
    title: 'Flower Bouquets',
    desc: 'Custom arrangements matching palette and budget. Personal florals, centerpieces, and installations.',
    img: 'https://images.unsplash.com/photo-1527254059246-0767acec03d4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Decoration',
    desc: 'Backdrops, tablescapes, draping, lighting, and balloon artistry for photo-ready spaces.',
    img: 'https://images.unsplash.com/photo-1519681393781-e0bd7a9b64f5?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Invitation Cards',
    desc: 'Bespoke print & digital invitations, monograms, menus, and seating charts.',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Entertainment',
    desc: 'Live music, DJs, MCs, kids entertainment, mariachis, and serenades.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Documentary',
    desc: 'Photography and film: highlight reels, full coverage, and drone cinematography.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Graphic & Crafting Design',
    desc: 'Logos, signage, gift wrapping, handmade keepsakes, and custom favors.',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function TimelineServices(){
  return (
    <div className="timeline space-y-10">
      {steps.map((s, i)=> (
        <div key={s.title} className="timeline-item">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className={i%2===0 ? '' : 'md:order-2'}>
              <div className="font-display text-2xl">{s.title}</div>
              <p className="p mt-2">{s.desc}</p>
            </div>
            <div className={i%2===0 ? '' : 'md:order-1'}>
              <div className="relative h-48 md:h-64 rounded-xl3 overflow-hidden card">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
