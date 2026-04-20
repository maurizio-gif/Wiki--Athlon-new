import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // area può essere stringa singola o array di stringhe
    area: z.union([z.string(), z.array(z.string())]),
    tags: z.array(z.string()).optional().default([]),
    order: z.number().optional().default(99),
    draft: z.boolean().optional().default(false),
    // updatedDate opzionale per CMS
    updatedDate: z.string().optional(),
  }),
});

export const collections = { articles };
