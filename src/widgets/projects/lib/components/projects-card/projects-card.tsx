'use client'

import Image from 'next/image'
import Tags from '@/shared/ui/tags'
import Button from '@/shared/ui/button'
import { ProjectCardProps } from '../../types'

export default function ProjectCard({ project, handleOpen }: ProjectCardProps) {
  return (
    <article
      onClick={() => handleOpen(project)}
      className="group relative flex flex-col rounded-xl border border-zinc-200 bg-zinc-50/40 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          width={520}
          height={180}
          className="h-44 w-full object-cover transition group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="mt-4 text-xl md:text-2xl font-semibold text-primary-contrast">
        {project.title}
      </h3>

      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
        {project.excerpt}
      </p>

      <Tags items={project.tags} />

      <div className="mt-5 flex gap-3">
        <Button text="Детальніше" onClick={() => handleOpen(project)} />
      </div>
    </article>
  )
}
