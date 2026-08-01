import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { setRequestLocale } from 'next-intl/server'
import { getCurrentLocale, routing } from '@/shared/i18n'
import Providers from '@/shared/providers'
import JsonLd from '@/shared/ui/json-ld'
import { SITE_URL } from '@/shared/config'
import {
  homepageJsonLd,
  metaByLocale,
  personJsonLd,
  websiteJsonLd,
} from '@/shared/constants'
import { generateMetadataProps, RootLayoutProps } from '@/shared/types'
import './globals.css'

const interSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const dynamicParams = false

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

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

  setRequestLocale(currentLocale)

  return (
    <html
      lang={currentLocale}
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={homepageJsonLd} />
      </head>
      <body className={`${interSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
