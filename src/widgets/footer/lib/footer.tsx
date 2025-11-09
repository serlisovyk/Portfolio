import Socials from '@/features/socials'
import Button from '@/shared/ui/button'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 md:mb-20 pl-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let’s <span className="font-normal">talk</span> for <br />
          Something special
        </h2>
        <p className="max-w-lg text-lg md:text-xl mb-4">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <div className="flex flex-col items-start gap-4">
          <Socials />
          <Button text="My resume" className="mt-4" />
        </div>
      </div>
      <div className="border-t border-secondary text-center py-4">
        @2025 Serhii Lisovyk
      </div>
    </footer>
  )
}
