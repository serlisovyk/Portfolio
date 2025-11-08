'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HEADER_NAV_LINKS } from '@/constants'

export default function HeaderNavigation() {
  const t = useTranslations('Home')

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {HEADER_NAV_LINKS.map((link) => (
          <li key={link}>
            <Link href="#!" className="transition-colors hover:opacity-80">
              {t(link)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
