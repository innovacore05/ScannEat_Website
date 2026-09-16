# Scan n' Eat — Landing Page

Marketing landing page for **Scan n' Eat**, a QR-menu platform with AI-powered order suggestions and POS integration for restaurants in Costa Rica. Built in **Astro** as a separate project from the React SPA, to get better SEO and load times.

Project by team **InnovaCore** — Informática y Tecnología Multimedia, Sede del Pacífico.

## 🧱 Stack

- [Astro](https://docs.astro.build) — page generation (SSG)
- [Tailwind CSS v4](https://tailwindcss.com) — styling, with a custom theme and brand colors in `@theme`
- TypeScript
- [lucide-astro](https://lucide.dev) — icons

## 🚀 Project structure

```text
/
├── public/
│   ├── logoscaneat.svg
│   └── Animated-iPhone-mockups.mp4
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── HeroVideo.astro
│   │   ├── Features.astro
│   │   ├── About.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppBubble.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files inside `src/pages/`. Each file there automatically becomes a route based on its filename (file-based routing).

`src/components/` isn't a reserved Astro folder — it's just the convention we use for page sections (Navbar, Hero, Features, etc.).

Static assets (images, videos, favicon) go in `public/`.

## 🧞 Commands

All commands run from the project root, in a terminal:

| Command                   | Action                                                |
| :------------------------- | :----------------------------------------------------- |
| `npm install`               | Installs dependencies                                   |
| `npm run dev`                | Starts the local dev server at `localhost:4321`          |
| `npm run build`              | Builds the production site to `./dist/`                  |
| `npm run preview`            | Previews the build locally before deploying               |
| `npm run astro ...`          | Runs Astro CLI commands (`astro add`, `astro check`)      |
| `npm run astro -- --help`    | Astro CLI help                                            |

## 🔑 Environment variables

Create a `.env` file at the root with:

```env
PUBLIC_APP_URL=https://scaneat-frontend-produccion-production.up.railway.app

PUBLIC_URL_FACEBOOK=https://www.facebook.com/profile.php?id=61594125042423
PUBLIC_URL_INSTAGRAM=https://www.instagram.com/innovacore.cr/
PUBLIC_URL_TIKTOK=https://www.tiktok.com/@innovacorecr?_r=1&_t=ZS-99lbL67KDw5

PUBLIC_CONTACT_EMAIL=innovacore05@gmail.com
```

Used in the Navbar to build the `Registrarse` / `Iniciar sesión` links pointing to the React SPA.

## 🔍 SEO

The whole point of building this as a separate Astro site instead of adding it to the React SPA is SEO, so this needs actual attention before launch — right now the site has close to none of it in place. Things to look into and add:

- **`noindex` is currently on and not even wired up.** `Layout.astro` accepts a `noindex` prop and `index.astro` passes `noindex={true}`, but the prop is never used inside `<head>` — so it does nothing either way. Before going live: implement it properly (render `<meta name="robots" content="noindex">` when true) and flip it to `false` for the real pages, or the site won't be indexed at all.
- **Meta tags per page.** `title` and `description` are already passed as props to `Layout.astro` — good — but they're not rendered anywhere in `<head>` yet (there's no `<meta name="description">` tag). Also missing: canonical URL (`<link rel="canonical">`), and a proper `<html lang="es">`-aware `og:locale`.
- **Open Graph / Twitter cards.** For link previews when shared on WhatsApp, Facebook, etc.: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`. There's already an `image` prop on `Layout.astro` that isn't used yet — this is what it's for.
- **`sitemap.xml` and `robots.txt`.** Astro has an official `@astrojs/sitemap` integration that generates this automatically on build. `robots.txt` can just be a static file in `public/`.
- **Structured data (JSON-LD).** A `LocalBusiness` or `SoftwareApplication` schema would help for a product like this targeting local restaurants.
- **Image optimization.** Astro's built-in `<Image />` / `astro:assets` component handles responsive sizes, lazy loading and modern formats (webp/avif) automatically — worth using instead of plain `<img>` for anything beyond the logo, especially once real screenshots/photos get added.
- **Performance basics.** The hero video (`Animated-iPhone-mockups.mp4`) is the heaviest asset on the page — check its file size and consider `poster` + lazy-loading it below the fold, since Core Web Vitals (especially LCP) factor into search ranking.
- **Semantic headings.** Double-check there's exactly one `<h1>` per page (currently in Hero) and that heading levels don't skip (h1 → h2 → h3), which matters for both SEO and accessibility.

## ☁️ Deploy

The site is deployed on [Railway](https://railway.app), alongside the backend and the React SPA.

## 👀 Resources

- [Astro docs](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)