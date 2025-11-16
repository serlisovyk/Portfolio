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
          className="flex items-center justify-center rounded-sm border border-outline bg-surface/70 p-4 text-foreground hover:border-primary hover:bg-surface focus-visible:border-primary focus-visible:bg-surface hover:text-primary focus-visible:text-primary hover:scale-[1.05] focus-visible:scale-[1.05] focus-visible:outline-none transition duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </article>
  )
}
