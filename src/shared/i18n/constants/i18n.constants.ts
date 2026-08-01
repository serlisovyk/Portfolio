export enum LOCALES {
  EN = 'en',
  UK = 'uk',
  RU = 'ru',
}

export type Locale = LOCALES.EN | LOCALES.RU | LOCALES.UK

export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE'

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year
