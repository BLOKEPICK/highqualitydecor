'use client'
import { useState } from 'react'
import Image from 'next/image'

type Item = { title: string; desc: string; icon: string }

const CATEGORIES: { key: string; label: string; items: Item[] }[] = [
  {
    key: 'decor',
    label: 'Decoration',
    items: [
      { title: 'Backdrops & Lighting', desc: 'Premium backdrops, draping, LED, and ambient lighting.', icon: '/icons/services/lighting.svg' },
      { title: 'Tablescapes', desc: 'Centerpieces, candles, linens, and signage for any theme.', icon: '/icons/services/tablescape.svg' },
      { title: 'Balloon Artistry', desc: 'Organic arches, garlands, and statement installations.', icon: '/icons/services/balloon.svg' }
    ]
  },
  {
    key: 'florals',
    label: 'Florals',
    items: [
      { title: 'Bouquets', desc: 'Custom arrangements matching palette and budget.', icon: '/icons/services/bouquet.svg' },
      { title: 'Installations', desc: 'Arches, aisles, entrances, and photo corners.', icon: '/icons/services/arch.svg' },
      { title: 'Personal Florals', desc: 'Boutonnieres, corsages, crowns, and favors.', icon: '/icons/services/leaf.svg' }
    ]
  },
  {
    key: 'media',
    label: 'Photo & Video',
    items: [
      { title: 'Photography', desc: 'Full coverage with online gallery delivery.', icon: '/icons/services/camera.svg' },
      { title: 'Video & Drone', desc: 'Highlight films, reels, and cinematic edits.', icon: '/icons/services/video.svg' },
      { title: 'Live Moments', desc: 'Same-day reels and social-ready content.', icon: '/icons/services/reels.svg' }
    ]
  },
  {
    key: 'experience',
    label: 'Experience',
    items: [
      { title: 'Entertainment', desc: 'Live music, DJs, MCs, kids entertainment, serenades.', icon: '/icons/services/music.svg' },
      { title: 'Invitations', desc: 'Bespoke print & digital invitations that set the tone.', icon: '/icons/services/invite.svg' },
      { title: 'Gifts & Crafting', desc: 'Gift wrapping, keepsakes, favors, and memory boxes.', icon: '/icons/services/gift.svg' }
    ]
  }
]

export default function ServiceShowcase(){
  const [tab, setTab] = useState('decor')

  return (
    <div className="grid md:grid-cols-[340px,1fr] gap-10 items-start">
      {/* Sticky Intro & Tabs */}
      <aside className="md:sticky md:top-24 space-y-6">
        <div>
          <h2 className="h2 font-display">Our Services</h2>
          <p className="p mt-2">Select a category to explore what we can craft for your celebration.</p>
        </div>
        <div className="services-tabs">
          {CATEGORIES.map(c => (
            <button key={c.key} onClick={()=>setTab(c.key)} className={tab===c.key? 'active' : ''}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="text-sm text-slate-300/80">Need a custom bundle? We tailor packages for décor, florals, media, and entertainment.</div>
      </aside>

      {/* Icon Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.find(c=>c.key===tab)?.items.map(item => (
          <article key={item.title} className="service-card p-5">
            <div className="flex items-center gap-3">
              <div className="service-icon flex items-center justify-center">
                <Image src={item.icon} alt="" width={28} height={28} />
              </div>
              <div className="h3 font-display">{item.title}</div>
            </div>
            <p className="p mt-3">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
