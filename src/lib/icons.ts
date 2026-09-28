// Iconos que se pueden usar desde el contenido de los proyectos. El esquema de la
// colección valida contra esta lista y Icon.astro los dibuja.
export const ICON_NAMES = [
  'arrow-down',
  'award',
  'github',
  'image',
  'linkedin',
  'list-ordered',
  'mail',
  'map-pin',
  'sparkles',
  'table',
  'users',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
