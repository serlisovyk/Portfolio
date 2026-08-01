import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('common')

  const currentYear = String(new Date().getFullYear())

  return (
    <footer className="text-foreground">
      <div className="border-outline/80 text-muted border-t py-8 text-center">
        &copy;<time dateTime={currentYear}>{currentYear}</time> {t('name-surname')}
      </div>
    </footer>
  )
}
