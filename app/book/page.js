export default function Page() {
  return (
    <main style={{padding: "24px 20px", maxWidth: 720, margin: "0 auto"}}>
      <h1 style={{fontSize: "clamp(28px, 3vw, 40px)", margin: "0 0 12px", fontWeight: 800}}>Book a Service</h1>
      <p style={{color: "#4b5563", marginBottom: 16}}>
        This is a placeholder booking page. Replace this content with your scheduling form or booking integration.
      </p>
      <ul style={{lineHeight: 1.9, margin: 0, paddingLeft: 18}}>
        <li>Add a calendar or scheduling widget here.</li>
        <li>Capture name, phone, email, address, and service details.</li>
        <li>Connect to your CRM or send an email notification.</li>
      </ul>
    </main>
  );
}
