/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "astro:content" {
  interface Render {
    ".mdx": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_YOUTUBE_API_KEY: string;
  readonly PUBLIC_PLAYLIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

