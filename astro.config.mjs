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
      filter: (page) => {
        // Example: Exclude any page that contains '/drafts/' in its URL
        // (If you structured drafts as such, though our content collection filter is better for this)
        // if (page.includes('/drafts/')) {
        //   return false;
        // }

        // The more robust way to exclude drafts:
        // We need to match the page URL to our blog post slugs.
        // This is a bit more advanced but crucial for dynamic content.
        // For our blog, getStaticPaths already filters drafts, so the sitemap
        // will only see the non-draft pages.
        // If you had static HTML files for drafts (e.g., in `public`), you'd filter them here.

        // For this example, let's say we had a "secret" page we don't want indexed.
        if (page.includes('/privacy/')) {
            // Let's assume for this example we DON'T want the privacy page in the sitemap
            return false;
        }

        // Include all other pages by default
        return true;
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

