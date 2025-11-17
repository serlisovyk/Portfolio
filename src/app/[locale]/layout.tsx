import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { hasLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import StructuredData from '@/shared/seo/structured-data'
import {
  METADATA_BASE,
  SITE_NAME,
  absoluteUrl,
  getLocaleSeo,
  getOpenGraphLocale,
} from '@/shared/seo/seo.config'
import { routing } from '@/shared/i18n'
import { Providers } from '@/shared/providers'
import { DEFAULT_THEME, Theme, isTheme } from '@/shared/providers/theme.config'
import { RootLayoutParams, RootLayoutProps } from '@/shared/types'
import './globals.css'

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const currentLocale = await getCurrentLocale(params)
  const seoContent = getLocaleSeo(currentLocale)

  const canonicalPath = `/${currentLocale}`
  const canonicalUrl = absoluteUrl(canonicalPath)

  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(`/${locale}`)]),
  )

  const alternateLocale = routing.locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => getOpenGraphLocale(locale))

  return {
    metadataBase: METADATA_BASE,
    title: seoContent.title,
    description: seoContent.description,
    keywords: seoContent.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: getOpenGraphLocale(currentLocale),
      alternateLocale,
      url: canonicalUrl,
      title: seoContent.title,
      description: seoContent.description,
      siteName: SITE_NAME,
      images: [
        {
          url: absoluteUrl('/profile.jpg'),
          width: 1200,
          height: 630,
          alt: seoContent.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@serlisovyk',
      title: seoContent.title,
      description: seoContent.description,
      images: [absoluteUrl('/profile.jpg')],
    },
    category: 'technology',
  }
}

async function getCurrentLocale(params: Promise<RootLayoutParams>) {
  const { locale } = await params

  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
}

async function getCurrentTheme() {
  const cookieStore = await cookies()
  const cookieTheme = cookieStore.get('theme')?.value

  const theme: Theme = isTheme(cookieTheme) ? cookieTheme : DEFAULT_THEME

  return theme
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const currentLocale = await getCurrentLocale(params)

  const theme = await getCurrentTheme()
  const canonicalPath = `/${currentLocale}`

  return (
    <html
      lang={currentLocale}
      suppressHydrationWarning
      className={`scroll-smooth ${theme}`}
    >
      <body className={`${interSans.variable} antialiased`}>
        <StructuredData locale={currentLocale} canonicalPath={canonicalPath} />
        <Providers initialTheme={theme}>
          <div className="overflow-hidden min-h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
