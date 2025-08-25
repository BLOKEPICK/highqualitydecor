"use client";
import MenuSocials from "./MenuSocials";

/**
 * HeroDesktopGlassFollowChipsV31_MENU_STRICT
 * - Muestra EXACTAMENTE los SVG del menú hamburguesa (vía <MenuSocials />)
 * - NO toca estilos de <svg>, ni fill/stroke, ni tamaños
 * - Solo posiciona el bloque en una sola línea con espacio respecto al label
 * - Para heredar el MISMO CSS de la hamburguesa, puedes añadir a 'menu-scope' las mismas clases padres
 *   que usa tu menú (ej: "drawer menu mobile-menu").
 */
export default function HeroDesktopGlassFollowChipsV31_MENU_STRICT() {
  return (
    <section className="hero-glass" aria-label="High Quality Decor — Hero">
      <div className="container">
        <div className="card">
          <div className="cta-row">
            <a href="#services" className="btn primary" aria-label="View Services">View Services</a>

            {/* EXACTAMENTE los mismos SVG del menú, sin alterar su CSS */}
            <div className="social-inline" aria-label="Follow us">
              <span className="label">Follow us</span>
              <div className="icons">
                {/* Añade aquí las mismas clases de scope que usa tu hamburguesa para que herede estilos */}
                <div className="menu-scope">
                  <MenuSocials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Layout mínimo: una sola línea y espacio respecto al label.
           No se toca NADA dentro de .menu-scope .socials  */
        .cta-row { display:inline-flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .social-inline { display:inline-flex; align-items:center; gap:12px; white-space:nowrap; }
        .icons { display:inline-flex; align-items:center; }
        .menu-scope { display:inline-flex; align-items:center; }

        /* Importante: NO añadir reglas para svg aquí. Queremos 1:1 con la hamburguesa. */
      `}</style>
    </section>
  );
}
