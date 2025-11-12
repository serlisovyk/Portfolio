import Image from 'next/image'
import Link from 'next/link'
import { EXPERIENCE_ITEMS } from './constants'

export default function Experience() {
  return (
    <section id="experience" className="pb-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
          Experience
        </h2>

        <ol className="space-y-12">
          {EXPERIENCE_ITEMS.map((item) => (
            <li key={item.id} className="md:flex md:items-stretch md:gap-8">
              <aside className="hidden w-48 shrink-0 md:block">
                <div className="flex h-full flex-col items-end gap-3">
                  <time className="mb-2 whitespace-nowrap text-lg text-[#2c7df8]">
                    {item.time}
                  </time>

                  <Link
                    href={item.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.company.logo}
                      alt={item.company.name}
                      width={210}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                </div>
              </aside>

              <div className="relative hidden h-full w-8 shrink-0 md:block">
                <div className="absolute inset-y-0 left-1/2 w-px h-100 -translate-x-1/2 dark:bg-zinc-800" />
                <span className="absolute left-1/2 top-5 h-6 w-6 -translate-x-1/2 rounded-full bg-current ring-6 ring-primary" />
              </div>

              <div className="relative flex-1 border-l pl-6 md:border-0 md:pl-0">
                <span className="absolute left-0 top-1 h-6 w-6 -translate-x-1/2 rounded-full bg-current ring-6 ring-primary md:hidden" />

                <div className="mb-3 flex items-center gap-5 md:hidden">
                  <time className="whitespace-nowrap text-[#2c7df8]">
                    {item.time}
                  </time>

                  <Image
                    src={item.company.logo}
                    alt={item.company.name}
                    width={110}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </div>

                <h3 className="mb-1 text-xl font-semibold md:text-2xl">
                  {item.role}
                </h3>

                <div className="mb-3 whitespace-nowrap text-secondary text-xl">
                  {item.state}
                </div>

                <p className="text-base leading-relaxed md:text-lg">{item.text}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="cursor-default rounded-full bg-secondary px-3 py-1.5 text-sm text-white md:text-base"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
