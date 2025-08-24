# Fix: Server-Safe page.js (no styled-jsx)

**Por qué falló el build:** Insertaste un bloque `<style jsx>` en `app/page.js`, que es un **Server Component** por defecto. 
`styled-jsx` sólo funciona en **Client Components**, por eso Next.js lanzó el error:
> 'client-only' cannot be imported from a Server Component module...

**Soluciones válidas (elige 1):**
1) **Usar este `page.js` server-safe** (recomendado) — sin styled-jsx. 
   - Wrapper desktop/móvil se hace con tus clases **.mobile** y **.desktop** ya definidas en `app/globals.css`.
2) Convertir `app/page.js` a **Client Component** (`"use client"`), *no recomendado* para App Router.
3) Mover los estilos locales a un **Client Component** wrapper (ej. `HeroSwitch.jsx`) y dejar `page.js` como Server.

## Cómo aplicar (opción 1 recomendada)
1. Reemplaza el contenido de `app/page.js` por `app/page.js.SERVER_SAFE`.
2. Asegúrate de tener:
   ```jsx
   import Hero from "../components/Hero";
   import HeroDesktopNoImage from "../components/HeroDesktopNoImage";
   // ...
   <div className="mobile"><Hero /></div>
   <div className="desktop"><HeroDesktopNoImage /></div>
   ```
3. `npm run dev` y revisa desktop (≥1024px).

Con esto desaparece el error y verás el nuevo hero en desktop/tablet.
