"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <p className="copy">© High Quality Decor {year} · All rights reserved.</p>
      </div>

      <style jsx>{`
        .site-footer {
          border-top: 1px solid var(--line);
          background: #fff;
          padding: 18px 0;
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .copy {
          margin: 0;
          font-size: 13px;
          color: #6b7280;
        }
      `}</style>
    </footer>
  );
}
