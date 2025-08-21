import IGFeed from '@/components/IGFeed';

export default function PortfolioPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <p className="subtitle">Live from our Instagram. Follow us for the latest.</p>
        <IGFeed />
      </div>
    </main>
  );
}
