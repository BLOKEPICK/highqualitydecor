# Menú (Header) — Drop‑in para Next.js (App Router)

Este paquete contiene solo el **header** para integrarlo en tu proyecto actual.

## Archivos incluidos
- `components/Header.jsx`
- `app/layout.js` (importa y coloca el Header globalmente)
- `app/globals.css` (estilos neutrales para el header)

> Nota: Los colores son **neutros** a propósito. Más adelante definiremos la paleta que prefieras.

## Cómo integrarlo
1. Descarga y descomprime el ZIP.
2. Copia las carpetas `components/` y `app/` dentro de tu proyecto Next.js.
   - Si te pregunta por reemplazar `app/layout.js` o `app/globals.css`, acepta.
3. Asegúrate de tener el alias `@` configurado (usa `jsconfig.json` con:
   ```json
   {
     "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["*"] } },
     "exclude": ["node_modules", ".next"]
   }
   ```
   )
4. Ejecuta localmente:
   ```bash
   npm run dev
   ```
5. Haz commit y despliega en Vercel.

¡Listo! Ya tienes el encabezado funcional para continuar con el hero.
