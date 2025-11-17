import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import { routing } from '@/shared/i18n'
import { Providers } from '@/shared/providers'
import { RootLayoutParams, RootLayoutProps } from '@/shared/types'
import './globals.css'
import { cookies } from 'next/headers'
import { DEFAULT_THEME, Theme, isTheme } from '@/shared/providers/theme.config'

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

  return (
    <html
      lang={currentLocale}
      suppressHydrationWarning
      className={`scroll-smooth ${theme}`}
    >
      <body className={`${interSans.variable} antialiased`}>
        <Providers initialTheme={theme}>
          <div className="overflow-hidden min-h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
