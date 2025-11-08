import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { ProvidersProps } from '@/shared/types'

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
