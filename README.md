# Portfolio

🧑‍💻 Personal portfolio website for Serhii Lisovyk.

This frontend portfolio presents skills, commercial experience, selected pet
projects, and contact links through a compact multilingual Next.js application.
The project is intentionally small, but structured with Feature-Sliced Design
layers: App Router routes, widgets, features, shared UI, providers, i18n, theme,
configuration, and SEO helpers.

## ✨ Features

- Localized portfolio pages for English, Ukrainian, and Russian
- Static localized routes with `next-intl`
- Dark and light theme support with `next-themes`
- Intro, about, skills, experience, projects, header, and footer sections
- Responsive layout for desktop, tablet, and mobile screens
- Optimized local images with `next/image`
- SEO metadata, Open Graph, Twitter cards, sitemap, robots.txt, and JSON-LD
- `llms.txt` for LLM-oriented site context
- Environment validation with Zod
- Utility-first styling with Tailwind CSS

## 🧰 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Feature-Sliced Design
- next-intl
- next-themes
- GSAP
- Zod
- React Icons
- ESLint
- Prettier
- npm

## 📁 Project Structure

```text
src/
  app/        Next.js routes, layout, global styles, metadata
  widgets/    Page sections composed into the portfolio page
  features/   Reusable feature-level UI: socials, language switcher, theme toggle
  shared/     Shared UI, providers, theme, i18n, config, constants
public/       Static images, favicon, project screenshots, company logos, llms.txt
```

## ⚙️ Environment Variables

Create a `.env` file in the project root. Use `.env.sample` as the list of
required keys.

```env
NEXT_PUBLIC_SITE_URL='https://example.com'
```

`NEXT_PUBLIC_SITE_URL` is required. It should contain the canonical public origin
without a trailing locale segment. The value is validated with Zod and used for
canonical URLs, alternate language URLs, sitemap, robots.txt, Open Graph images,
and JSON-LD.

## 🚀 Scripts

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

Format code:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Run linting:

```bash
npm run lint
```

## 🌍 Routes

```http
GET /en
GET /uk
GET /ru
GET /sitemap.xml
GET /robots.txt
GET /llms.txt
```

The localized pages are generated statically through `generateStaticParams`.
Unknown locale params are disabled with `dynamicParams = false`.

## 🔎 SEO Notes

- Metadata is generated per locale in `src/app/[locale]/layout.tsx`.
- Shared SEO constants and JSON-LD live in `src/shared/constants`.
- Sitemap and metadata language alternates reuse the same locale source.
- `robots.txt` points crawlers to the generated sitemap.
- `llms.txt` lives in `public` and summarizes the portfolio for LLM crawlers.

## 🧱 Architecture Notes

- The project follows a compact Feature-Sliced Design structure.
- `layout.tsx` owns locale setup, metadata, JSON-LD, font setup, and providers.
- `page.tsx` composes widgets into the main portfolio page.
- `widgets` own page sections and may import `features` and `shared`.
- `features` contain reusable user-facing actions and may import `shared`.
- `shared` contains reusable infrastructure and UI primitives and must stay
  independent from `widgets`.
- `entities` is intentionally absent until the project gets a meaningful
  domain/API model.
- Theme setup wraps `next-themes` and keeps the initial theme class stable.
- Environment config is parsed once through `src/shared/config`.
