import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo MDX por proyecto e idioma: src/content/projects/{es,en}/<slug>.mdx
// El id de cada entrada queda como "es/nba-scores".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      summary: z.string(),
      order: z.number().int(),
      // Color de la propia app; se usa solo como detalle decorativo.
      accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
      period: z.string(),
      role: z.string(),
      status: z.string(),
      stack: z.array(z.string()).min(1),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      features: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      screenshots: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      links: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
          store: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { projects };
