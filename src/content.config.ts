import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: image().optional(),
    tags: z.array(z.string()),
  })
});

export const collections = {
  blog,
};