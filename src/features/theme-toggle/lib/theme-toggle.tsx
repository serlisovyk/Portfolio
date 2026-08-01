'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { FiSun as Sun, FiMoon as Moon } from 'react-icons/fi'
import { THEME_DARK, THEME_LIGHT } from '@/shared/theme'
import { cn } from '@/shared/utils'
import styles from './theme-toggle.module.css'

export default function ThemeToggle() {
  const t = useTranslations('common')

  const { theme, setTheme } = useTheme()

  const isDarkTheme = theme !== THEME_LIGHT

  const currentTheme = isDarkTheme ? THEME_DARK : THEME_LIGHT

  const nextTheme = isDarkTheme ? THEME_LIGHT : THEME_DARK

  const toggleTheme = () => setTheme(nextTheme)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`${t('toggle-theme')}: ${currentTheme}`}
      aria-pressed={isDarkTheme}
      data-theme={currentTheme}
      data-next-theme={nextTheme}
      title={`${t('toggle-theme')}: ${currentTheme}`}
      className="group border-outline bg-surface text-foreground hover:border-primary hover:text-primary focus-visible:ring-primary/50 theme-transition inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:outline-none"
    >
      <Sun
        size={24}
        aria-hidden
        className={cn(styles.icon, styles.sun, 'text-accent')}
      />
      <Moon
        size={24}
        aria-hidden
        className={cn(styles.icon, styles.moon, 'text-accent')}
      />
    </button>
  )
}
