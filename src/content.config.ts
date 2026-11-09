import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Un archivo por proyecto e idioma: src/content/projects/<es|en>/<slug>.md */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).min(1),
    repo: z.url().optional(),
    demo: z.url().optional(),
    order: z.number().int(),
  }),
});

export const collections = { projects };
