'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/shared/i18n'
import { setCookie } from '@/shared/utils'
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
      setCookie(`NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`)
    })
  }

  return (
    <div
      className="inline-flex items-center rounded-md border border-outline bg-surface/70 text-foreground shadow-sm theme-transition"
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
            className={[
              'px-3.5 py-2.5 text-sm font-semibold leading-none cursor-pointer rounded-none first:rounded-l-md last:rounded-r-md theme-transition duration-300 focus-visible:outline-none focus-visible:z-10',
              activeLanguage
                ? 'btn-gradient text-white hover:opacity-90 shadow-[0_0_0_2px_rgba(124,58,237,0.35)] focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.85)]'
                : 'bg-transparent hover:bg-primary/20 hover:text-foreground shadow-[0_0_0_0_rgba(0,0,0,0)] focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.65)] focus-visible:bg-primary/20',
            ].join(' ')}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
