import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { ICON_NAMES } from './lib/icons';

const icon = z.enum(ICON_NAMES);

// Un archivo MDX por proyecto e idioma: src/content/projects/{es,en}/<slug>.mdx
// El id de cada entrada queda como "es/nba-scores".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int(),
      icon: image(),
      /** Tipo de proyecto: "App móvil". Va detrás de "Proyecto 01 ·". */
      kicker: z.string(),
      /** Qué hiciste en él: "Diseño, desarrollo y datos". */
      role: z.string(),
      description: z.string(),
      stack: z.array(z.string()).default([]),
      /** Lista de decisiones: cada una lleva un icono o un texto destacado (p. ej. "15′ → <1′"). */
      decisions: z
        .array(
          z
            .object({ lead: z.string().optional(), icon: icon.optional(), text: z.string() })
            .refine((d) => Boolean(d.lead) !== Boolean(d.icon), {
              message: 'Cada decisión lleva "lead" o "icon", uno de los dos',
            }),
        )
        .default([]),
      /** Rejilla de funcionalidades en tarjetas. */
      features: z.array(z.object({ icon, title: z.string(), text: z.string() })).default([]),
      note: z.string().optional(),
      /** Capturas: "trio" (tres móviles escalonados) o "duo" (uno grande y otro más pequeño). */
      screens: z.object({
        layout: z.enum(['trio', 'duo']),
        items: z
          .array(
            z.object({ label: z.string(), src: image().optional(), alt: z.string().optional() }),
          )
          .min(1),
      }),
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
