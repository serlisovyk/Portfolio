import { TagsProps } from './types'

export default function Tags({ items }: TagsProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="border-outline bg-surface text-foreground/90 cursor-default rounded-full border px-3 py-1.5 text-sm transition-colors duration-300 md:text-base"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
