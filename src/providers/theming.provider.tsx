'use client'

import { ThemeProvider } from 'next-themes'
import { THEME_STORAGE_KEY } from '@/constants'
import { ProvidersProps } from '@/types'

export default function ThemingProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey={THEME_STORAGE_KEY}
    >
      {children}
    </ThemeProvider>
  )
}
