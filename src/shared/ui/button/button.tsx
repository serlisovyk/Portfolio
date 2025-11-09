import { ButtonProps } from './types'

export default function Button({
  text,
  type = 'button',
  onClick,
  AriaExpanded,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-expanded={AriaExpanded}
      className={`inline-flex items-center gap-2 rounded-md border-2 border-secondary px-5 py-3 text-md cursor-pointer hover:bg-primary-contrast hover:text-primary transition-colors ${className}`}
    >
      {text}
    </button>
  )
}
