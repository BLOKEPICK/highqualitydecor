# High Quality Decor — Ready-to-Deploy Site (Next.js App Router)

**English-only.** Mobile-first. Elegant. Includes: Services, Portfolio (Instagram feed area), About, Contact form (emails via SMTP), SEO (OG/sitemap/robots), WhatsApp button, and brand assets.

## 1) How to deploy on Vercel
1. Download the ZIP and import the project in Vercel.
2. Add the environment variables (see `.env.example`).
3. Set `Build & Development Settings` → Framework = **Next.js**. No extra settings needed.
4. Deploy.

## 2) Environment Variables
Create these in Vercel → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/highquality_decor/
NEXT_PUBLIC_WHATSAPP=+1XXXXXXXXXX

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_user
SMTP_PASS=your_pass
TO_EMAIL=you@highqualitydecor.com
FROM_EMAIL=website@highqualitydecor.com
```

- If `NEXT_PUBLIC_WHATSAPP` is set, a floating WhatsApp button shows on all pages.
- SMTP is required for the contact form to send emails.

## 3) Instagram Feed (Portfolio page)
- Edit `public/ig-widget.html` and **paste your Instagram feed widget code** (e.g., Meta/Instagram oEmbed, a no-code widget like Elfsight, etc.).
- Save, redeploy, done. The Portfolio page loads that file inside an iframe.
- The **Instagram profile button** in the navbar/footer uses `NEXT_PUBLIC_INSTAGRAM_URL`.

## 4) Contact Form (serverless)
- Located at `/contact` with an API route at `/api/contact` using **Nodemailer** (SMTP).
- Works on Vercel as long as SMTP variables are configured.

## 5) Branding & Assets
- Logos and favicons are in `/public`. Replace with final versions anytime.
- Colors: Purple `#6D28D9`, Lilac `#A78BFA`, Black `#0B0B0D`, White `#FFFFFF`.

## 6) Pages
- `/` Home
- `/services`
- `/portfolio` (Instagram feed embed)
- `/about`
- `/contact`

## 7) Notes
- All copy is placeholder; customize to match your voice.
- Images under `/public/images` are placeholders; replace with real photos.
- The site is responsive and focused on performance.
- SEO: Open Graph image at `/public/og-image.jpg`, automatic `sitemap.xml` and `robots.txt` via Next metadata routes.

© 2025 High Quality Decor
