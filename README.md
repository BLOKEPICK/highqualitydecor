# Fix flicker (double hero on desktop)

**Causa:** El `HeroSwitch` (Client Component con styled-jsx) es evaluado en cliente; antes de hidratar, el SSR deja ambos bloques en el HTML y puede verse un **flash** del hero no deseado.

**Solución:** Usa un **Server Component** que dependa de **CSS global** (`.mobile` / `.desktop`) cargado desde `app/globals.css`, evitando el toggle en cliente.

## Archivos en este ZIP
- `components/HeroSSRWrapper.jsx` (Server Component — sin "use client")

## Pasos
1. Copia `components/HeroSSRWrapper.jsx` al proyecto.
2. En `app/page.js`:
   - Quita el import de `HeroSwitch` y su uso.
   - Añade:
     ```jsx
     import HeroSSRWrapper from "../components/HeroSSRWrapper";
     // ...
     <HeroSSRWrapper />
     ```
3. Asegúrate de tener en `app/globals.css` las reglas que ya venías usando:
   ```css
   /* ejemplo típico */
   .mobile { display: none; }
   .desktop { display: block; }
   @media (max-width: 1023px) {
     .mobile { display: block; }
     .desktop { display: none; }
   }
   ```

Con esto, el CSS global se aplica **antes del primer paint** y ya no verás el flash del hero incorrecto.
