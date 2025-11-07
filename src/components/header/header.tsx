'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HEADER_NAV_LINKS } from '@/constants'
import LanguageSwitcher from '../language-switcher'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../theme-toggle'), { ssr: false })

export default function Header() {
  const t = useTranslations('Home')

  return (
    <header className="flex justify-between items-center gap-2 py-6">
      <nav>
        <ul className="flex items-center gap-5 pl-10">
          {HEADER_NAV_LINKS.map((link) => (
            <li key={link}>
              <Link href="#!" className="transition-colors hover:opacity-80">
                {t(link)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
