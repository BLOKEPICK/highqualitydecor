import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="subtitle">Plan, style and document your event with a single, elegant team.</p>
        <div className="grid cols-3">
          <ServiceCard title="Flower Bouquets" img="/images/flowers.jpg" desc="Bouquets, centerpieces & floral installations." />
          <ServiceCard title="Decoration" img="/images/decor.jpg" desc="Full event decor—backdrops, tables, lighting and details." />
          <ServiceCard title="Invitation Cards" img="/images/cards.jpg" desc="Custom invitations, menus, place cards and programs." />
          <ServiceCard title="Entertainment" img="/images/entertainment.jpg" desc="Musicians, DJs and performers to fit your theme." />
          <ServiceCard title="Documentary" img="/images/documentary.jpg" desc="Photography and videography for every milestone." />
          <ServiceCard title="Graphic Design" img="/images/graphic.jpg" desc="Event branding and business graphics." />
        </div>

        <div className="section">
          <h3 id="weddings">Weddings</h3>
          <p>From engagement parties to the grand exit—florals, decor, stationery, and documentary covered.</p>
          <h3 id="quince">Quinceañeras</h3>
          <p>Themes, colors and stage decor that shine—plus a highlight film your family will replay.</p>
          <h3 id="birthdays">Birthdays</h3>
          <p>From intimate dinners to milestone celebrations—balloons, backdrops, and signature bouquets.</p>
          <h3 id="corporate">Corporate</h3>
          <p>Galas, product launches and holiday parties—polished styling with on-time execution.</p>
          <h3 id="funerals">Funeral & Memorial</h3>
          <p>Respectful florals and streamlined logistics so your family can focus on what matters.</p>
        </div>
      </div>
    </main>
  );
}
