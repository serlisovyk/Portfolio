'use client'

import LanguageSwitcher from '@/features/language-switcher'
import HeaderNavigation from './components/header-navigation'
import ThemeToggle from '@/features/theme-toggle'

export default function Header() {
  return (
    <header className="flex w-full flex-col md:flex-row justify-between items-center gap-5 p-4 sm:py-6 sm:px-10 bg-background/90 text-foreground border-b border-outline/70">
      <HeaderNavigation />
      <div className="flex items-center gap-10">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
