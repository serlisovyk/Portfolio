'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Tags from '@/shared/ui/tags'
import { ProjectCardProps } from '../../types'

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('common')

  return (
    <article className="flex flex-col rounded-2xl h-full border border-accent/30 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="rounded-xl mb-4">
        <Image
          src={project.image.src}
          alt={t(project.image.alt)}
          width={960}
          height={320}
          className="aspect-video h-80 object-cover rounded-md"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-accent-2">
          {project.title}
        </h3>

        <p className="mb-3">{t(project.text)}</p>

        <div className="mt-auto pt-4">
          <Tags items={project.tags} />

          <div className="flex items-center gap-3 mt-6">
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-primary-contrast hover:text-white border border-accent hover:bg-accent transition duration-300"
              >
                GitHub
              </Link>
            )}
            {project.demo === 'soon' ? (
              <span>{t('project-demo-soon')}</span>
            ) : (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-primary-contrast hover:text-white border border-accent hover:bg-accent transition duration-300"
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
