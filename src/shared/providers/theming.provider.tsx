'use client'

import { ProvidersProps } from '@/shared/types'
import { ThemeProvider } from 'next-themes'

export default function ThemingProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  )
}
