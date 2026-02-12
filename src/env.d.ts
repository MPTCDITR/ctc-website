/// <reference types="astro/client" />

declare module "astro:content" {
  interface Render {
    ".mdx": Promise<{
      Content: import("astro").MarkdownInstance<
        Record<string, unknown>
      >["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, unknown>;
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
