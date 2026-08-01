'use client'

import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import { useLayoutEffect } from 'react'
import { applyThemeClass, getStoredTheme, normalizeTheme } from '../../utils'

export default function ThemeClassSync() {
  const locale = useLocale()

  const { theme } = useTheme()

  useLayoutEffect(() => {
    applyThemeClass(normalizeTheme(theme ?? getStoredTheme()))
  }, [locale, theme])

  return null
}
