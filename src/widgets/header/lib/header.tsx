import LanguageSwitcher from '@/features/language-switcher'
import HeaderNavigation from './components/header-navigation'
import ThemeToggle from '@/features/theme-toggle'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-5 bg-primary py-6 px-10 fixed w-full z-998">
      <HeaderNavigation />
      <div className="flex items-center gap-10">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
