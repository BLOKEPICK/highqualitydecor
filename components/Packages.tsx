import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: 'Custom',
    features: ['Moodboard & color palette','Tablescape styling','Photo hour (1h)','Delivery & setup'],
    cta: 'Request Starter'
  },
  {
    name: 'Signature',
    price: 'Popular',
    featured: true,
    features: ['Full décor & florals','Invitations (digital)','Photo + Video (4h)','Entertainment booking'],
    cta: 'Request Signature'
  },
  {
    name: 'Luxe',
    price: 'Bespoke',
    features: ['Design + Production','Print invitations','Photo + Video (8h + drone)','VIP entertainment & timeline'],
    cta: 'Request Luxe'
  },
]

export default function Packages(){
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t)=> (
        <article key={t.name} className={`card p-6 ${t.featured ? 'ring-2 ring-aurora-purple' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="h3 font-display">{t.name}</div>
            <div className="text-xs px-2 py-1 rounded-pill border border-white/15">{t.price}</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-aurora-white/85">
            {t.features.map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora-purple" /> {f}
              </li>
            ))}
          </ul>
          <Link href="#quote" className="btn-primary mt-6 inline-flex">{t.cta}</Link>
        </article>
      ))}
    </div>
  )
}
