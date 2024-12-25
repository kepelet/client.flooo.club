import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  loader: glob({ base: './src/content', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      versionNumber: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      commit: z.string(),
      date: z.date({ coerce: true }),
    }),
});

export const collections = { releases };
