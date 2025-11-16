import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { HiOutlineMapPin } from 'react-icons/hi2'
import Socials from '@/features/socials'
import TextType from '@/shared/ui/text-type'
import Button from '@/shared/ui/button'
import { INTRO_TYPING_TEXTS } from './constants'

export default function Intro() {
  const t = useTranslations('common')

  return (
    <section className="pt-10 pb-30 md:pt-30 md:pb-45 lg:pb-60 text-foreground">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-30">
        <div className="max-w-xl text-foreground">
          <div className="text-3xl sm:text-5xl leading-snug mb-4 sm:mb-6">
            <h1>{t('greeting')}</h1>
            <TextType
              text={INTRO_TYPING_TEXTS}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              as="span"
              cursorCharacter="|"
              className="hero-gradient"
            />
          </div>
          <p className="text-xl text-muted mb-4 sm:mb-8">{t('intro-topic')}</p>
          <div className="flex flex-col md:flex-row justify-between gap-5 mb-4 sm:mb-8">
            <Socials />
            <div className="flex items-center gap-2">
              <HiOutlineMapPin size={28} className="text-accent" />
              <span className="text-lg sm:text-xl text-muted">{t('address')}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button text={t('my-resume')} />
            <Button text={t('detailed-about-me')} variant="secondary" />
          </div>
        </div>
        <div>
          <Image
            src="/profile.jpg"
            alt={t('profile-photo')}
            width={500}
            height={500}
            className="rounded-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
