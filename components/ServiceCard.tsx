export default function ServiceCard({ title, desc }:{ title:string, desc:string }){
  return (
    <article className="card p-6">
      <h3 className="h3 font-[var(--font-playfair)]">{title}</h3>
      <p className="p mt-2">{desc}</p>
    </article>
  )
}
