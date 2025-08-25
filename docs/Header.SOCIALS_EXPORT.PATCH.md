# Cómo exportar tus iconos EXACTOS desde Header.jsx

1) Abre `components/Header.jsx` y localiza el bloque de redes, por ejemplo:
   ```jsx
   <div className="socials">
     <a href="..."><span className="sr-only">Instagram</span><svg>...</svg></a>
     <a href="..."><span className="sr-only">Facebook</span><svg>...</svg></a>
     {/* ... */}
   </div>
   ```

2) Crea un **export nombrado** así (no rompes el header):
   ```jsx
   export function HeaderSocials() {
     return (
       <div className="socials">
         {/* pega aquí los mismos <a>...</a> */}
       </div>
     );
   }
   ```

3) En tu Header principal, puedes seguir usando ese bloque tal cual, o incluso reusar `HeaderSocials`:
   ```jsx
   import { HeaderSocials } from "./Header";
   // ... dentro del JSX:
   <HeaderSocials />
   ```

4) En el hero de desktop usa el componente `HeroDesktopGlassFollowChipsV31.jsx`
   que ya importa `{ HeaderSocials }` y lo muestra en **una sola línea con espacio**.
