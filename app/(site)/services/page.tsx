import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="subtitle">A full suite to plan, style and document your event.</p>
        <div className="grid cols-3">
          <ServiceCard title="Flower Bouquets" img="/images/flowers.jpg" desc="Bouquets, centerpieces & floral installations." />
          <ServiceCard title="Decoration" img="/images/decor.jpg" desc="Full event decor—backdrops, tables, lighting and details." />
          <ServiceCard title="Invitation Cards" img="/images/cards.jpg" desc="Custom invitations, menus, place cards and programs." />
          <ServiceCard title="Entertainment" img="/images/entertainment.jpg" desc="Musicians, DJs and performers to fit your theme." />
          <ServiceCard title="Documentary" img="/images/documentary.jpg" desc="Photography and videography for every milestone." />
          <ServiceCard title="Graphic Design" img="/images/graphic.jpg" desc="Event branding and business graphics." />
        </div>
      </div>
    </main>
  );
}
