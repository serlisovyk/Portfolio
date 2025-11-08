import { ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
  params: Promise<RootLayoutParams>
}

interface RootLayoutParams {
  locale: string
}
