'use client'

import { useTranslations } from 'next-intl'
import { IoSettings } from 'react-icons/io5'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'
import { useSkillsAnimation } from './hooks'
import { PREVIEW_COUNT, SKILLS_ITEMS } from './constants'

export default function Skills() {
  const t = useTranslations('common')

  const { gridRef, isExpanded, toggleExpand } = useSkillsAnimation()

  const items = isExpanded ? SKILLS_ITEMS : SKILLS_ITEMS.slice(0, PREVIEW_COUNT)

  const hasMore = SKILLS_ITEMS.length > PREVIEW_COUNT

  return (
    <section id="skills" className="text-foreground mx-auto pb-30 md:pb-45 lg:pb-60">
      <SectionHeading className="mb-10 items-center text-center">
        <IoSettings /> <span className="font-normal">{t('my')}</span> {t('skills')}
      </SectionHeading>
      <div
        ref={gridRef}
        className="mb-10 grid w-full grid-cols-[repeat(1,auto)] justify-items-center gap-x-10 gap-y-14 sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] lg:gap-x-20 xl:grid-cols-[repeat(4,auto)]"
      >
        {items.map(({ text, icon }) => (
          <div
            key={text}
            data-skill-card
            className="border-outline bg-surface hover:border-primary hover:bg-surface/80 flex h-46 w-46 cursor-default flex-col items-center justify-center gap-5 rounded-md border p-5 text-center transition-colors duration-300"
          >
            {icon}
            <span className="text-muted text-xl">{text}</span>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            text={isExpanded ? t('show-less') : t('show-more')}
            onClick={toggleExpand}
            AriaExpanded={isExpanded}
          />
        </div>
      )}
    </section>
  )
}
