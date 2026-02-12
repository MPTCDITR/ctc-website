// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",

  server: {
    host: "::",
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        locales: {
          en: "en-US",
          km: "km-KH",
        },
        defaultLocale: "en",
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

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

  experimental: {
    contentIntellisense: true,
  },
});
