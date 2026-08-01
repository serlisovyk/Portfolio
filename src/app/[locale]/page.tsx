import { setRequestLocale } from 'next-intl/server'
import Header from '@/widgets/header'
import Intro from '@/widgets/intro'
import Skills from '@/widgets/skills'
import Experience from '@/widgets/experience'
import Projects from '@/widgets/projects'
import About from '@/widgets/about'
import Footer from '@/widgets/footer'
import { getCurrentLocale } from '@/shared/i18n'
import { LocalePageProps } from '@/shared/types'

export default async function Home({ params }: LocalePageProps) {
  const currentLocale = await getCurrentLocale(params)

  setRequestLocale(currentLocale)

  return (
    <div className="min-h-full overflow-hidden">
      <Header />
      <main className="md:pt-32">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}
