import type { MetadataRoute } from 'next'
import { routing } from '@/shared/i18n'
import { absoluteUrl } from '@/shared/seo/seo.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routing.locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }))
}
