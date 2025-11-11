import { ButtonProps } from './types'

export default function Button({
  text,
  variant = 'primary',
  type = 'button',
  onClick,
  AriaExpanded,
  className = '',
}: ButtonProps) {
  const buttonVariant = {
    primary:
      'hover:bg-primary-contrast focus:bg-primary-contrast hover:text-primary focus:text-primary',
    secondary:
      'bg-secondary text-white hover:bg-primary focus:bg-primary hover:text-primary-contrast focus:text-primary-contrast',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-expanded={AriaExpanded}
      className={`${buttonVariant[variant]} ${className} inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 cursor-pointer border border-secondary focus:outline-none transition-colors duration-300`}
    >
      {text}
    </button>
  )
}
