'use client'

import { useTranslations } from 'next-intl'
import { FiSun as Sun, FiMoon as Moon } from 'react-icons/fi'
import { useTheme } from '@/shared/theme'

export default function ThemeToggle() {
  const t = useTranslations('common')

  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('toggle-theme')}
      className="group border-outline bg-surface text-foreground hover:border-primary hover:text-primary focus-visible:ring-primary/50 theme-transition inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:outline-none"
    >
      {theme === 'dark' ? (
        <Sun
          size={24}
          className="text-accent theme-transition group-active:scale-95"
        />
      ) : (
        <Moon
          size={24}
          className="text-accent theme-transition group-active:scale-95"
        />
      )}
    </button>
  )
}
