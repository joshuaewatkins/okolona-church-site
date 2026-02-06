import { z, defineCollection } from 'astro:content';

const beliefs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { beliefs };
