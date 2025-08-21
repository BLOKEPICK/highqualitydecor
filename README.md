# High Quality Decor — Dark v6 (Redesigned Services)

- Sección **Our Services** totalmente nueva:
  - Layout con **intro sticky + tabs** por categoría.
  - **Tarjetas con icono (SVG)** y descripciones claras.
  - Grid responsive distinto al estilo anterior.
- Mantiene header/hero dark y portafolio masonry.
- Listo para Next.js 14 + Vercel.

## Pasos
1) Sube este ZIP al repo (reemplaza lo anterior).
2) `npm install`
3) Deploy en Vercel.

## Dónde editar
- Tabs y servicios: `components/ServiceShowcase.tsx` (SVGs en `/public/icons/services/`).
- Imágenes: `app/page.tsx` (Unsplash).
- WhatsApp/Email: `components/Footer.tsx` y CTAs.
