import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IoPerson } from 'react-icons/io5'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import SectionHeading from '@/shared/ui/section-heading'

export default function About() {
  const t = useTranslations('common')

  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 pb-20 md:px-10 md:pb-35 lg:pb-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:gap-14">
        <SectionHeading className="items-center text-center">
          <IoPerson /> {t('about')}
        </SectionHeading>

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="order-2 flex max-w-3xl flex-col items-center lg:order-1 lg:max-w-[720px] lg:items-start">
            <p className="text-muted mb-5 text-center text-lg md:text-xl lg:text-left">
              {t('about-text')}
            </p>
            <Socials />
            <Button text={t('my-resume')} className="mt-5" />
          </div>

          <Image
            src="/profile.jpg"
            alt=""
            width={500}
            height={500}
            sizes="(max-width: 640px) calc(100vw - 2rem), 500px"
            aria-hidden
            className="order-1 h-auto w-full max-w-[500px] shrink-0 rounded-full lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
