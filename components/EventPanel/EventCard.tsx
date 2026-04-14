import { ConflictEvent } from '@/lib/data'

const severityConfig: Record<string, { badge: string; bar: string; label: string }> = {
  critical: {
    badge: 'bg-red-500/10 text-red-600 ring-1 ring-red-500/20',
    bar: 'bg-red-500',
    label: 'Critical',
  },
  high: {
    badge: 'bg-orange-500/10 text-orange-600 ring-1 ring-orange-500/20',
    bar: 'bg-orange-500',
    label: 'High',
  },
  medium: {
    badge: 'bg-yellow-500/10 text-yellow-700 ring-1 ring-yellow-500/20',
    bar: 'bg-yellow-500',
    label: 'Medium',
  },
  low: {
    badge: 'bg-green-500/10 text-green-600 ring-1 ring-green-500/20',
    bar: 'bg-green-500',
    label: 'Low',
  },
}

interface EventCardProps {
  event: ConflictEvent
}

export default function EventCard({ event }: EventCardProps) {
  const config = severityConfig[event.severity] ?? severityConfig.medium

  return (
    <article className="px-3 py-3 bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
      <div className="flex items-start gap-2">
        {/* Left severity bar */}
        <div className={`w-1 min-h-[44px] rounded-full flex-shrink-0 mt-0.5 ${config.bar}`}></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`inline-flex items-center text-xs px-1.5 py-0.5 rounded font-semibold ${config.badge}`}>
              {config.label}
            </span>
            <span className="text-xs text-slate-400">{event.date}</span>
          </div>
          <h4 className="text-sm font-semibold text-slate-800 leading-tight group-hover:text-red-600 transition-colors line-clamp-2 mb-1">
            {event.title}
          </h4>
          <p className="text-xs text-slate-500 line-clamp-2 mb-2">{event.summary}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">{event.region}</span>
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-red-500 transition-colors font-medium"
            >
              {event.source} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
