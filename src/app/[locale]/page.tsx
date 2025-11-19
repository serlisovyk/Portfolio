import Header from '@/widgets/header'
import Intro from '@/widgets/intro'
import Skills from '@/widgets/skills'
import Experience from '@/widgets/experience'
import Projects from '@/widgets/projects'
import About from '@/widgets/about'
import Footer from '@/widgets/footer'

export default function Home() {
  return (
    <div className="overflow-hidden min-h-full">
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
