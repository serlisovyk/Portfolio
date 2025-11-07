'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTransition } from 'react'

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'uk', label: 'UA' },
  { code: 'ru', label: 'RU' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const setLocale = (next: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: next })

      globalThis.document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000; SameSite=Lax`

      try {
        localStorage.setItem('locale', next) // чисто для твоих хуков/логики
      } catch {}
    })
  }

  return (
    <div
      className="inline-flex items-center rounded-2xl border border-slate-700 bg-slate-800 p-1 shadow-sm"
      role="tablist"
      aria-label="Language switcher"
    >
      {LOCALES.map(({ code, label }) => {
        const active = code === locale
        return (
          <button
            key={code}
            role="tab"
            aria-selected={active}
            disabled={isPending}
            onClick={() => setLocale(code)}
            className={[
              'px-3 py-1.5 text-sm font-semibold leading-none rounded-xl transition',
              'focus:outline-none focus-visible:ring focus-visible:ring-blue-400/60',
              active
                ? 'bg-blue-500 text-white shadow'
                : 'text-slate-200 hover:bg-slate-700/60',
            ].join(' ')}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
