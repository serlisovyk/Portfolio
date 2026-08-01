import { useTranslations } from 'next-intl'
import { IoCodeSlash } from 'react-icons/io5'
import SectionHeading from '@/shared/ui/section-heading'
import ProjectCard from './components/projects-card'
import { PROJECTS } from './constants'

export default function Projects() {
  const t = useTranslations('common')

  return (
    <section
      id="projects"
      className="text-foreground scroll-mt-24 px-4 pb-20 md:pb-35 lg:pb-50"
    >
      <SectionHeading className="mb-10 items-center text-center">
        <IoCodeSlash /> <span className="font-normal">{t('pet')}</span>
        {t('projects')}
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
