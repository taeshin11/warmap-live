import { ConflictEvent } from '@/lib/data'

const severityConfig: Record<string, { badge: string; dot: string }> = {
  critical: { badge: 'bg-red-100 text-red-700 border border-red-200', dot: 'bg-red-500' },
  high: { badge: 'bg-orange-100 text-orange-700 border border-orange-200', dot: 'bg-orange-500' },
  medium: { badge: 'bg-yellow-100 text-yellow-700 border border-yellow-200', dot: 'bg-yellow-500' },
  low: { badge: 'bg-green-100 text-green-700 border border-green-200', dot: 'bg-green-500' },
}

interface EventCardProps {
  event: ConflictEvent
}

export default function EventCard({ event }: EventCardProps) {
  const config = severityConfig[event.severity] ?? severityConfig.medium

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.badge}`}>
          {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
        </span>
        <span className="text-xs text-slate-400 whitespace-nowrap">{event.date}</span>
      </div>

      <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
        {event.title}
      </h3>

      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-2">
        {event.summary}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
          {event.region}
        </span>
        <a
          href={event.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {event.source} →
        </a>
      </div>
    </div>
  )
}
