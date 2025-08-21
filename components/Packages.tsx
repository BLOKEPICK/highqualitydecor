import Link from 'next/link';

function Pkg({ title, price, features, href }:{ title:string; price:string; features:string[]; href:string; }) {
  return (
    <div className="card pkg">
      <div className="pkg-header">
        <h3>{title}</h3>
        <div className="pkg-price">{price}</div>
      </div>
      <ul className="pkg-list">
        {features.map((f,i)=>(<li key={i}>{f}</li>))}
      </ul>
      <Link href={href} className="btn btn-primary" style={{width:'100%'}}>Request this package</Link>
    </div>
  );
}

export default function Packages() {
  return (
    <div className="grid cols-3">
      <Pkg
        title="Essential"
        price="From $799"
        features={[
          'Bouquet or Backdrop starter',
          'Basic tablescape styling',
          'Coordination call (30 min)',
          'Delivery & setup (local)',
        ]}
        href="/contact?package=Essential"
      />
      <Pkg
        title="Signature"
        price="From $2,499"
        features={[
          'Full decor concept & styling',
          'Floral centerpieces',
          'Invitation design (digital)',
          'On-site coordination (4h)',
        ]}
        href="/contact?package=Signature"
      />
      <Pkg
        title="Luxe"
        price="From $5,999"
        features={[
          'Premium florals & lighting',
          'Custom stationery suite',
          'Entertainment booking support',
          'Photo/Video documentary (highlights)',
        ]}
        href="/contact?package=Luxe"
      />
    </div>
  );
}
