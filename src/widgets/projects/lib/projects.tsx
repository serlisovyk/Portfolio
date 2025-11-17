'use client'

import { useTranslations } from 'next-intl'
import ProjectCard from './components/projects-card'
import { PROJECTS } from './constants'

export default function Projects() {
  const t = useTranslations('common')

  return (
    <section id="projects" className="pb-25 md:pb-50 px-4 text-foreground">
      <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
        <span className="font-normal">{t('pet')}</span> {t('projects')}
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
