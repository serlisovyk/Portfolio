import { SectionHeadingProps } from './types'

export default function SectionHeading({
  children,
  className = '',
}: SectionHeadingProps) {
  return (
    <h2
      className={`flex justify-center gap-3 text-3xl font-bold md:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
