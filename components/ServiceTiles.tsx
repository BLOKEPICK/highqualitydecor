
import Image from 'next/image'

type S = { n: string; title: string; desc: string; img: string }

const services: S[] = [
  { n:'01', title:'Flower Bouquets', desc:'Custom arrangements matching your theme and budget.', img:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop' },
  { n:'02', title:'Decoration', desc:'Backdrops, tablescapes, balloons, lighting and more.', img:'https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1600&auto=format&fit=crop' },
  { n:'03', title:'Invitation Cards', desc:'Bespoke print & digital invitations that set the tone.', img:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop' },
  { n:'04', title:'Entertainment', desc:'Live music, DJs, MCs, kids entertainment & serenades.', img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { n:'05', title:'Documentary', desc:'Photo & video: highlight films, reels, drone, gallery.', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { n:'06', title:'Graphic Design', desc:'Monograms, signage, menus, seating charts.', img:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop' },
  { n:'07', title:'Gift Wrapping', desc:'Premium wrapping & custom gift sets for surprises.', img:'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format&fit=crop' },
  { n:'08', title:'Crafting Design', desc:'Handmade keepsakes, favors, memory boxes.', img:'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
]

export default function ServiceTiles(){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(s => (
        <article key={s.n} className="relative group card overflow-hidden">
          <div className="absolute top-0 right-0 z-10 bg-brand-lavender text-brand-ink px-3 py-1 rounded-bl-xl3 font-medium">{s.n}</div>
          <div className="relative h-44">
            <Image src={s.img} alt={s.title} fill className="object-cover transition group-hover:scale-105" />
          </div>
          <div className="p-5">
            <div className="font-display text-xl">{s.title}</div>
            <p className="p mt-2">{s.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
