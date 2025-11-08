'use client'

import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { FiSun as Sun, FiMoon as Moon } from 'react-icons/fi'
import { THEMES } from './constants'

export default function ThemeToggle() {
  const t = useTranslations('Home')

  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = (theme ?? resolvedTheme) === THEMES.DARK

  const toggleTheme = () => setTheme(isDark ? THEMES.LIGHT : THEMES.DARK)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('toggle-theme')}
      aria-pressed={isDark}
      className="group inline-flex h-12 w-12 items-center justify-center cursor-pointer rounded-full bg-primary-contrast/5 hover:bg-primary-contrast/20 active:bg-primary-contrast/30"
    >
      {isDark ? (
        <Sun
          size={24}
          className="transition-transform duration-150 group-active:scale-95"
          color="#ffe102"
        />
      ) : (
        <Moon
          size={24}
          className="transition-transform duration-150 group-active:scale-95"
          color="#2b7fff"
        />
      )}
    </button>
  )
}
