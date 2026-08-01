import { LOCALE_VALUES } from '@/shared/i18n'

export function normalizeSiteUrl(url: string) {
  const localePathPattern = new RegExp(`/(${LOCALE_VALUES.join('|')})$`)

  return url.trim().replace(/\/+$/, '').replace(localePathPattern, '')
}
