import { useTranslations } from 'next-intl'
import { IoPerson } from 'react-icons/io5'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'

export default function About() {
  const t = useTranslations('common')

  return (
    <section id="about" className="pb-20 md:pb-35 lg:pb-50 px-4 md:px-10">
      <div className="flex flex-col justify-center items-center">
        <SectionHeading className="justify-start items-center mb-5">
          <IoPerson /> {t('about')}
        </SectionHeading>
        <p className="max-w-4xl text-lg md:text-xl text-muted text-center mb-5">
          {t('about-text')}
        </p>
        <Socials />
        <Button text={t('my-resume')} className="mt-5" />
      </div>
    </section>
  )
}
