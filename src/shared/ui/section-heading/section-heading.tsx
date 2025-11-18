import { SectionHeadingProps } from './types'

export default function SectionHeading({
  children,
  className = '',
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl md:text-4xl font-bold flex gap-3 justify-center ${className}`}
    >
      {children}
    </h2>
  )
}
