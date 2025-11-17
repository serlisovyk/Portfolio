import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('common')

  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-foreground">
      <div className="border-t border-outline/80 text-center py-8 text-muted">
        &copy;<time dateTime={String(currentYear)}>{currentYear}</time>{' '}
        {t('name-surname')}
      </div>
    </footer>
  )
}
