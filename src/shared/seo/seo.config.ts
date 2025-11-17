import { routing } from '@/shared/i18n'

const FALLBACK_SITE_URL = 'http://localhost:3000'

const ENV_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
const VERCEL_URL = process.env.VERCEL_URL

const normalizedSiteUrl =
  normalizeSiteUrl(ENV_SITE_URL) ??
  normalizeSiteUrl(VERCEL_URL) ??
  FALLBACK_SITE_URL

export const SITE_URL = normalizedSiteUrl.replace(/\/$/, '')
export const METADATA_BASE = new URL(SITE_URL)
export const SITE_NAME = 'Serhii Lisovyk — Frontend Engineer'
export const PERSON_NAME = 'Serhii Lisovyk'
export const PERSON_EMAIL = 'serlesovik@gmail.com'
export const PERSON_JOB_TITLE = 'Frontend Engineer'
export const PERSON_LOCATION = {
  city: 'Dnipro',
  region: 'Dnipropetrovsk Oblast',
  country: 'Ukraine',
  countryCode: 'UA',
}
export const CURRENT_COMPANY = {
  name: 'Symfio',
  website: 'https://symfio.de',
}
export const SOCIAL_LINKS = [
  'https://github.com/serlisovyk',
  'https://www.linkedin.com/in/serhii-lisovyk-b43a4b29b/',
  'https://t.me/serlisovyk',
]

interface LocaleSeoSections {
  skills: string
  experience: string
  projects: string
  contact: string
}

export interface LocaleSeoContent {
  title: string
  description: string
  keywords: string[]
  socialImageAlt: string
  sections: LocaleSeoSections
}

