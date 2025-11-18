import { useTranslations } from 'next-intl'
import { IoPerson } from 'react-icons/io5'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('common')

  return (
    <section id="about" className="pb-40 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 xl:gap-50">
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
        <div className="hidden lg:block">
          <Image
            src="/full-profile.jpg"
            alt={t('profile-photo')}
            width={400}
            height={200}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
