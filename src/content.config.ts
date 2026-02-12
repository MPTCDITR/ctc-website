import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      author: z.string(),
      image: image().optional(),
      tags: z.array(z.string()),
    }),
});

const centers = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
      description: z.string(),
      contact: z.object({
        address: z.string(),
        mapUrl: z.string().url().optional(),
      }),
      facilities: z.array(z.string()),
      managementTeam: z.object({
        title: z.string(),
        description: z.string(),
        member: z.array(
          z.object({
            title: z.string(),
            name: z.string(),
            role: z.string(),
            phoneNumber: z.string().optional(),
            email: z.string().email().optional(),
          }),
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
            phoneNumber: z.string().optional(),
            email: z.string().email().optional(),
          }),
        ),
      }),
    }),
});

const nationalBoardMember = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      name: z.string().optional().nullable(),
      organization: z.string().optional(),
      role: z.string(),
      image: image().optional(),
    }),
});

export const collections = {
  blog,
  centers,
  "national-board-member": nationalBoardMember,
};
