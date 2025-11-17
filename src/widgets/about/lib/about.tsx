import { useTranslations } from 'next-intl'
import Socials from '@/features/socials'
import Button from '@/shared/ui/button'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('common')

  return (
    <section id="about" className="pb-40 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 xl:gap-50">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">About me</h2>
          <p className="max-w-4xl text-lg md:text-xl text-muted mb-4">
            I’m a frontend developer who enjoys working at the intersection of design
            and engineering. I like shaping interfaces so they feel clear to users
            while the implementation stays maintainable for the team. Clean
            architecture, predictable UX and attention to detail matter to me — from
            button states to how complex forms and filters behave. <br />
            I feel comfortable both building product features and improving existing
            projects: performance optimisations, refactoring, introducing new
            components and integrating with backend services via REST APIs. I value
            good communication with the team, aligning on API contracts and shipping
            features to production together. <br /> I keep investing in my frontend
            skills through courses, practice and learning from others. I also have
            certificates and recommendations from colleagues and managers — you can
            find more details in my LinkedIn profile.
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
