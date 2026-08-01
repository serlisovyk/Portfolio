import { cn } from '@/shared/utils'
import { BUTTON_VARIANTS } from './constants'
import { ButtonProps } from './types'

export default function Button({
  text,
  variant = 'primary',
  type = 'button',
  onClick,
  AriaExpanded,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-expanded={AriaExpanded}
      className={cn(
        BUTTON_VARIANTS[variant],
        'focus-visible:ring-primary/50 focus-visible:ring-offset-background inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-medium transition duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
    >
      {text}
    </button>
  )
}
