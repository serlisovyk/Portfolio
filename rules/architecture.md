# Architecture Rules

## Architecture Style

This project follows a compact Feature-Sliced Design structure:

- `app` is the application/routing layer.
- `widgets` are page-level sections.
- `features` are reusable user-facing actions and controls.
- `shared` contains reusable infrastructure, UI primitives, constants, types, and
  utilities.

There is no `entities` layer yet. Do not add it until the project has a
meaningful domain model, API data model, or reusable business entities that need
their own boundary.

## Layer Responsibilities

- `src/app` owns the FSD app layer: Next.js routes, layout, global styles,
  sitemap, robots, and middleware proxy.
- `src/widgets` owns the FSD widgets layer: page sections composed into the
  portfolio page.
- `src/features` owns the FSD features layer: reusable feature-level UI blocks.
- `src/shared/ui` contains small reusable UI primitives.
- `src/shared/providers` composes app-level providers.
- `src/shared/i18n` owns locale constants, routing, navigation, request config,
  and messages.
- `src/shared/theme` owns theme provider, constants, and theme class sync logic.
- `src/shared/config` owns environment validation and normalization.
- `src/shared/constants` contains personal, SEO, runtime, and cookie constants.
- `src/shared/utils` contains small reusable helpers.

## Boundaries

- FSD import direction is `app -> widgets -> features -> shared`.
- Widgets can import features and shared modules.
- Features can import shared modules.
- Shared modules should not import features, widgets, or app routes.
- Keep page composition in `src/app/[locale]/page.tsx`.
- Keep metadata and JSON-LD setup in `src/app/[locale]/layout.tsx` and shared SEO
  constants.
- Do not duplicate locale arrays outside `src/shared/i18n`.

## Rendering

- Keep localized portfolio pages static when possible.
- Use `generateStaticParams` for supported locales.
- Keep `dynamicParams = false` so unknown locale params are not generated at
  request time.
- Use `setRequestLocale` for `next-intl` static rendering support.

## Configuration

- Read the public site origin through `SITE_URL_ENV`.
- Validate environment variables with Zod before using them.
- Do not derive canonical URLs from `window`.
- Keep `NEXT_PUBLIC_SITE_URL` as the canonical origin source.
