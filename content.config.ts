import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/blog/**/*.md',
      schema: z.object({
        date: z.date(),
        cover: z.string(),
        tags: z.array(z.string())
      })
    }),
    projects: defineCollection({
        type: 'page',
        source: '**/projects/**/*.md',
        schema: z.object({
          date: z.date(),
          image: z.string(),
          gitlab: z.string(),
          github: z.string(),
          link: z.string(),
          blog: z.string(),
        })
    })
  }
})
