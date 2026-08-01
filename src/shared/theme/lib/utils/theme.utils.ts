import { IS_CLIENT } from '@/shared/constants/runtime.constants'
import { getCookie, setCookie } from '@/shared/utils'
import {
  DEFAULT_THEME,
  THEME_CHANGE_EVENT,
  THEME_COOKIE_MAX_AGE,
  THEME_COOKIE_NAME,
  THEME_STORAGE_KEY,
} from '../constants'
import { Theme, THEMES } from '../types'

export function getDefaultTheme() {
  return DEFAULT_THEME
}

export function getStoredTheme() {
  if (!IS_CLIENT) return DEFAULT_THEME

  try {
    const storageTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

    if (isTheme(storageTheme)) return storageTheme

    const cookieTheme = getCookie(THEME_COOKIE_NAME)

    return isTheme(cookieTheme) ? cookieTheme : DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

export function saveTheme(theme: Theme) {
  if (!IS_CLIENT) return

  setStoredTheme(theme)

  setCookie(THEME_COOKIE_NAME, theme, {
    maxAge: THEME_COOKIE_MAX_AGE,
  })

  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
}

export function subscribeToThemeChange(onChange: () => void) {
  if (!IS_CLIENT) return () => {}

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onChange()
  }

  window.addEventListener(THEME_CHANGE_EVENT, onChange)
  window.addEventListener('storage', handleStorageChange)

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange)
    window.removeEventListener('storage', handleStorageChange)
  }
}

export function isTheme(value: unknown): value is Theme {
  return value === THEMES.DARK || value === THEMES.LIGHT
}

function setStoredTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    return true
  } catch {
    return false
  }
}
