'use client'

import { createContext, useEffect, useSyncExternalStore } from 'react'
import { IS_CLIENT } from '@/shared/constants/runtime.constants'
import { getStoredTheme, saveTheme, subscribeToThemeChange } from './utils'
import { Theme, ThemeContextValue, ThemeProviderProps, THEMES } from './types'

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getStoredTheme,
    () => initialTheme,
  )

  useEffect(() => {
    if (!IS_CLIENT) return

    document.documentElement.classList.remove(THEMES.DARK, THEMES.LIGHT)
    document.documentElement.classList.add(theme)
  }, [theme])

  const setTheme = (nextTheme: Theme) => {
    saveTheme(nextTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  }

  const value: ThemeContextValue = { theme, toggleTheme, setTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
