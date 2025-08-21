import Link from 'next/link';

function Pkg({ title, price, features, pkgKey }:{ title:string; price:string; features:string[]; pkgKey:string; }) {
  return (
    <div className="card pkg">
      <div className="pkg-header">
        <h3>{title}</h3>
        <div className="pkg-price">{price}</div>
      </div>
      <ul className="pkg-list">
        {features.map((f,i)=>(<li key={i}>{f}</li>))}
      </ul>
      <Link
        href={{ pathname: '/contact', query: { package: pkgKey } }}
        className="btn btn-primary"
        style={{width:'100%'}}
      >
        Request this package
      </Link>
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
        pkgKey="Essential"
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
        pkgKey="Signature"
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
        pkgKey="Luxe"
      />
    </div>
  );
}
