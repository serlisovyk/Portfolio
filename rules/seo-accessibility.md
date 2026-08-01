# SEO & Accessibility Rules

## SEO

- Keep canonical URLs based on `NEXT_PUBLIC_SITE_URL`.
- Keep `NEXT_PUBLIC_SITE_URL` as a validated env value, not a browser-derived
  value.
- Reuse locale constants from `src/shared/i18n`.
- Keep metadata, sitemap alternates, robots.txt, JSON-LD, Open Graph, Twitter
  cards, and `llms.txt` aligned.
- Do not hard-code duplicated language alternate maps in multiple files.
- Keep `llms.txt` in `public`.

## JSON-LD

- Keep stable identity values such as the person's canonical English name in
  JSON-LD.
- Use `alternateName` for Ukrainian/Russian name variants.
- Keep profile links in `sameAs`.
- Do not add translated long marketing text to JSON-LD unless it serves a clear
  search/context purpose.

## Accessibility

- Use semantic landmarks and headings.
- Give interactive controls clear accessible names.
- Decorative icons should use `aria-hidden`.
- Duplicate decorative images should use empty `alt`.
- If a control has state, expose it through an appropriate label or ARIA
  attribute.
- Preserve keyboard focus states.

## Navigation

- Hash navigation is acceptable for same-page portfolio sections.
- Use `scroll-margin-top` on target sections so sticky headers do not cover
  headings after navigation.
- Use real links for navigation targets, not buttons, when the action changes
  the URL or moves to a section.
