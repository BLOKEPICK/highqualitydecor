# Cómo reutilizar los iconos EXACTOS del menú hamburguesa en el hero desktop

1) Abre tu componente del menú móvil (donde está la hamburguesa) y **copia** las DOS anclas de redes:
   ```jsx
   <a href="..." aria-label="Instagram"><span className="sr-only">Instagram</span><svg>...</svg></a>
   <a href="..." aria-label="Facebook"><span className="sr-only">Facebook</span><svg>...</svg></a>
   ```

2) Pega ese bloque en `components/MenuSocials.jsx` dentro del `<div className="socials">` (sin cambiar clases ni SVG).

3) En `app/desktop/page.js`, usa el hero V31_MENU:
   ```jsx
   import HeroDesktopGlassFollowChipsV31_MENU from "../../components/HeroDesktopGlassFollowChipsV31_MENU";

   export default function DesktopHome() {
     return (
       <main>
         <HeroDesktopGlassFollowChipsV31_MENU />
         {/* resto */}
       </main>
     );
   }
   ```

4) Listo: es el **mismo markup** del menú móvil, en una sola línea con espacio (`gap:14px`) y `svg` fijados a `22px`.
