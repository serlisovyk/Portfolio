import Image from 'next/image'
import TextType from '@/shared/ui/text-type'
import { INTRO_TYPING_TEXTS } from './constants/intro.constants'

export default function Intro() {
  return (
    <section className="py-30">
      <div className="flex flex-col md:flex-row justify-center items-center gap-30">
        <div className="text-5xl">
          <h1>Hello I’am Serhii Lisovyk.</h1>
          <TextType
            text={INTRO_TYPING_TEXTS}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            as="span"
            cursorCharacter="|"
          />
          <br />
          <span> Based In Dnipro / Ukraine.</span>
        </div>
        <div>
          <Image
            src="/profile.jpg"
            alt="My profile photo"
            width={500}
            height={500}
            loading="eager"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
