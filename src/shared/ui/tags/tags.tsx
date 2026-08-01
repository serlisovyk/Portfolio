import Tag from './tag'
import { TagsProps } from './types'

export default function Tags({ items }: TagsProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} label={item} />
      ))}
    </div>
  )
}
