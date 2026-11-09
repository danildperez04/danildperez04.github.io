// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages de usuario (repo danildperez04.github.io): se sirve desde la raíz.
// Con dominio propio: cambiar `site`.
export default defineConfig({
  site: 'https://danildperez04.github.io',
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
