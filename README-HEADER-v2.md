# Header v2 — Menú diferente con hamburguesa y overlay full-screen

**Qué resuelve:** 
- Evitar duplicado de menús (reemplaza tu `components/Header.jsx` anterior).
- En móvil aparece un **botón hamburguesa** que abre un **menú a pantalla completa**.
- Incluye **botón de cierre**, cierra con **ESC**, y bloquea el scroll al estar abierto.
- Estilos **neutros**: solo conserva el nombre "High Quality Decor".

## Archivos
- `components/Header.jsx` (nuevo)
- `app/globals.css` (actualizado con estilos del overlay móvil)

## Integración
1. Copia estos archivos en tu proyecto, reemplazando los existentes.
2. Verifica que solo uses **un** header (no renderices otro menú en `page.js` u otros componentes).
3. Asegura el alias `@` con `jsconfig.json`:
   ```json
   { "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["*"] } }, "exclude": ["node_modules", ".next"] }
   ```
4. `npm run dev` y prueba en viewport móvil.
5. Deploy en Vercel.

## Personalización rápida
- Cambia los items del menú en `components/Header.jsx` (sección overlay-nav y desktop nav).
- Ajusta el breakpoint en el media query (`900px`) si lo deseas.
- Define tu paleta más adelante editando las variables CSS en `:root` (globals.css).
