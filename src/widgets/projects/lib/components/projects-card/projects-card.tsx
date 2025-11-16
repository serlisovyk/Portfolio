'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Tags from '@/shared/ui/tags'
import { ProjectCardProps } from '../../types'

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('common')

  return (
    <article className="flex h-full flex-col rounded-2xl border border-outline bg-surface p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4 rounded-xl">
        <Image
          src={project.image.src}
          alt={t(project.image.alt)}
          width={960}
          height={320}
          className="aspect-video h-80 object-cover rounded-md"
        />
      </div>

      <div className="flex flex-1 flex-col text-foreground">
        <h3 className="mb-2 text-xl font-semibold md:text-2xl">
          {project.title}
        </h3>

        <p className="mb-3 text-muted">{t(project.text)}</p>

        <div className="mt-auto pt-4">
          <Tags items={project.tags} />

          <div className="mt-6 flex items-center gap-3">
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-outline px-4 py-2 text-foreground transition duration-300 hover:border-primary hover:text-primary"
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
                className="rounded-md px-4 py-2 btn-gradient text-white transition duration-300 hover:opacity-90"
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
