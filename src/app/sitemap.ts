import { MetadataRoute } from 'next'
import { routing } from '@/shared/i18n'
import { SITE_URL_ENV } from '@/shared/config'
import { getLanguageAlternates } from '@/shared/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const languages = getLanguageAlternates()

  return routing.locales.map((locale) => ({
    url: `${SITE_URL_ENV}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1.0 : 0.9,
    alternates: {
      languages,
    },
  }))
}
