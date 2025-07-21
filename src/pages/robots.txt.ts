import type { APIRoute } from "astro";

const SITEMAP_FILENAME = "sitemap-index.xml";

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(SITEMAP_FILENAME, site);

  const robotsTxtContent = `
User-agent: *
Allow: /

# Direct search engines to your sitemap index file
Sitemap: ${sitemapURL.href}
`;

  return new Response(robotsTxtContent.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
