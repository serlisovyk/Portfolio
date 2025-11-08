export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export const THEME_STORAGE_KEY = 'theme'

export const HEADER_NAV_LINKS = ['about', 'projects', 'experience', 'contact']

export enum LOCALES {
  EN = 'en',
  UK = 'uk',
  RU = 'ru',
}

export const LANGUAGE_SWITCHER_OPTIONS = [
  { code: LOCALES.EN, label: 'EN' },
  { code: LOCALES.UK, label: 'UA' },
  { code: LOCALES.RU, label: 'RU' },
]

export const INTRO_TYPING_TEXTS = [
  'Front-end developer',
  'React developer',
  'Javascript developer',
  'Full-stack developer',
  'Web developer',
]
