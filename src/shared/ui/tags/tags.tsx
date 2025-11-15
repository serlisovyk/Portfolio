import { TagsProps } from './types'

export default function Tags({ items }: TagsProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="cursor-default rounded-full bg-accent px-3 py-1.5 text-sm text-white md:text-base"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
