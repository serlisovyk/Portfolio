import { NextIntlClientProvider } from 'next-intl'
import { ProvidersProps } from '@/shared/types'
import { ThemeProvider } from './theme.provider'

export default function Providers({ children, initialTheme }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
    </NextIntlClientProvider>
  )
}
