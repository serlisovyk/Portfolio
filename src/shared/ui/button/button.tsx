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
    primary: 'bg-accent hover:shadow-glow hover:translate-y-[-1px]',
    secondary:
      'bg-accent-2 bg-linear-to-r from-accent to-accent2 text-accentContrast hover:translate-y-[-1px] hover:bg-accent/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-expanded={AriaExpanded}
      className={`${buttonVariant[variant]} ${className} inline-flex text-white border-accent/40 items-center justify-center gap-2 rounded-md px-5 py-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus:outline-none focus-visible:ring-accent/60 transition duration-300`}
    >
      {text}
    </button>
  )
}
