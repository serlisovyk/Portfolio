import { IS_CLIENT } from '@/shared/constants'
import {
  DEFAULT_THEME,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
  Theme,
} from '../constants'

export function getStoredTheme(): Theme {
  if (!IS_CLIENT) return DEFAULT_THEME

  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY))
  } catch {
    return DEFAULT_THEME
  }
}

export function applyThemeClass(theme = getCurrentThemeClass()) {
  if (!IS_CLIENT) return

  const root = document.documentElement

  root.classList.remove(THEME_DARK, THEME_LIGHT)
  root.classList.add(theme)
  root.style.colorScheme = theme
}

export function normalizeTheme(theme: string | null | undefined): Theme {
  return theme === THEME_LIGHT || theme === THEME_DARK ? theme : DEFAULT_THEME
}

function getCurrentThemeClass(): Theme {
  if (!IS_CLIENT) return DEFAULT_THEME

  const { classList } = document.documentElement

  if (classList.contains(THEME_DARK)) return THEME_DARK
  if (classList.contains(THEME_LIGHT)) return THEME_LIGHT

  return getStoredTheme()
}
