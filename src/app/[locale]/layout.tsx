import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/shared/theme'
import { getCurrentTheme } from '@/shared/theme/server-index'
import { getCurrentLocale } from '@/shared/i18n'
import { RootLayoutProps } from '@/shared/types'
import './globals.css'
import { SITE_URL } from '@/shared/config'
import {
  homepageJsonLd,
  metaByLocale,
  personJsonLd,
  websiteJsonLd,
} from '@/shared/constants'
import JsonLd from '@/shared/ui/json-ld'

const interSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
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

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const currentLocale = await getCurrentLocale(params)

  const theme = await getCurrentTheme()

  return (
    <html
      lang={currentLocale}
      className={`scroll-smooth ${theme}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={homepageJsonLd} />
      </head>
      <body className={`${interSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
