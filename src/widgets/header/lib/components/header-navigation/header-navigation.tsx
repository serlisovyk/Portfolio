'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HEADER_NAV_LINKS } from '../../constants'

export default function HeaderNavigation() {
  const t = useTranslations('Home')

  return (
    <nav>
      <ul className="flex items-center gap-3 sm:gap-5">
        {HEADER_NAV_LINKS.map(({ text, href }) => (
          <li key={text}>
            <Link
              href={href}
              className="whitespace-nowrap transition-opacity hover:opacity-80"
            >
              {t(text)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
