'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import ThemeClassSync from './components/theme-class-sync'
import { DEFAULT_THEME, THEMES, THEME_STORAGE_KEY } from './constants'

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      enableColorScheme
      enableSystem={false}
      storageKey={THEME_STORAGE_KEY}
      themes={[...THEMES]}
    >
      <ThemeClassSync />
      {children}
    </NextThemeProvider>
  )
}
