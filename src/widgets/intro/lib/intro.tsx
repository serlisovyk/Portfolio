import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { HiOutlineMapPin } from 'react-icons/hi2'
import Socials from '@/features/socials'
import TextType from '@/shared/ui/text-type'
import Button from '@/shared/ui/button'
import { INTRO_TYPING_TEXTS } from './constants'
import styles from './intro.module.css'

export default function Intro() {
  const t = useTranslations('common')

  return (
    <section className="text-foreground px-4 pt-10 pb-30 md:pt-30 md:pb-45 lg:pb-60">
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row xl:gap-30">
        <div className="text-foreground max-w-xl">
          <div className="mb-5 text-2xl leading-snug sm:mb-6 sm:text-5xl">
            <h1>{t('greeting')}</h1>
            <TextType
              text={INTRO_TYPING_TEXTS}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              as="span"
              cursorCharacter="|"
              className={styles.heroGradient}
            />
          </div>
          <p className="text-muted mb-5 text-lg sm:mb-8 sm:text-xl">
            {t('intro-topic')}
          </p>
          <div className="mb-5 flex flex-col justify-between gap-5 sm:mb-8 md:flex-row">
            <Socials />
            <div className="flex items-center gap-2">
              <HiOutlineMapPin size={28} className="text-accent" />
              <span className="text-muted text-lg sm:text-xl">{t('address')}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button text={t('my-resume')} />
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
