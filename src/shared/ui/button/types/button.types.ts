export interface ButtonProps {
  text: string
  variant?: ButtonVariant
  type?: ButtonType
  onClick?: () => void
  AriaExpanded?: boolean
  className?: string
}

type ButtonVariant = 'primary'

type ButtonType = 'button' | 'submit'
