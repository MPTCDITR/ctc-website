import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getNationalBoardMembers(lang: string): Promise<CollectionEntry<'national-board-member'>[]> {
  const allNationalBoardMembers = await getCollection('national-board-member');
  
  return allNationalBoardMembers
    .filter(nationalBoardMembers => nationalBoardMembers.slug.startsWith(lang + '/')).sort((a, b) => {
      const idA = parseInt(a.id.split('/')[1]); 
      const idB = parseInt(b.id.split('/')[1]);
      return idA - idB; 
    });;
}