// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react(), tailwind(), tailwind({
        applyBaseStyles: false,
      }),],
      i18n: {
        locales: [ "en", "km"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true
        }
      },
});