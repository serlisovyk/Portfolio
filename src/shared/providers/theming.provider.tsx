'use client'

import { ProvidersProps } from '@/shared/types'
import { ThemeProvider } from 'next-themes'
import { THEME_STORAGE_KEY } from '../config'

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
