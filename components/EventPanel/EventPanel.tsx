import { getLatestEvents } from '@/lib/data'
import EventCard from './EventCard'
import AdSidebar from '@/components/Ads/AdSidebar'

export default function EventPanel() {
  const events = getLatestEvents(20)

  return (
    <aside className="flex flex-col h-full overflow-hidden bg-slate-50">
      <div className="px-4 py-3 border-b border-slate-700 bg-slate-800 text-white">
        <h2 className="font-bold text-base flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Latest Events
          <span className="ml-auto text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full font-normal">{events.length}</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Real-time conflict updates</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        <div className="divide-y divide-slate-100">
          {events.slice(0, 10).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Ad between event groups */}
        <div className="px-3 py-2">
          <AdSidebar />
        </div>

        <div className="divide-y divide-slate-100">
          {events.slice(10).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </aside>
  )
}
