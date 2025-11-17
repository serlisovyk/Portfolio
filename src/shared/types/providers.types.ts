import { ReactNode } from 'react'
import { Theme } from '../providers/theme.config'

export interface ProvidersProps {
  children: ReactNode
  initialTheme: Theme
}
