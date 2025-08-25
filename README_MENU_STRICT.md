# Mismos SVG del menú hamburguesa en el hero desktop (STRICT)

Este hero pinta EXACTAMENTE el markup del menú móvil (vía <MenuSocials />) y NO altera sus estilos.
Para que se vean idénticos, asegúrate de que hereda las mismas clases "scope" del menú.

## Pasos
1) En `components/MenuSocials.jsx` pega los DOS <a>...</a> del menú hamburguesa (con sus <svg> y clases).

2) En `components/HeroDesktopGlassFollowChipsV31_MENU_STRICT.jsx`:
   - Opcional: añade a la envolvente `.menu-scope` las mismas clases que usa el contenedor de tu hamburguesa,
     por ejemplo: `className="menu-scope drawer mobile-menu"`
   - Esto asegura que las reglas CSS del menú se apliquen también aquí (misma cascada).

3) En `app/desktop/page.js`:
   ```jsx
   import HeroDesktopGlassFollowChipsV31_MENU_STRICT from "../../components/HeroDesktopGlassFollowChipsV31_MENU_STRICT";
   export default function DesktopHome() {
     return (
       <main>
         <HeroDesktopGlassFollowChipsV31_MENU_STRICT />
         {/* resto */}
       </main>
     );
   }
   ```

4) Elimina cualquier regla global que hubiéramos agregado previamente que afecte a `.social-inline svg` o `.chip-ico`,
   para que los iconos usen su propio CSS del menú.

## Tip: Verifica en DevTools
- Entra al menú hamburguesa en móvil, inspecciona un <svg> y copia el "Selector" y las "Reglas aplicadas".
- Asegúrate de que esas clases/ancestros también existan en el wrapper `.menu-scope` del hero desktop.
- Si la hamburguesa usa un ámbito como `.drawer .socials a svg { ... }`, añade `.drawer` a `className` de `.menu-scope`.
