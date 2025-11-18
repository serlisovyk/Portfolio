import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/shared/theme'
import { getCurrentTheme } from '@/shared/theme/server-index'
import { getCurrentLocale } from '@/shared/i18n'
import { RootLayoutProps } from '@/shared/types'
import './globals.css'

const interSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Serhii Lisovyk | Portfolio Website',
  description: 'Serhii Lisovyk | Portfolio Website | Frontend Developer',
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
      <body className={`${interSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
