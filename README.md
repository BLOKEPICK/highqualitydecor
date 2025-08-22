# Next.js Starter (Vercel-ready)

Base minimal para comenzar rápido en Vercel con el **App Router** de Next.js 14.

## Cómo usar

```bash
# 1) Instala dependencias
npm install

# 2) Entorno local
npm run dev

# 3) Build de producción
npm run build
npm start
```

## Despliegue en Vercel
- Sube este repo a GitHub/GitLab/Bitbucket y conéctalo en Vercel **(Framework: Next.js)**.
- Node 18+ recomendado (este starter fija `engines.node >= 18.18.0`).

## Estructura
```
app/
  layout.js        -> Layout global con fuentes y metadatos
  page.js          -> Página de inicio
  globals.css      -> Estilos globales
components/
  Header.jsx
  Footer.jsx
public/
  favicon.svg
```

¡Listo para construir desde aquí!
