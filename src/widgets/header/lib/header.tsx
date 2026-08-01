import LanguageSwitcher from '@/features/language-switcher'
import ThemeToggle from '@/features/theme-toggle'
import HeaderNavigation from './components/header-navigation'

export default function Header() {
  return (
    <header className="bg-background/90 text-foreground border-outline/70 theme-transition flex w-full flex-col items-center justify-between gap-5 border-b p-4 sm:px-10 sm:py-6 md:fixed md:top-0 md:left-0 md:z-50 md:flex-row">
      <HeaderNavigation />
      <div className="flex items-center gap-10">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
