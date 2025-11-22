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
    primary: 'btn-gradient text-white hover:opacity-70',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-expanded={AriaExpanded}
      className={`${buttonVariant[variant]} ${className} inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition duration-300`}
    >
      {text}
    </button>
  )
}