const SEO_CONTENT: Record<string, LocaleSeoContent> = {
  en: {
    title: 'Serhii Lisovyk | Frontend Developer Portfolio',
    description:
      'Portfolio of Serhii Lisovyk, a frontend engineer from Dnipro who builds high-performing marketing sites and product interfaces with Next.js, React, GSAP, and TypeScript.',
    keywords: [
      'Serhii Lisovyk',
      'frontend developer portfolio',
      'next.js developer',
      'react engineer',
      'typescript developer',
      'gsap animations',
      'web performance specialist',
    ],
    socialImageAlt: 'Portrait of Serhii Lisovyk',
    sections: {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Pet projects',
      contact: 'Contact',
    },
  },
  ru: {
    title:
      '\u0421\u0435\u0440\u0433\u0435\u0439\u0020\u041b\u0438\u0441\u043e\u0432\u0438\u043a\u0020\u007c\u0020\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e\u0020\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u002d\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430',
    description:
      '\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e\u0020\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u002d\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u0020\u0421\u0435\u0440\u0433\u0435\u044f\u0020\u041b\u0438\u0441\u043e\u0432\u0438\u043a\u0430\u0020\u0438\u0437\u0020\u0414\u043d\u0435\u043f\u0440\u0430\u003a\u0020\u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\u0020\u0441\u0430\u0439\u0442\u044b\u0020\u043d\u0430\u0020\u004e\u0065\u0078\u0074\u002e\u006a\u0073\u002c\u0020\u0052\u0065\u0061\u0063\u0074\u0020\u0438\u0020\u0054\u0079\u0070\u0065\u0053\u0063\u0072\u0069\u0070\u0074\u002c\u0020\u043e\u043f\u044b\u0442\u0020\u0432\u0020\u0053\u0079\u006d\u0066\u0069\u006f\u0020\u0438\u0020\u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u0435\u0020\u043f\u0440\u043e\u0435\u043a\u0442\u044b\u0020\u0434\u043b\u044f\u0020\u0430\u0432\u0442\u043e\u0434\u0438\u043b\u0435\u0440\u043e\u0432\u002e',
    keywords: [
      'Serhii Lisovyk',
      'frontend-razrabotchik',
      'next.js razrabotchik',
      'react developer',
      'typescript frontend',
      'portfolio Sergii Lisovyk',
    ],
    socialImageAlt:
      '\u041f\u043e\u0440\u0442\u0440\u0435\u0442\u0020\u0421\u0435\u0440\u0433\u0435\u044f\u0020\u041b\u0438\u0441\u043e\u0432\u0438\u043a\u0430',
    sections: {
      skills: '\u041d\u0430\u0432\u044b\u043a\u0438',
      experience: '\u041e\u043f\u044b\u0442',
      projects: '\u0050\u0065\u0074\u002d\u043f\u0440\u043e\u0435\u043a\u0442\u044b',
      contact: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
    },
  },
  uk: {
    title:
      '\u0421\u0435\u0440\u0433\u0456\u0439\u0020\u041b\u0456\u0441\u043e\u0432\u0438\u043a\u0020\u007c\u0020\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e\u0020\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u002d\u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0430',
    description:
      '\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e\u0020\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u002d\u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0430\u0020\u0421\u0435\u0440\u0433\u0456\u044f\u0020\u041b\u0456\u0441\u043e\u0432\u0438\u043a\u0430\u0020\u0437\u0020\u0414\u043d\u0456\u043f\u0440\u0430\u003a\u0020\u0448\u0432\u0438\u0434\u043a\u0456\u0020\u0441\u0430\u0439\u0442\u0438\u0020\u043d\u0430\u0020\u004e\u0065\u0078\u0074\u002e\u006a\u0073\u002c\u0020\u0052\u0065\u0061\u0063\u0074\u0020\u0456\u0020\u0054\u0079\u0070\u0065\u0053\u0063\u0072\u0069\u0070\u0074\u002c\u0020\u0434\u043e\u0441\u0432\u0456\u0434\u0020\u0443\u0020\u0053\u0079\u006d\u0066\u0069\u006f\u0020\u0442\u0430\u0020\u0061\u0075\u0074\u006f\u006d\u006f\u0074\u0069\u0076\u0065\u002d\u043f\u0440\u043e\u0454\u043a\u0442\u0430\u0445\u002e',
    keywords: [
      'Serhii Lisovyk',
      'frontend-rozrobnyk',
      'next.js developer',
      'react engineer',
      'portfolio Serhii Lisovyk',
      'typescript frontend',
    ],
    socialImageAlt:
      '\u041f\u043e\u0440\u0442\u0440\u0435\u0442\u0020\u0421\u0435\u0440\u0433\u0456\u044f\u0020\u041b\u0456\u0441\u043e\u0432\u0438\u043a\u0430',
    sections: {
      skills: '\u041d\u0430\u0432\u0438\u0447\u043a\u0438',
      experience: '\u0414\u043e\u0441\u0432\u0456\u0434',
      projects: '\u0050\u0065\u0074\u002d\u043f\u0440\u043e\u0454\u043a\u0442\u0438',
      contact: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
    },
  },
}

const LANGUAGE_TAGS: Record<string, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
}

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
}

export function getLocaleSeo(locale: string): LocaleSeoContent {
  return SEO_CONTENT[locale] ?? SEO_CONTENT[routing.defaultLocale]
}

export function getLanguageTag(locale: string): string {
  return LANGUAGE_TAGS[locale] ?? LANGUAGE_TAGS[routing.defaultLocale]
}

export function getOpenGraphLocale(locale: string): string {
  return OPEN_GRAPH_LOCALES[locale] ?? OPEN_GRAPH_LOCALES[routing.defaultLocale]
}

export function getAvailableLanguageTags(): string[] {
  return routing.locales.map((locale) => getLanguageTag(locale))
}

export function absoluteUrl(path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return new URL(normalizedPath, SITE_URL).toString()
}

function normalizeSiteUrl(value?: string): string | undefined {
  if (!value) {
    return undefined
  }

  try {
    const hasProtocol = value.startsWith('http://') || value.startsWith('https://')

    const url = new URL(hasProtocol ? value : `https://${value}`)

    return url.origin
  } catch {
    return undefined
  }
}
