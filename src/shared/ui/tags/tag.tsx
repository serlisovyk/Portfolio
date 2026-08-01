import { TagProps } from './types'

export default function Tag({ label }: TagProps) {
  return (
    <span className="border-outline bg-surface text-foreground/90 cursor-default rounded-full border px-3 py-1.5 text-sm transition-colors duration-300 md:text-base">
      {label}
    </span>
  )
}
