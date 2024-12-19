import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: image().optional(),
    tags: z.array(z.string()),
  }),
});

const centers = defineCollection({
  type: 'content',
  schema: () => z.object({
    name: z.string(),
    description: z.string(),
    managementTeam: z.object({
      title: z.string(),
      description: z.string(),
      member: z.array(
        z.object({
          title: z.string(),
          name: z.string(),
          role: z.string(),
          phoneNumber: z.string(),
          email: z.string().email(),
        })
      ),
    }),
    operationTeam: z.object({
      title: z.string(),
      description: z.string(),
      member: z.array(
        z.object({
          title: z.string(),
          name: z.string(),
          role: z.string(),
          phoneNumber: z.string(),
          email: z.string().email(),
        })
      ),
    }),
  }),
});

export const collections = {
  blog,
  centers,
};