# Style Rules

## General

- Use TypeScript strict mode patterns.
- Prefer readable code over clever code.
- Keep files focused on one responsibility.
- Avoid unnecessary comments. Add comments only when they explain non-obvious
  reasoning.
- Follow the existing Feature-Sliced Design structure before introducing a new
  layer or folder.

## Imports

- Respect FSD import direction: `app -> widgets -> features -> shared`.
- Prefer public module APIs outside a module, for example `@/shared/i18n`.
- Avoid deep imports when a module already exposes the needed public API.
- Use `import type` for type-only imports.
- Keep public root exports intentional.
- Internal barrels can use `export *` when they expose several closely related
  files inside the same module.

## Naming

- Use `.constants.ts` for constants.
- Use `.types.ts` for types.
- Use `.util.ts` for utilities.
- Use `.hook.ts` for hooks.
- Do not add `.component.tsx` suffixes unless the local folder already uses that
  convention.
- Prefer `as const` objects and arrays for string constants that do not need enum
  behavior.

## Styling

- Use Tailwind CSS utilities for normal layout and visual states.
- Use CSS modules only for local animation selectors or styles that are clearer
  outside utility classes.
- Use `cn` for conditional classes and Tailwind conflict merging.
- Keep transitions scoped. Do not add broad global transitions that can cause
  theme or route-change flashes.

## Formatting

- Use Prettier.
- Use single quotes.
- Do not use semicolons.
- Keep `printWidth` at `85`.
- Use `npm run format` to apply formatting.
