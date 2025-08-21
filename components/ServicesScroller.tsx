'use client'
import Image from 'next/image'

type Card = { title: string; desc: string; tag: string; img: string }
const cards: Card[] = [
  { title: 'Flower Bouquets', tag: 'Florals', desc: 'Custom arrangements for theme & budget.', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Decoration', tag: 'Styling', desc: 'Backdrops, tablescapes, balloons, lighting.', img: 'https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Invitation Cards', tag: 'Design', desc: 'Bespoke print & digital invitations.', img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Entertainment', tag: 'Experience', desc: 'Live music, DJs, MCs, serenades.', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Documentary', tag: 'Media', desc: 'Photo & video: films, reels, drone.', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Graphic Design', tag: 'Branding', desc: 'Monograms, signage, menus & charts.', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Gift Wrapping', tag: 'Gifting', desc: 'Premium wrapping & custom gift sets.', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Crafting Design', tag: 'Handmade', desc: 'Keepsakes, favors, memory boxes.', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
]

export default function ServicesScroller(){
  return (
    <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="grid auto-cols-[85%] sm:auto-cols-[60%] md:auto-cols-[40%] lg:auto-cols-[30%] grid-flow-col gap-4 snap-x snap-mandatory">
        {cards.map((c)=> (
          <article key={c.title} className="snap-start relative rounded-xl3 overflow-hidden border border-white/10 group">
            <div className="relative h-64">
              <Image src={c.img} alt={c.title} fill className="object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-pill bg-aurora-purple/90">{c.tag}</div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-display text-lg">{c.title}</div>
              <div className="text-sm text-aurora-white/80">{c.desc}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
