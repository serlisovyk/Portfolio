import { SKILLS_ITEMS } from './constants'

export default function Skills() {
  return (
    <section className="py-30 mx-auto">
      <h2 className="text-center text-4xl mb-10">
        My <span className="font-bold">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-x-18 gap-y-10">
        {SKILLS_ITEMS.map(({ text, icon }) => (
          <div
            key={text}
            className="flex flex-col items-center justify-center text-center gap-5 border-2 border-slate-700 rounded-sm p-5 w-46 h-46 cursor-default hover:text-primary hover:bg-primary-contrast transition-colors duration-300"
          >
            {icon}
            <span className="text-xl">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
