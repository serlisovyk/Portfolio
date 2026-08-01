import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/shared/theme'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlClientProvider>
  )
}
