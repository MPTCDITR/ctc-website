import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getCentersName(lang: string): Promise<CollectionEntry<'centers'>[]> {
  const allCenters = await getCollection('centers');
  return allCenters
    .filter(center => center.slug.startsWith(lang + '/'))
}

export function getCentersLanguage(center: CollectionEntry<'centers'>): string {
  return center.slug.split('/')[0];
}

export function getCenterSlug(center: CollectionEntry<'centers'>): string {
  return center.slug.split('/').slice(1).join('/');
}