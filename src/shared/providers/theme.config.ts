export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Theme = THEMES.LIGHT | THEMES.DARK

export const DEFAULT_THEME: Theme = THEMES.DARK

export const THEME_COOKIE_NAME = 'theme'
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function isTheme(value: unknown): value is Theme {
  return value === THEMES.DARK || value === THEMES.LIGHT
}
