'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Button from '@/shared/ui/button'
import { SKILLS_ITEMS } from './constants'

export default function Skills() {
  const t = useTranslations('Home')

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const items = isExpanded ? SKILLS_ITEMS : SKILLS_ITEMS.slice(0, 8)

  const hasMore = SKILLS_ITEMS.length > 8

  return (
    <section className="pb-30 mx-auto">
      <h2 className="text-center text-4xl mb-10">
        {t('my')} <span className="font-bold">{t('skills')}</span>
      </h2>
      <div className="grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] justify-items-center gap-x-10 gap-y-14 lg:gap-x-40 w-full mb-10">
        {items.map(({ text, icon }) => (
          <div
            key={text}
            className="flex flex-col items-center justify-center text-center gap-5 border-2 border-secondary rounded-sm p-5 w-46 h-46 cursor-default hover:text-primary hover:bg-primary-contrast transition-colors duration-300"
          >
            {icon}
            <span className="text-xl">{text}</span>
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
