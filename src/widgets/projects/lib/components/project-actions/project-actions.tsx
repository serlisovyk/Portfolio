'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ProjectActionsProps } from '../../types'

export default function ProjectActions({ demo, repository }: ProjectActionsProps) {
  const t = useTranslations('common')

  return (
    <div className="mt-6 flex items-center gap-3">
      {repository && (
        <Link
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className="border-primary/40 bg-primary/10 theme-transition focus-visible:ring-primary/50 focus-visible:ring-offset-background inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          GitHub
        </Link>
      )}

      {demo === 'soon' ? (
        <span className="text-muted">{t('project-demo-soon')}</span>
      ) : (
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient focus-visible:ring-primary/50 focus-visible:ring-offset-background rounded-md px-4 py-2 text-white transition duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Demo
        </Link>
      )}
    </div>
  )
}
