'use client'

import { useTranslations } from 'next-intl'
import { FaLaptop } from 'react-icons/fa6'
import SectionHeading from '@/shared/ui/section-heading'
import ProjectCard from './components/projects-card'
import { PROJECTS } from './constants'

export default function Projects() {
  const t = useTranslations('common')

  return (
    <section id="projects" className="pb-50 px-4 text-foreground">
      <SectionHeading className="text-center mb-10">
        <FaLaptop /> <span className="font-normal">{t('pet')}</span> {t('projects')}
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
