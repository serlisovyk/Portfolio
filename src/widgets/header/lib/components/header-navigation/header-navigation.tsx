'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HEADER_NAV_LINKS } from '../../constants'

export default function HeaderNavigation() {
  const t = useTranslations('common')

  return (
    <nav>
      <ul className="flex items-center gap-3 sm:gap-5">
        {HEADER_NAV_LINKS.map(({ text, href }) => (
          <li key={text}>
            <Link
              href={href}
              className="group relative inline-block whitespace-nowrap text-muted hover:text-primary focus-visible:text-primary focus-visible:outline-none transition duration-300"
            >
              {t(text)}
              <span
                aria-hidden
                className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-primary origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
