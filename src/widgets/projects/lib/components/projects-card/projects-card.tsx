'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Tags from '@/shared/ui/tags'
import { ProjectCardProps } from '../../types'

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('common')

  return (
    <article className="border-outline bg-surface flex h-full flex-col rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="border-outline/40 bg-surface mb-5 overflow-hidden rounded-xl border">
        <div className="relative aspect-video">
          <Image
            src={project.image.src}
            alt={t(project.image.alt)}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </div>

      <div className="text-foreground flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-semibold md:text-2xl">{project.title}</h3>

        <p className="text-muted mb-3">{t(project.text)}</p>

        <div className="mt-auto pt-4">
          <Tags items={project.tags} />

          <div className="mt-6 flex items-center gap-3">
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary/40 bg-primary/10 theme-transition focus-visible:ring-primary/50 focus-visible:ring-offset-background inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                GitHub
              </Link>
            )}
            {project.demo === 'soon' ? (
              <span className="text-muted">{t('project-demo-soon')}</span>
            ) : (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient focus-visible:ring-primary/50 focus-visible:ring-offset-background rounded-md px-4 py-2 text-white transition duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
