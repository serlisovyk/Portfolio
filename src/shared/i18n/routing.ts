import { defineRouting } from 'next-intl/routing'
import { LOCALES, LOCALE_VALUES } from './constants'

export const routing = defineRouting({
  locales: LOCALE_VALUES,
  defaultLocale: LOCALES.EN,
})
