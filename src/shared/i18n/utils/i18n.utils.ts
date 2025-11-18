import { RootLayoutParams } from '@/shared/types'
import { hasLocale } from 'next-intl'
import { routing } from '../routing'

export async function getCurrentLocale(params: Promise<RootLayoutParams>) {
  const { locale } = await params

  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
}
