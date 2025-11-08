import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
  params: Promise<RootLayoutParams>
}

interface RootLayoutParams {
  locale: string
}

export interface ProvidersProps {
  children: ReactNode
}

interface BasicTextTypeProps {
  className?: string
  showCursor?: boolean
  hideCursorWhileTyping?: boolean
  cursorCharacter?: string | React.ReactNode
  cursorBlinkDuration?: number
  cursorClassName?: string
  text: string | string[]
  as?: ElementType
  typingSpeed?: number
  initialDelay?: number
  pauseDuration?: number
  deletingSpeed?: number
  loop?: boolean
  textColors?: string[]
  variableSpeed?: { min: number; max: number }
  onSentenceComplete?: (sentence: string, index: number) => void
  startOnVisible?: boolean
  reverseMode?: boolean
}

export type TextTypeProps = BasicTextTypeProps & HTMLAttributes<HTMLElement>
