import Image from 'next/image'

export default function ServiceCard({ title, desc, img }:{ title:string, desc:string, img:string }){
  return (
    <article className="group overflow-hidden card">
      <div className="relative h-44">
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
