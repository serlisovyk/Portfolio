import { cookies } from 'next/headers'
import { DEFAULT_THEME } from '../constants'
import { Theme, THEMES } from '../types'

export async function getCurrentTheme() {
  const cookieStore = await cookies()
  const cookieTheme = cookieStore.get('theme')?.value

  const theme: Theme = isTheme(cookieTheme) ? cookieTheme : DEFAULT_THEME

  return theme
}

export function isTheme(value: unknown): value is Theme {
  return value === THEMES.DARK || value === THEMES.LIGHT
}
