import Image from 'next/image';

type Props = { title: string; desc: string; img: string; };

export default function ServiceCard({ title, desc, img }: Props) {
  return (
    <div className="card">
      <Image src={img} alt={title} width={800} height={600} style={{borderRadius:12}} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
