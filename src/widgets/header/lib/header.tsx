import LanguageSwitcher from '@/features/language-switcher'
import ThemeToggle from '@/features/theme-toggle'
import HeaderNavigation from './components/header-navigation'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-5 p-4 sm:py-6 sm:px-10">
      <HeaderNavigation />
      <div className="flex items-center gap-10">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
