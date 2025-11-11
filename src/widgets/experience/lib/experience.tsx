import Image from 'next/image'
import Link from 'next/link'
import { EXPERIENCE_ITEMS } from './constants'

export default function Experience() {
  return (
    <section id="experience" className="pb-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
          Experience
        </h2>

        <div className="relative grid gap-x-8">
          <div
            aria-hidden="true"
            className="row-span-full h-full w-px bg-zinc-200 dark:bg-zinc-800"
          />

          <ol className="col-span-3 contents">
            {EXPERIENCE_ITEMS.map((item) => (
              <li key={item.id} className="contents">
                <aside className="col-1 flex flex-col items-end gap-3 text-right text-xs">
                  <time className="mb-2 whitespace-nowrap text-lg text-secondary">
                    {item.time}
                  </time>
                  <Link
                    href={item.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Image
                      src={item.company.logo}
                      alt={item.company.name}
                      width={160}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                </aside>

                <div className="col-2 relative flex justify-center">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-4 w-4 -translate-x-[7px] rounded-full bg-current ring-4 ring-background"
                  />
                </div>

                <div className="col-3 space-y-3.5">
                  <h3 className="mb-2 text-xl font-semibold">{item.role}</h3>
                  <div className="mb-3 whitespace-nowrap text-lg text-secondary">
                    {item.state}
                  </div>
                  <p className="leading-relaxed">{item.text}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-default rounded-full bg-secondary px-3 py-1.5 text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
