import { getLatestEvents } from '@/lib/data'
import EventCard from './EventCard'
import AdSidebar from '@/components/Ads/AdSidebar'

export default function EventPanel() {
  const events = getLatestEvents(20)

  return (
    <aside className="flex flex-col h-full overflow-hidden bg-slate-50">
      <div className="px-4 py-3 border-b border-slate-200 bg-white">
        <h2 className="font-bold text-slate-800 text-base flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Latest Events
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">{events.length} recent updates</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-3 space-y-2">
          {events.slice(0, 10).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Ad between event groups */}
        <div className="px-3">
          <AdSidebar />
        </div>

        <div className="p-3 space-y-2">
          {events.slice(10).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </aside>
  )
}
