// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",
  server: {
    host: "::",
  },
  integrations: [
    mdx(), 
    sitemap({i18n: {
      locales: {
        en: "en-US",
        km: "km-KH",},
      defaultLocale: "en",
    },}), 
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "km"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallback: {
      km: "en",
    },
  },

  prefetch: {
    prefetchAll: true,
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  experimental: {
    contentIntellisense: true,
  },
  env: {
    schema: {
      PUBLIC_PLAYLIST_ID: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_YOUTUBE_API_KEY: envField.string({
        context:"client",
        access:"public",
      })
    },
    validateSecrets: true,
  },
});