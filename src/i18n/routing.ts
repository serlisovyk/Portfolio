import { defineRouting } from 'next-intl/routing'
import { LOCALES } from '@/constants'

export const routing = defineRouting({
  locales: [LOCALES.EN, LOCALES.UK, LOCALES.RU],
  defaultLocale: LOCALES.EN,
})
