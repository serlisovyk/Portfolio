export const LOCALES = {
  EN: 'en',
  UK: 'uk',
  RU: 'ru',
} as const

export const LOCALE_VALUES = [LOCALES.EN, LOCALES.UK, LOCALES.RU] as const

export type Locale = (typeof LOCALES)[keyof typeof LOCALES]

export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE'

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year
