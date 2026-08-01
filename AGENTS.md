# Agent Instructions

This file defines how AI coding agents should work in this repository.

This is a compact Next.js + React + TypeScript portfolio website. Keep the code
clean, practical, accessible, and proportional to the project size. The site is
used as a personal portfolio, so visual polish, performance, SEO, and
localization matter. The source follows a compact Feature-Sliced Design
structure with `app`, `widgets`, `features`, and `shared` layers. The `entities`
layer is intentionally absent because the site has no real API/domain model yet.

## Rule Files

Read these files before making changes:

- [Architecture Rules](rules/architecture.md)
- [Style Rules](rules/style.md)
- [Scope Rules](rules/scope.md)
- [SEO & Accessibility Rules](rules/seo-accessibility.md)
- [Verification Rules](rules/verification.md)

## Working Principles

- Prefer small, focused changes.
- Follow the existing project structure.
- Do not add new abstractions unless they remove real duplication or clarify a
  boundary.
- Do not rewrite working code just to make it look different.
- Keep UI changes responsive, accessible, and consistent with the current visual
  language.
- If a request conflicts with these rules, follow the user's explicit request
  and mention the tradeoff.

## Project Defaults

- Package manager: `npm`
- Runtime: Node.js
- Framework: Next.js App Router
- Architecture: Feature-Sliced Design
- Language: TypeScript
- UI: React
- Styling: Tailwind CSS
- Localization: next-intl
- Theme: next-themes
- Animation: GSAP
- Validation: Zod
- Formatting: Prettier

## Before Finishing

Run the relevant checks:

```bash
npm run format:check
npm run lint
npm run build
```

If formatting was intentionally changed, run:

```bash
npm run format
```

If a check cannot be run, report that clearly.
