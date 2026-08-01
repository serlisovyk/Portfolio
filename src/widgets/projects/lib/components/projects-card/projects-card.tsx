import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Tags from '@/shared/ui/tags'
import ProjectActions from '../project-actions'
import { ProjectCardProps } from '../../types'

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('common')

  const {
    title,
    text,
    tags,
    demo,
    repository,
    image: { src: imageSrc, alt: imageAlt },
  } = project

  return (
    <article className="border-outline bg-surface flex h-full flex-col rounded-2xl border p-4 shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="border-outline/40 bg-surface mb-5 overflow-hidden rounded-xl border">
        <div className="relative aspect-video">
          <Image
            src={imageSrc}
            alt={t(imageAlt)}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-foreground flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-semibold md:text-2xl">{title}</h3>

        <p className="text-muted mb-3">{t(text)}</p>

        <div className="mt-auto pt-4">
          <Tags items={tags} />
          <ProjectActions demo={demo} repository={repository} />
        </div>
      </div>
    </article>
  )
}
