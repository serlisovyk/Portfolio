import Link from 'next/link'
import { SOCIAL_ITEMS } from './constants'

export default function Socials() {
  return (
    <article className="inline-flex items-center gap-2 sm:gap-4">
      {SOCIAL_ITEMS.map(({ title, href, icon }) => (
        <Link
          key={title}
          href={href}
          title={title}
          aria-label={title}
          target="_blank"
          rel="noopener noreferrer"
          className="border-outline bg-surface/70 text-foreground hover:border-primary hover:bg-surface focus-visible:border-primary focus-visible:bg-surface hover:text-primary focus-visible:text-primary flex items-center justify-center rounded-sm border p-4 transition-[background-color,border-color,color,transform] duration-300 hover:scale-[1.05] focus-visible:scale-[1.05] focus-visible:outline-none"
        >
          {icon}
        </Link>
      ))}
    </article>
  )
}
