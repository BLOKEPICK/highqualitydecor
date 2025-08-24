# HQD — Next Steps Checklist (Short)

## 1) Run & Deploy
- [ ] `npm install`
- [ ] `npm run dev` (http://localhost:3000)
- [ ] Vercel → New Project → Import repository or drag this folder

## 2) Fix Missing Assets (found ~6 potential refs)
- [ ] Verificar todas las imágenes referenciadas en código (src="/...") que no existen en `public/`
- [ ] Subir las imágenes faltantes o corregir rutas
- [ ] Validar `Image` de Next vs `<img>` según el caso

## 3) Header (accesibilidad y UX)
- [ ] Cerrar con tecla ESC y al clickear el overlay
- [ ] `aria-expanded`, `aria-controls`, `aria-label` en el botón hamburguesa
- [ ] Trampa de foco dentro del panel móvil cuando está abierto
- [ ] Bloqueo de scroll del body solo cuando está abierto (y restaurar al cerrar)
- [ ] Cerrar al navegar (al hacer click en un link del menú)

## 4) Lint & Calidad
- [ ] `npm run lint`
- [ ] Añadir reglas básicas (import/order, jsx-a11y) si procede

## 5) Performance (cuando terminemos estructura)
- [ ] Cargar imágenes en formatos modernos (webp/avif)
- [ ] Evitar iconos raster: usar SVG inline
- [ ] Auditar Lighthouse (Vercel / Chrome)

---
¿Quieres que te entregue un **Header.a11y** con mejoras implementadas como archivo alterno (`components/Header.a11y.jsx`) para probar sin romper el actual? Puedo incluirlo en el próximo ZIP.
