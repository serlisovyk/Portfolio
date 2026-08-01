import {
  DEFAULT_THEME,
  THEME_COOKIE_NAME,
  THEME_STORAGE_KEY,
} from './theme.constants'
import { THEMES } from '../types'

export const THEME_INIT_SCRIPT = `
(() => {
  try {
    const storageTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}')
    const cookieTheme = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('${THEME_COOKIE_NAME}='))
      ?.split('=')[1]

    const theme = storageTheme || (cookieTheme ? decodeURIComponent(cookieTheme) : '${DEFAULT_THEME}')

    if (theme !== '${THEMES.DARK}' && theme !== '${THEMES.LIGHT}') return

    document.documentElement.classList.remove('${THEMES.DARK}', '${THEMES.LIGHT}')
    document.documentElement.classList.add(theme)
  } catch {
    return
  }
})()
`
