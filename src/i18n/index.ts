export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

const es = {
  meta: {
    homeTitle: 'Portfolio',
    homeDescription:
      'Aplicaciones construidas de principio a fin: interfaz, base de datos y los procesos que las mantienen al día.',
  },
  nav: {
    label: 'Principal',
    projects: 'Proyectos',
    skip: 'Saltar al contenido',
  },
  intro: {
    kicker: 'Portfolio',
    titleStart: 'Construyo aplicaciones',
    titleEmphasis: 'de principio a fin.',
    body: 'La interfaz, la base de datos y los procesos que la mantienen al día. Aquí tienes dos proyectos personales contados desde dentro: qué hacen y por qué están hechos así.',
  },
  projects: {
    anchor: 'proyectos',
    heading: 'Proyectos',
    open: 'Ver el proyecto',
  },
  project: {
    back: 'Todos los proyectos',
    period: 'Periodo',
    role: 'Rol',
    status: 'Estado',
    links: 'Enlaces',
    repo: 'Código en GitHub',
    demo: 'Demo',
    store: 'Descargar',
    stack: 'Tecnologías',
    screens: 'Pantallas',
    features: 'Qué hace',
    next: 'Siguiente proyecto',
  },
  footer: {
    contact: 'Contacto',
  },
};

type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    homeTitle: 'Portfolio',
    homeDescription:
      'Apps built end to end: the interface, the database and the pipelines that keep them up to date.',
  },
  nav: {
    label: 'Main',
    projects: 'Projects',
    skip: 'Skip to content',
  },
  intro: {
    kicker: 'Portfolio',
    titleStart: 'I build apps',
    titleEmphasis: 'end to end.',
    body: 'The interface, the database and the pipelines that keep it up to date. Here are two personal projects told from the inside: what they do and why they are built the way they are.',
  },
  projects: {
    anchor: 'projects',
    heading: 'Projects',
    open: 'View project',
  },
  project: {
    back: 'All projects',
    period: 'Period',
    role: 'Role',
    status: 'Status',
    links: 'Links',
    repo: 'Code on GitHub',
    demo: 'Demo',
    store: 'Download',
    stack: 'Tech stack',
    screens: 'Screens',
    features: 'What it does',
    next: 'Next project',
  },
  footer: {
    contact: 'Contact',
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Ruta de una página en un idioma concreto. `path` va sin idioma y empieza por `/`. */
export function localizedPath(locale: Locale, path = '/'): string {
  return `/${locale}${path}`;
}
