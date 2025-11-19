import { Locale } from '../i18n/constants'

export interface BaseMetadata {
  title: string
  description: string
  siteName: string
}

export type MetaByLocale = Record<Locale, BaseMetadata>
