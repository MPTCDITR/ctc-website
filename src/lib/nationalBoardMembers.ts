import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getNationalBoardMembers(lang: string): Promise<CollectionEntry<'national-board-member'>[]> {
  const allNationalBoardMembers = await getCollection('national-board-member');
  return allNationalBoardMembers
    .filter(nationalBoardMembers => nationalBoardMembers.slug.startsWith(lang + '/'))
}