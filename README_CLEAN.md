# High Quality Decor — Clean Build

This package is trimmed and fixed for deployment with **Next.js 14 (App Router)**.

## What's included
- UA-based split using **`middleware.js`** → `/` rewrites to **`/desktop`** or **`/mobile`**.
- Desktop hero: **`components/HeroDesktopGlassFollowChipsV3.jsx`** (social SVG sizes locked inline to avoid flicker).
- Mobile hero: **`components/Hero.jsx`** (unchanged).
- Shared sections placeholder: **`components/HomeSections.jsx`**.
- Minimal root `app/page.js`→ returns `null` (middleware takes over).

## Scripts
```bash
npm i
npm run dev
npm run build
```

## File map
- `app/layout.js` — global layout + header
- `app/desktop/page.js` — desktop home
- `app/mobile/page.js` — mobile home
- `components/Header.jsx` — header + mobile menu
- `components/HeroDesktopGlassFollowChipsV3.jsx` — desktop hero (no flicker)
- `components/Hero.jsx` — mobile hero
- `public/media/*` — assets
