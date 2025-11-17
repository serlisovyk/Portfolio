'use client'

import { useTranslations } from 'next-intl'
import { FiSun as Sun, FiMoon as Moon } from 'react-icons/fi'
import { useTheme } from '@/shared/providers/theme.provider'

export default function ThemeToggle() {
  const t = useTranslations('common')

  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('toggle-theme')}
      className="group inline-flex h-12 w-12 items-center justify-center cursor-pointer rounded-full border border-outline bg-surface text-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors duration-300"
    >
      {theme === 'dark' ? (
        <Sun size={24} className="group-active:scale-95 text-accent" />
      ) : (
        <Moon size={24} className="group-active:scale-95 text-accent" />
      )}
    </button>
  )
}
