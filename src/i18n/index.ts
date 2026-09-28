export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

const es = {
  meta: {
    title: 'José Antonio Santacruz — Ingeniero full-stack y diseñador UI/UX',
    description:
      'Ingeniero full-stack y diseñador UI/UX. Diseño apps y también las programo: NBA Scores y Metal Radar.',
  },
  anchors: {
    projects: 'proyectos',
    about: 'sobre-mi',
    contact: 'contacto',
  },
  nav: {
    label: 'Principal',
    projects: 'Proyectos',
    about: 'Sobre mí',
    cta: 'Hablemos',
    skip: 'Saltar al contenido',
  },
  hero: {
    badge: 'Abierto a proyectos freelance y nuevas oportunidades',
    title: 'Hola, soy José Antonio. Diseño apps y también las programo.',
    body: 'Soy ingeniero full-stack y diseñador UI/UX. Entre semana construyo sistemas de trading y facturación de energía en NTT DATA; en mi tiempo libre hago apps sobre lo que me apasiona: el baloncesto y el metal.',
    primary: 'Ver proyectos',
    secondary: 'Escríbeme',
  },
  projects: {
    heading: 'Proyectos',
    label: 'Proyecto',
    decisions: 'Decisiones que me enorgullecen',
    code: 'Ver código',
    screenshot: 'Captura',
  },
  stats: [
    { value: '+4 años', label: 'como ingeniero full-stack en NTT DATA' },
    { value: '2 apps', label: 'propias, del boceto a producción' },
    { value: '9,5', label: 'en el TFM del máster en Diseño UI/UX' },
  ],
  about: {
    kicker: 'Sobre mí',
    title: 'Me gusta entender el problema entero, desde la base de datos hasta el último píxel.',
    body: 'Trabajo con sistemas donde un dato mal calculado cuesta dinero: mercados eléctricos europeos, trading y facturación. Eso me ha hecho riguroso. El diseño me ha enseñado a pensar en quien usa lo que construyo. Intento que mis apps tengan las dos cosas.',
    timelineHeading: 'Formación y experiencia',
    timeline: [
      {
        title: 'Ingeniero full-stack',
        meta: 'NTT DATA',
        detail: 'Trading y facturación de energía para mercados europeos',
      },
      { title: 'Máster en Diseño y Desarrollo UI/UX', meta: 'TFM · 9,5', highlight: true },
      { title: 'Máster universitario', meta: 'UNIR' },
      { title: 'Ingeniería Informática', meta: 'UCLM' },
    ] as TimelineItem[],
  },
  contact: {
    title: '¿Tienes una idea o un puesto en mente? Cuéntamelo.',
    body: 'Respondo en un par de días. También me vale que me hables de baloncesto o de tu último descubrimiento musical.',
  },
  footer: {
    credit: 'Diseñado y desarrollado por mí',
  },
};

interface TimelineItem {
  title: string;
  meta: string;
  detail?: string;
  highlight?: boolean;
}

type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: 'José Antonio Santacruz — Full-stack engineer and UI/UX designer',
    description:
      'Full-stack engineer and UI/UX designer. I design apps and I build them too: NBA Scores and Metal Radar.',
  },
  anchors: {
    projects: 'projects',
    about: 'about',
    contact: 'contact',
  },
  nav: {
    label: 'Main',
    projects: 'Projects',
    about: 'About',
    cta: "Let's talk",
    skip: 'Skip to content',
  },
  hero: {
    badge: 'Open to freelance projects and new opportunities',
    title: "Hi, I'm José Antonio. I design apps, and I build them too.",
    body: "I'm a full-stack engineer and UI/UX designer. On weekdays I build energy trading and billing systems at NTT DATA; in my free time I make apps about what I love: basketball and metal.",
    primary: 'See projects',
    secondary: 'Get in touch',
  },
  projects: {
    heading: 'Projects',
    label: 'Project',
    decisions: "Decisions I'm proud of",
    code: 'View code',
    screenshot: 'Screenshot',
  },
  stats: [
    { value: '4+ years', label: 'as a full-stack engineer at NTT DATA' },
    { value: '2 apps', label: 'of my own, from sketch to production' },
    { value: '9.5', label: "on my UI/UX Design master's thesis" },
  ],
  about: {
    kicker: 'About me',
    title: 'I like understanding the whole problem, from the database to the last pixel.',
    body: 'I work on systems where a miscalculated figure costs money: European electricity markets, trading and billing. That has made me rigorous. Design has taught me to think about the people who use what I build. I try to give my apps both.',
    timelineHeading: 'Education and experience',
    timeline: [
      {
        title: 'Full-stack engineer',
        meta: 'NTT DATA',
        detail: 'Energy trading and billing for European markets',
      },
      { title: "Master's in UI/UX Design and Development", meta: 'Thesis · 9.5', highlight: true },
      { title: "Master's degree", meta: 'UNIR' },
      { title: 'Computer Engineering', meta: 'UCLM' },
    ],
  },
  contact: {
    title: 'Got an idea or a role in mind? Tell me about it.',
    body: 'I reply within a couple of days. Happy to talk basketball or hear about your latest music find, too.',
  },
  footer: {
    credit: 'Designed and built by me',
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
