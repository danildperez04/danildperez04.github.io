# Portafolio — Danild Pérez

Sitio personal: presentación, proyectos, stack, experiencia y contacto. En español
(`/`) e inglés (`/en/`), con tema claro y oscuro.

Publicado en <https://danildperez04.github.io/>.

## Stack

Astro 7 (sitio estático) · Tailwind CSS 4 · TypeScript · GitHub Pages.

## Comandos

```bash
pnpm install
pnpm dev        # http://localhost:4321/
pnpm check      # tipos (astro check)
pnpm build      # genera dist/
pnpm preview    # sirve dist/
pnpm format     # Prettier
```

## Dónde se edita el contenido

| Qué                                      | Archivo                                   |
| ---------------------------------------- | ----------------------------------------- |
| Textos de la interfaz (ES y EN)          | `src/i18n/ui.ts`                          |
| Correo, redes, CV, stack y experiencia   | `src/data/profile.ts`                     |
| Proyectos (un archivo por idioma)        | `src/content/projects/<es\|en>/<slug>.md` |
| Colores del tema claro y oscuro (tokens) | `src/styles/global.css`                   |

Para mostrar el botón **Descargar CV**, copia los PDF a `public/` (p. ej. `cv-es.pdf`,
`cv-en.pdf`) y pon sus nombres en `profile.cv`.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica en GitHub Pages.
Configuración única en GitHub: **Settings → Pages → Source: GitHub Actions**.

Con dominio propio: cambia `site` en `astro.config.mjs` y actualiza
`public/robots.txt`.
