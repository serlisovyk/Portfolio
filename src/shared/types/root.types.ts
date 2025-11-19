import { ReactNode } from 'react'
import { Locale } from '../i18n/constants'

export interface RootLayoutProps {
  children: ReactNode
  params: Promise<RootLayoutParams>
}

export interface RootLayoutParams {
  locale: string
}

export interface generateMetadataProps {
  params: Promise<generateMetadataParams>
}

export interface generateMetadataParams {
  locale: Locale
}
