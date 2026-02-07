import { defineCollection, z } from 'astro:content'

export const collections = {
  menu: defineCollection({
    type: 'data',
    schema: z.object({
      label: z.string(),
      href: z.string(),
      target: z.enum(['_self', '_blank']).default('_self'),
      rel: z.string().optional(),
      order: z.number(),
      showOnDesktop: z.boolean().default(true),
      showOnMobile: z.boolean().default(true),
      isCTA: z.boolean().default(false),
    }),
  }),
}
