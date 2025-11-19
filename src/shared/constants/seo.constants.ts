import { SITE_URL } from '../config'
import { MetaByLocale } from '../types'
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TELEGRAM_LINK,
} from './personal.constants'

export const metaByLocale: MetaByLocale = {
  ru: {
    title: 'Сергей Лесовик — Frontend разработчик (Next.js, React, TypeScript)',
    description:
      'Фронтенд-разработчик с более чем годом опыта. Создаю быстрые и понятные интерфейсы на Next.js, React и TypeScript.',
    siteName: 'Сергей Лесовик — Портфолио',
  },
  uk: {
    title: 'Сергій Лесовик — Frontend розробник (Next.js, React, TypeScript)',
    description:
      'Фронтенд-розробник із понад роком досвіду. Створюю швидкі та зрозумілі інтерфейси на Next.js, React та TypeScript.',
    siteName: 'Сергій Лесовик — Портфоліо',
  },
  en: {
    title: 'Serhii Lisovyk — Frontend Developer (Next.js, React, TypeScript)',
    description:
      'Frontend developer with 1+ year of experience. I build fast and clear interfaces with Next.js, React and TypeScript.',
    siteName: 'Serhii Lisovyk — Portfolio',
  },
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Serhii Lisovyk',
  alternateName: ['Сергей Лесовик', 'Сергій Лесовик'],
  jobTitle: 'Frontend Developer',
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  sameAs: [EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dnipro',
    addressCountry: 'UA',
  },
  knowsAbout: [
    'Frontend Development',
    'React',
    'Next.js',
    'TypeScript',
    'Web Performance',
  ],
  knowsLanguage: ['uk', 'ru', 'en'],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Serhii Lisovyk — Frontend Developer',
  url: SITE_URL,
  creator: {
    '@type': 'Person',
    name: 'Serhii Lisovyk',
  },
}

export const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Portfolio — Serhii Lisovyk',
  url: SITE_URL,
  isPartOf: {
    '@type': 'WebSite',
    url: SITE_URL,
  },
}
