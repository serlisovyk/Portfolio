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

  const t = useTranslations('Home')

  const [isPending, startTransition] = useTransition()

  const setLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
      setCookie(`NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`)
    })
  }

  return (
    <div
      className="inline-flex items-center bg-transparent shadow-sm rounded-md border border-slate-700 overflow-hidden"
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
              'px-3.5 py-2.5 text-sm font-semibold leading-none transition cursor-pointer rounded-none first:rounded-l-md last:rounded-r-md',
              activeLanguage
                ? 'bg-secondary text-white shadow transition-all duration-300'
                : 'bg-transparent hover:bg-slate-700/20 transition-all duration-300',
            ].join(' ')}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
