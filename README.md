# High Quality Decor — Starter

Deploy rápido en **Vercel**. No necesitas ser programador.

## Paso a paso
1) Descomprime este ZIP en una carpeta.
2) Abre esa carpeta en **VS Code** (o tu explorador).
3) Instala dependencias:
   - En Windows/Mac: abre la terminal en la carpeta y escribe: `npm install`
4) Ejecuta en local (opcional): `npm run dev` y abre http://localhost:3000
5) **Sube a Vercel**:
   - Crea cuenta en vercel.com (si no tienes).
   - Importa el proyecto desde “Add New… → Project”.
   - Vercel detecta Next.js automáticamente y hace el deploy.

## Para cambiar WhatsApp / Email
- Edita `components/Footer.tsx` (línea de contacto).
- Cambia el link de WhatsApp en `app/page.tsx` (buscar `wa.me/1`).
- Para que el formulario te envíe emails, dime tu correo y lo conecto con **Formspree** o **Resend** (puedo darte otro ZIP ya configurado).

## Personalización
- Colores/estilos: `tailwind.config.ts` y `app/globals.css`.
- Logo: reemplaza `public/logo.svg` por tu logo.
- Fotos: cambia las URLs de Unsplash en `app/page.tsx` por tus imágenes.

## Estructura
- `app/` contiene las páginas.
- `components/` son las piezas reutilizables (Header, Footer, QuoteForm).
- `public/` guarda imágenes/archivos estáticos.

¿Dudas? Escríbeme y te mando otra versión ZIP lista para subir.
