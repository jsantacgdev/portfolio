// Iconos que se pueden usar desde el contenido de los proyectos. El esquema de la
// colección valida contra esta lista y Icon.astro los dibuja.
export const ICON_NAMES = [
  'arrow-down',
  'award',
  'bell',
  'calendar',
  'chart',
  'database',
  'github',
  'image',
  'key',
  'linkedin',
  'list-ordered',
  'mail',
  'map-pin',
  'newspaper',
  'notebook',
  'percent',
  'scan',
  'shield',
  'shirt',
  'sparkles',
  'table',
  'trophy',
  'user',
  'users',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
