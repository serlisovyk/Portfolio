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
              className="group text-muted hover:text-primary focus-visible:text-primary theme-transition relative inline-block whitespace-nowrap focus-visible:outline-none"
            >
              {t(text)}
              <span
                aria-hidden
                className="bg-primary absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
