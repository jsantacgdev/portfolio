import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, isLocale, type Locale } from '../i18n';

export type Project = CollectionEntry<'projects'>;

function splitId(project: Project): { locale: Locale; slug: string } {
  const [locale, slug] = project.id.split('/');
  if (!isLocale(locale) || !slug) {
    throw new Error(
      `El proyecto "${project.id}" debe estar en src/content/projects/<idioma>/<slug>.mdx`,
    );
  }
  return { locale, slug };
}

export const projectSlug = (project: Project) => splitId(project).slug;
export const projectLocale = (project: Project) => splitId(project).locale;

export async function getProjects(locale: Locale): Promise<Project[]> {
  const projects = await getCollection('projects', (p) => projectLocale(p) === locale);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Todos los proyectos agrupados por idioma. Falla el build si a un proyecto le falta
 * alguna traducción, para que nunca se publique un enlace alternativo roto.
 */
export async function getProjectsByLocale(): Promise<Record<Locale, Project[]>> {
  const entries = await Promise.all(LOCALES.map(async (l) => [l, await getProjects(l)] as const));
  const byLocale = Object.fromEntries(entries) as Record<Locale, Project[]>;

  const slugsPerLocale = LOCALES.map((l) => new Set(byLocale[l].map(projectSlug)));
  const allSlugs = new Set(slugsPerLocale.flatMap((s) => [...s]));
  for (const slug of allSlugs) {
    const missing = LOCALES.filter((_, i) => !slugsPerLocale[i]?.has(slug));
    if (missing.length > 0) {
      throw new Error(`Falta la traducción de "${slug}" en: ${missing.join(', ')}`);
    }
  }

  return byLocale;
}
