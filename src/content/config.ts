import { defineCollection, z } from 'astro:content'

export const collections = {
  faq: defineCollection({
    type: 'content',
    schema: z.object({
      question: z.string(),
      order: z.number().optional(),
    }),
  }),
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

  hero: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      align: z.enum(['left', 'right']).default('left'),

      height: z.object({
        mobile: z.number().optional(),   // vh
        tablet: z.number().optional(),   // vh
        desktop: z.number().optional(),  // vh
      }),

      image: z.object({
        alt: z.string(),

        fallbackSrc: z.string(),

        sources: z.array(
          z.object({
            srcset: z.string(),
            media: z.string().optional(),
            type: z.string().optional(),
            sizes: z.string().optional(),
          })
        ),
      }),

      buttons: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
            variant: z.string().optional(),
          })
        )
        .optional(),

      order: z.number().default(0),
    }),
  }),
  cards: defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.object({
      alt: z.string(),
      fallbackSrc: z.string(),
    }),
    href: z.string().optional(),
    clickable: z.boolean().default(false),
    order: z.number().default(0),
  }),
}),
}
