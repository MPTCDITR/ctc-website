import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getBlogPosts(
  lang: string,
): Promise<CollectionEntry<"blog">[]> {
  const allPosts = await getCollection("blog");
  return allPosts
    .filter((post) => post.slug.startsWith(lang + "/"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostLanguage(post: CollectionEntry<"blog">): string {
  return post.slug.split("/")[0];
}

export function getPostSlug(post: CollectionEntry<"blog">): string {
  return post.slug.split("/").slice(1).join("/");
}

export async function getLatestPosts(
  lang: string,
): Promise<CollectionEntry<"blog">[]> {
  const allPosts = await getCollection("blog");

  // Filter posts by language and sort by date in descending order
  const filteredPosts = allPosts
    .filter((post) => post.slug.startsWith(lang + "/"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  // Return the first 3 posts
  return filteredPosts.slice(0, 3);
}
