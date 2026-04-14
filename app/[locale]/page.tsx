import type { Metadata } from 'next'
import EventPanel from '@/components/EventPanel/EventPanel'
import ConflictMapWrapper from '@/components/Map/ConflictMapWrapper'
import { conflicts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'WarMap Live | Real-Time Conflict Intelligence',
  description: 'Real-time interactive map tracking active war zones, frontlines, and military incidents worldwide',
  keywords: 'war map, conflict map, battle tracker, military incidents, war zones, frontline map',
}

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const activeConflicts = conflicts.filter(c => c.status === 'active')

  return (
    <div className="flex flex-col flex-1">
      {/* Hero bar above map */}
      <div className="bg-slate-900 text-white px-4 py-3 border-b border-slate-700">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="font-bold text-base sm:text-lg tracking-tight">Live Global Conflict Map</h1>
              <p className="text-slate-400 text-xs">
                Tracking <span className="text-red-400 font-semibold">{activeConflicts.length}</span> active conflicts worldwide
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Critical
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> High
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Medium
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Low
            </span>
          </div>
        </div>
      </div>

      {/* Main content: Map + Events Panel */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        {/* Map */}
        <div className="flex-1 min-h-[300px] md:min-h-0 relative">
          <ConflictMapWrapper />
        </div>

        {/* Events Panel */}
        <div className="md:w-[380px] xl:w-[420px] flex-shrink-0 border-t md:border-t-0 md:border-l border-slate-200 overflow-hidden">
          <EventPanel />
        </div>
      </div>
    </div>
  )
}
