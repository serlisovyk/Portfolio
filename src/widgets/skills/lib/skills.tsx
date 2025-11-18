'use client'

import { useTranslations } from 'next-intl'
import { LiaToolsSolid } from "react-icons/lia";
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
    <section id="skills" className="pb-60 mx-auto text-foreground">
      <SectionHeading className="text-center mb-10">
        <LiaToolsSolid /> <span className="font-normal">{t('my')}</span> {t('skills')}
      </SectionHeading>
      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] justify-items-center gap-x-10 gap-y-14 lg:gap-x-20 w-full mb-10"
      >
        {items.map(({ text, icon }) => (
          <div
            key={text}
            data-skill-card
            className="flex flex-col items-center justify-center text-center gap-5 rounded-md border border-outline bg-surface p-5 w-46 h-46 cursor-default hover:border-primary hover:bg-surface/80 transition-colors duration-300"
          >
            {icon}
            <span className="text-xl text-muted">{text}</span>
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
