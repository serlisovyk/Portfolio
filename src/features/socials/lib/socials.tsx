import Link from 'next/link'
import { SOCIAL_ITEMS } from './constants'

export default function Socials() {
  return (
    <article className="inline-flex items-center gap-4">
      {SOCIAL_ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-primary-contrast rounded-sm p-4 hover:bg-primary-contrast hover:text-primary hover:scale-[1.2] transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </article>
  )
}
