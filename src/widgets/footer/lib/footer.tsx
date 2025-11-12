import { useTranslations } from 'next-intl'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'

export default function Footer() {
  const t = useTranslations('common')

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact">
      <div className="mb-8 md:mb-20 pl-0 md:pl-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {t('lets')} <span className="font-normal">{t('talk')}</span> {t('for')}
          <br />
          {t('something-special')}
        </h2>
        <p className="max-w-lg text-lg md:text-xl mb-4">{t('footer-topic')}</p>
        <div className="flex flex-col gap-4">
          <Socials />
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button text={t('my-resume')} />
            <Button text={t('detailed-about-me')} variant="secondary" />
          </div>
        </div>
      </div>
      <div className="border-t border-secondary text-center py-8">
        &copy;<time dateTime={String(currentYear)}>{currentYear}</time>{' '}
        {t('name-surname')}
      </div>
    </footer>
  )
}
