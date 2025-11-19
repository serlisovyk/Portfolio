import { useTranslations } from 'next-intl'
import { IoPerson } from 'react-icons/io5'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'
import AboutStats from './components/about-stats'

export default function About() {
  const t = useTranslations('common')

  return (
    <section id="about" className="pb-40 px-4 md:px-10">
      <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-10 xl:gap-40">
        <div>
          <SectionHeading className="mb-4 justify-start">
            <IoPerson /> {t('about')}
          </SectionHeading>
          <p className="max-w-4xl text-lg md:text-xl text-muted mb-4">
            {t('about-text')}
          </p>
          <div className="flex flex-col gap-4">
            <Socials />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button text={t('my-resume')} />
            </div>
          </div>
        </div>
        <AboutStats />
      </div>
    </section>
  )
}
