# Scope Rules

This is a small personal portfolio. Keep the implementation polished and
maintainable without turning it into a large product template.

The project uses a compact Feature-Sliced Design structure. Keep the current
`app`, `widgets`, `features`, and `shared` layers. Do not add `entities` until
there is a real domain/API model that needs it.

## Do Not Add Without Explicit Request

- CMS integrations
- Authentication
- Databases
- Analytics dashboards
- Complex state managers
- API routes
- Server actions for contact forms
- Automated email sending
- Large animation frameworks beyond the current GSAP usage
- Component libraries that replace the current visual system
- Test frameworks

## Prefer

- Small incremental refactors
- Clear Feature-Sliced Design layer boundaries
- Static rendering where possible
- Reusable shared UI for repeated controls
- Local constants for stable content
- Accessible semantic markup
- Image optimization with `next/image`
- Practical SEO improvements tied to real routes and metadata

## Tradeoffs

- If a feature is unused, do not implement it "just in case".
- If an abstraction hides more than it clarifies, do not add it.
- If a change hurts performance, accessibility, or SEO for visual decoration,
  reconsider the design.
- If a visual change cannot be checked in the browser, report that clearly.
