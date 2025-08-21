import IGFeed from '@/components/IGFeed';

export default function PortfolioPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <p className="subtitle">Highlights from recent work and our Instagram feed.</p>
        <div className="grid cols-3" style={{marginBottom:16}}>
          <div className="card"><img src="/images/flowers.jpg" alt="Bouquet" /><h3>Bouquet</h3></div>
          <div className="card"><img src="/images/decor.jpg" alt="Backdrop" /><h3>Backdrop</h3></div>
          <div className="card"><img src="/images/graphic.jpg" alt="Invitation Suite" /><h3>Invitation Suite</h3></div>
        </div>
        <IGFeed />
      </div>
    </main>
  );
}
