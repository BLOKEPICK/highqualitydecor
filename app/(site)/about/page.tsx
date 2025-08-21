export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <h2>About</h2>
        <p className="subtitle">Family-owned. Detail-obsessed. Memory-makers.</p>
        <div className="card">
          <p>High Quality Decor was born from a simple idea: events should feel personal, warm and beautifully styled—without stress. We are a family-run team offering flowers, full decoration, entertainment, documentary photo/video and graphic design, across the United States.</p>
          <p>Our promise: clear communication, elegant aesthetics and reliable execution—every single time.</p>
          <ul>
            <li>Family-owned and insured</li>
            <li>Nationwide coverage</li>
            <li>Trusted by couples, families and brands</li>
          </ul>
        </div>
        <div className="grid cols-3" style={{marginTop:16}}>
          <div className="card"><strong>Values</strong><p>Respect, kindness and excellence in every interaction.</p></div>
          <div className="card"><strong>Style</strong><p>Elegant, modern and intentional—never cluttered.</p></div>
          <div className="card"><strong>Process</strong><p>Clear proposals, proactive updates and on-time delivery.</p></div>
        </div>
      </div>
    </main>
  );
}
