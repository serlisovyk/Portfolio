'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Project } from './types'
import { PROJECTS } from './constants'
import ProjectCard from './components/projects-card'
import ProjectModal from './components/projects-modal'

export default function Projects() {
  const t = useTranslations('common')

  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="pb-40">
      <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
        <span className="font-normal">{t('pet')}</span> {t('projects')}
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} handleOpen={setActive} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
