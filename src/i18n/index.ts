export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

interface TimelineItem {
  title: string;
  meta: string;
  detail?: string;
  highlight?: boolean;
}

// Tecnologías que aparecen en los proyectos; son las mismas en los dos idiomas.
const SKILLS = [
  'TypeScript',
  'JavaScript',
  'React',
  'React Native',
  'Expo',
  'TanStack Query',
  'PostgreSQL',
  'Supabase',
  'Python',
  'Deno',
  'GitHub Actions',
  'Git',
];

const es = {
  meta: {
    title: 'José Antonio Santacruz Gallego — Ingeniero full-stack y diseñador UI/UX',
    description:
      'Portfolio de José Antonio Santacruz Gallego, ingeniero full-stack en NTT DATA y diseñador UI/UX. Proyectos: NBA Scores y Metal Radar.',
  },
  anchors: {
    projects: 'proyectos',
    about: 'perfil',
    contact: 'contacto',
  },
  nav: {
    label: 'Principal',
    projects: 'Proyectos',
    about: 'Perfil',
    cta: 'Contacto',
    skip: 'Saltar al contenido',
  },
  hero: {
    badge: 'Disponible para nuevas oportunidades profesionales',
    title: 'José Antonio Santacruz, ingeniero full-stack y diseñador UI/UX.',
    body: 'Ingeniero informático con más de cuatro años de experiencia en NTT DATA, donde desarrollo sistemas de trading y facturación de energía para mercados eléctricos europeos. Combino el desarrollo full-stack con formación de posgrado en diseño UI/UX, lo que me permite asumir un producto de principio a fin: modelo de datos, lógica de negocio e interfaz.',
    primary: 'Ver proyectos',
    secondary: 'Contacto',
  },
  projects: {
    heading: 'Proyectos',
    label: 'Proyecto',
    features: 'Funcionalidades principales',
    decisions: 'Decisiones técnicas',
    code: 'Ver código fuente',
    screenshot: 'Captura',
  },
  stats: [
    { value: '+4 años', label: 'de experiencia como ingeniero full-stack en NTT DATA' },
    { value: '2', label: 'aplicaciones propias, diseñadas y desarrolladas de principio a fin' },
    { value: '9,5', label: 'calificación del Trabajo Fin de Máster en Diseño y Desarrollo UI/UX' },
  ],
  about: {
    kicker: 'Perfil profesional',
    title: 'Rigor técnico y criterio de diseño en un mismo perfil.',
    body: [
      'Trabajo en sistemas en los que la exactitud de los datos tiene un impacto económico directo: operaciones de trading y procesos de facturación en mercados eléctricos europeos. Este entorno me ha aportado método, atención al detalle y experiencia en el tratamiento de datos críticos.',
      'Mi formación en diseño UI/UX complementa ese perfil técnico con una visión centrada en el usuario. En mis proyectos personales aplico ambas disciplinas: arquitecturas de datos sólidas, procesos automatizados e interfaces cuidadas.',
    ],
    timelineHeading: 'Formación y experiencia',
    timeline: [
      {
        title: 'Ingeniero full-stack',
        meta: 'NTT DATA',
        detail: 'Sistemas de trading y facturación de energía para mercados eléctricos europeos.',
      },
      { title: 'Máster en Diseño y Desarrollo UI/UX', meta: 'TFM · 9,5', highlight: true },
      { title: 'Máster universitario', meta: 'UNIR' },
      { title: 'Ingeniería Informática', meta: 'UCLM' },
    ] as TimelineItem[],
    skillsHeading: 'Tecnologías',
    skills: SKILLS,
  },
  contact: {
    title: 'Disponible para procesos de selección y nuevas colaboraciones.',
    body: 'Puede contactar conmigo por correo electrónico o a través de mis perfiles profesionales. Respondo habitualmente en un plazo de dos días laborables.',
  },
  footer: {
    credit: 'Diseño y desarrollo propios',
  },
};

type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: 'José Antonio Santacruz Gallego — Full-stack engineer and UI/UX designer',
    description:
      'Portfolio of José Antonio Santacruz Gallego, full-stack engineer at NTT DATA and UI/UX designer. Projects: NBA Scores and Metal Radar.',
  },
  anchors: {
    projects: 'projects',
    about: 'profile',
    contact: 'contact',
  },
  nav: {
    label: 'Main',
    projects: 'Projects',
    about: 'Profile',
    cta: 'Contact',
    skip: 'Skip to content',
  },
  hero: {
    badge: 'Available for new professional opportunities',
    title: 'José Antonio Santacruz, full-stack engineer and UI/UX designer.',
    body: 'Computer engineer with more than four years of experience at NTT DATA, where I develop energy trading and billing systems for European electricity markets. I combine full-stack development with postgraduate training in UI/UX design, which allows me to take on a product end to end: data model, business logic and interface.',
    primary: 'View projects',
    secondary: 'Contact',
  },
  projects: {
    heading: 'Projects',
    label: 'Project',
    features: 'Key features',
    decisions: 'Technical decisions',
    code: 'View source code',
    screenshot: 'Screenshot',
  },
  stats: [
    { value: '4+ years', label: 'of experience as a full-stack engineer at NTT DATA' },
    { value: '2', label: 'personal applications, designed and developed end to end' },
    { value: '9.5', label: "grade for the master's thesis in UI/UX Design and Development" },
  ],
  about: {
    kicker: 'Professional profile',
    title: 'Technical rigour and design judgement in a single profile.',
    body: [
      'I work on systems where data accuracy has a direct financial impact: trading operations and billing processes in European electricity markets. This environment has given me method, attention to detail and experience in handling critical data.',
      'My training in UI/UX design complements that technical profile with a user-centred perspective. In my personal projects I apply both disciplines: robust data architectures, automated processes and carefully crafted interfaces.',
    ],
    timelineHeading: 'Education and experience',
    timeline: [
      {
        title: 'Full-stack engineer',
        meta: 'NTT DATA',
        detail: 'Energy trading and billing systems for European electricity markets.',
      },
      { title: "Master's in UI/UX Design and Development", meta: 'Thesis · 9.5', highlight: true },
      { title: "Master's degree", meta: 'UNIR' },
      { title: 'Computer Engineering', meta: 'UCLM' },
    ],
    skillsHeading: 'Technologies',
    skills: SKILLS,
  },
  contact: {
    title: 'Open to recruitment processes and new collaborations.',
    body: 'You can contact me by email or through my professional profiles. I usually reply within two working days.',
  },
  footer: {
    credit: 'Independently designed and developed',
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
