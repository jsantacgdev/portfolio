// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio definitivo en Vercel: cambiarlo aquí cuando esté asignado.
  site: 'https://jsantacgdev.vercel.app',
  integrations: [
    mdx(),
    sitemap({
      // La raíz solo redirige al idioma del visitante; no es una página indexable.
      filter: (page) => new URL(page).pathname !== '/',
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
});
