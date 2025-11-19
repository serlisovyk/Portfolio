import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import { routing } from '@/shared/i18n'
import { Providers } from '@/shared/providers'
import {
  generateMetadataParams,
  generateMetadataProps,
  RootLayoutParams,
  RootLayoutProps,
} from '@/shared/types'
import './globals.css'
import { cookies } from 'next/headers'
import { DEFAULT_THEME, Theme, isTheme } from '@/shared/providers/theme.config'
import { SITE_URL } from '@/shared/config'
import {
  homepageJsonLd,
  metaByLocale,
  personJsonLd,
  websiteJsonLd,
} from '@/shared/constants'
import JsonLd from '@/shared/ui/json-ld'

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export async function generateMetadata({
  params,
}: generateMetadataProps): Promise<Metadata> {
  const { locale } = await params

  const { title, description, siteName } = metaByLocale[locale] ?? metaByLocale.ru

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ru: `${SITE_URL}/ru`,
        uk: `${SITE_URL}/uk`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName,
      images: [
        {
          url: `${SITE_URL}/profile.jpg`,
          width: 680,
          height: 680,
          alt: title,
        },
      ],
      type: 'website',
    },
  }
}

async function getCurrentLocale(
  params: Promise<RootLayoutParams> | Promise<generateMetadataParams>
) {
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

  return (
    <html
      lang={currentLocale}
      suppressHydrationWarning
      className={`scroll-smooth ${theme}`}
    >
      <head>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={homepageJsonLd} />
      </head>
      <body className={`${interSans.variable} antialiased`}>
        <Providers initialTheme={theme}>
          <div className="overflow-hidden min-h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
