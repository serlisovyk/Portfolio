import { ReactNode } from 'react'

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Theme = THEMES.LIGHT | THEMES.DARK

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export interface ThemeProviderProps {
  initialTheme: Theme
  children: ReactNode
}
