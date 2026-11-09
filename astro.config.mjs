// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages de proyecto: https://danildperez04.github.io/portfolio/
// Con dominio propio: cambiar `site` y quitar `base`.
export default defineConfig({
  site: 'https://danildperez04.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-NI', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
