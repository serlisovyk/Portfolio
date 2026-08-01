import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { IoTime } from 'react-icons/io5'
import Tags from '@/shared/ui/tags'
import SectionHeading from '@/shared/ui/section-heading'
import { EXPERIENCE_ITEMS } from './constants'

export default function Experience() {
  const t = useTranslations('common')

  return (
    <section
      id="experience"
      className="text-foreground scroll-mt-24 pb-30 md:pb-45 lg:pb-60"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 items-center text-center">
          <IoTime /> {t('experience')}
        </SectionHeading>

        <ol className="space-y-12">
          {EXPERIENCE_ITEMS.map((item) => (
            <li key={item.id} className="md:flex md:items-stretch md:gap-8">
              <aside className="hidden w-48 shrink-0 md:block">
                <div className="text-muted flex h-full flex-col items-end gap-3">
                  <time className="mb-2 text-lg whitespace-nowrap">{item.time}</time>

                  <Link
                    href={item.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.company.logo}
                      alt={item.company.name}
                      width={192}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                </div>
              </aside>

              <div className="relative hidden h-full w-8 shrink-0 md:block">
                <div className="bg-outline absolute inset-y-0 left-1/2 h-100 w-px -translate-x-1/2" />
                <span className="bg-primary ring-background absolute top-5 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full ring-4" />
              </div>

              <div className="border-outline relative flex-1 border-l pl-6 md:border-0 md:pl-0">
                <span className="bg-primary ring-background absolute top-1 left-0 h-6 w-6 -translate-x-1/2 rounded-full ring-4 md:hidden" />

                <div className="mb-3 flex items-center gap-5 md:hidden">
                  <time className="text-muted whitespace-nowrap">{item.time}</time>

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

                <div className="text-muted mb-3 text-xl whitespace-nowrap">
                  {item.state}
                </div>

                <p className="text-foreground/90 text-base leading-relaxed md:text-lg">
                  {t(item.text)}
                </p>

                <Tags items={item.technologies} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
