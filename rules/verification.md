# Verification Rules

## Required Checks

After TypeScript, Next.js, config, or documentation changes, run:

```bash
npm run format:check
```

After TypeScript or application behavior changes, run:

```bash
npm run lint
npm run build
```

If formatting was intentionally changed, run:

```bash
npm run format
```

## Package Manager

- Use `npm`, not `yarn` or `pnpm`.
- Keep `package-lock.json`.

## Visual Checks

For UI changes, check the affected route in a browser on desktop and mobile
widths.

For theme changes, check both light and dark themes and locale switching.

## Reporting

When finishing work, report:

- what changed
- which commands were run
- whether they passed
- anything that could not be verified

Do not claim the project builds, lints, or formats correctly unless the command
was run successfully.
