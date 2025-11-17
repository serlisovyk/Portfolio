import { ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
  params: Promise<RootLayoutParams>
}

export interface RootLayoutParams {
  locale: string
}
