import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import { routing } from '@/shared/i18n'
import { Providers } from '@/shared/providers'
import { RootLayoutProps } from '@/shared/types'
import './globals.css'

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Serhii Lisovyk | Portfolio Website',
  description: 'Serhii Lisovyk | Portfolio Website | Frontend Developer',
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params

  const currentLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale

  return (
    <html lang={currentLocale} suppressHydrationWarning className="scroll-smooth">
      <body className={`${interSans.variable} antialiased`}>
        <Providers>
          <div className="overflow-hidden min-h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
