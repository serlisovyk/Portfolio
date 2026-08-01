'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import {
  usePathname,
  useRouter,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
} from '@/shared/i18n'
import { cn, setCookie } from '@/shared/utils'
import { LANGUAGE_SWITCHER_OPTIONS } from './constants'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const t = useTranslations('common')

  const [isPending, startTransition] = useTransition()

  const setLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
      setCookie(LOCALE_COOKIE_NAME, nextLocale, { maxAge: LOCALE_COOKIE_MAX_AGE })
    })
  }

  return (
    <div
      className="border-outline bg-surface/70 text-foreground theme-transition inline-flex items-center rounded-md border shadow-sm"
      role="tablist"
      aria-label={t('language-switcher')}
    >
      {LANGUAGE_SWITCHER_OPTIONS.map(({ code, label }) => {
        const activeLanguage = code === locale

        return (
          <button
            key={code}
            role="tab"
            aria-selected={activeLanguage}
            disabled={isPending}
            onClick={() => setLocale(code)}
            className={cn(
              'theme-transition cursor-pointer rounded-none px-3.5 py-2.5 text-sm leading-none font-semibold duration-300 first:rounded-l-md last:rounded-r-md focus-visible:z-10 focus-visible:outline-none',
              activeLanguage
                ? 'btn-gradient text-white shadow-[0_0_0_2px_rgba(124,58,237,0.35)] hover:opacity-90 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.85)]'
                : 'hover:bg-primary/20 hover:text-foreground focus-visible:bg-primary/20 bg-transparent shadow-[0_0_0_0_rgba(0,0,0,0)] focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.65)]',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
