export interface ButtonProps {
  text: string
  type?: ButtonType
  onClick?: () => void
  AriaExpanded?: boolean
  className?: string
}

type ButtonType = 'button' | 'submit'
