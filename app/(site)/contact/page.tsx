import ContactForm from '@/components/ContactForm';
export default function ContactPage(){
  return (<main className="section"><div className="container">
    <h2>Get a Quote</h2><p className="subtitle">Tell us about your event. We’ll reply with a tailored proposal.</p>
    <div className="card"><ContactForm/></div>
    <div className="banner" style={{marginTop:16}}>Prefer WhatsApp? Set your number in <code>NEXT_PUBLIC_WHATSAPP</code> and a floating button will appear site-wide.</div>
  </div></main>);
}
