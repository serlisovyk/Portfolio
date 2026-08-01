export const THEME_DARK = 'dark'

export const THEME_LIGHT = 'light'

export const DEFAULT_THEME = THEME_DARK

export const THEME_STORAGE_KEY = 'theme'

export const THEMES = [THEME_LIGHT, THEME_DARK] as const

export type Theme = (typeof THEMES)[number]
