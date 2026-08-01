import { useTranslations } from 'next-intl'
import { IoPerson } from 'react-icons/io5'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'

export default function About() {
  const t = useTranslations('common')

  return (
    <section id="about" className="px-4 pb-20 md:px-10 md:pb-35 lg:pb-50">
      <div className="flex flex-col items-center justify-center">
        <SectionHeading className="mb-5 items-center justify-start">
          <IoPerson /> {t('about')}
        </SectionHeading>
        <p className="text-muted mb-5 max-w-4xl text-center text-lg md:text-xl">
          {t('about-text')}
        </p>
        <Socials />
        <Button text={t('my-resume')} className="mt-5" />
      </div>
    </section>
  )
}
