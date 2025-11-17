import Header from '@/widgets/header'
import Intro from '@/widgets/intro'
import Skills from '@/widgets/skills'
import Experience from '@/widgets/experience'
import Projects from '@/widgets/projects'
import About from '@/widgets/about'
import Footer from '@/widgets/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}
