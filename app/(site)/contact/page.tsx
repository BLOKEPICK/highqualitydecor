import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>Get a Quote</h2>
        <p className="subtitle">Tell us about your event. We’ll reply with a tailored proposal.</p>
        <div className="card">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
