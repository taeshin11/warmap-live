import type { Metadata } from 'next'
import EventPanel from '@/components/EventPanel/EventPanel'
import ConflictMapWrapper from '@/components/Map/ConflictMapWrapper'
import { conflicts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'WarMap Live — Interactive Global Conflict Map',
  description: 'Track active wars and conflicts worldwide with our interactive live map. Real-time updates on Ukraine, Gaza, Sudan, Myanmar and more.',
  openGraph: {
    title: 'WarMap Live — Interactive Global Conflict Map',
    description: 'Track active wars and conflicts worldwide with our interactive live map.',
    url: 'https://warmap.live',
    siteName: 'WarMap Live',
    type: 'website',
  },
}

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const activeConflicts = conflicts.filter(c => c.status === 'active')

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-800">Live Global Conflict Map</h1>
            <p className="text-xs text-slate-500">
              Tracking <strong className="text-slate-700">{activeConflicts.length}</strong> active conflicts worldwide
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-600 opacity-75"></span>
              Critical
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-orange-500 opacity-75"></span>
              High
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-75"></span>
              Medium
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-600 opacity-75"></span>
              Low
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
