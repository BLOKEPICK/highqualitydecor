import Image from 'next/image'

export default function ServiceCard({ title, desc, img, layout }:{ title:string, desc:string, img:string, layout?: 'tall' | 'wide' }){
  return (
    <article className="group overflow-hidden rounded-xl3 border border-white/10 bg-gradient-to-b from-white/5 to-white/[.03]">
      <div className={`relative ${layout==='tall' ? 'h-60' : 'h-40'}`}>
        <Image src={img} alt={title} fill className="object-cover transition group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white font-medium">{title}</div>
      </div>
      <div className="p-5">
        <p className="p">{desc}</p>
      </div>
    </article>
  )
}
