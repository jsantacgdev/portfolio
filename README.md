# Portfolio

Personal portfolio built with [Astro](https://astro.build) as a static, single-page site, with hand-written CSS and no UI framework.

## Stack

- **Astro** (static output) + TypeScript in strict mode
- **Content collections**: one MDX file per project and language, validated with a Zod schema
- **`astro:assets`** for app icons and screenshots (AVIF/WebP, responsive sizes, lazy loading)
- **Inter** self-hosted via Fontsource, **Lucide** icons
- **Vercel** for hosting

## Languages

The site is published in Spanish (`/es/`) and English (`/en/`) and has no language switcher: the root URL sends each visitor to their system language. On Vercel this is a redirect based on `Accept-Language` (`vercel.json`); `src/pages/index.astro` does the same in the browser as a fallback. Spanish, Catalan, Galician and Basque go to `/es/`, everything else to `/en/`.

## Structure

```text
src/
├── content/projects/{es,en}/*.mdx   # project data: description, decisions, features, screens
├── content.config.ts                # project schema
├── assets/projects/<slug>/          # app icon and screenshots
├── components/                      # Hero, ProjectSection, Screens, StatsBand, About, Contact…
├── i18n/                            # interface copy for both languages
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro                  # language redirect
│   └── [lang]/index.astro           # the page itself
└── styles/global.css                # design tokens and base styles
```

Adding a project means adding `src/content/projects/es/<slug>.mdx` and its `en` counterpart; the build fails if a translation is missing. Screens without an image show a placeholder until a screenshot is added with `src`.

## Commands

| Command           | Action                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`     |
| `npm run build`   | Production build in `dist/`        |
| `npm run preview` | Serve the production build locally |
| `npm run check`   | Type-check Astro, TS and content   |
| `npm run format`  | Format with Prettier               |
