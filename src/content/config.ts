// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["John Doe", "Jane Doe", "Adam"])
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog };