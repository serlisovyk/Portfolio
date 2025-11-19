import { ABOUT_STATS } from '../../constants'

export default function AboutStats() {
  return (
    <div className="flex flex-wrap gap-3 max-w-sm">
      {ABOUT_STATS.map((stat) => (
        <div
          key={stat.id}
          className="text-center rounded-2xl border border-outline bg-surface p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-2">{stat.value}</h3>
          <div className="text-xs sm:text-sm uppercase tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
