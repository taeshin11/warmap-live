import type { Metadata } from 'next'
import Link from 'next/link'
import AdInContent from '@/components/Ads/AdInContent'
import { getEventsByConflict, conflicts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Middle East Conflict Map — Live Updates 2026 | WarMap Live',
  description: 'Interactive Middle East conflict map covering Israel-Gaza, Yemen, Syria, and regional tensions. Track all active conflicts in the Middle East with live updates.',
  keywords: ['middle east conflict map', 'middle east war map', 'israel conflict', 'yemen war map', 'middle east 2026'],
  openGraph: {
    title: 'Middle East Conflict Map — Live Updates 2026',
    description: 'Interactive map of all active Middle East conflicts including Israel-Gaza and Yemen.',
    url: 'https://warmap.live/middle-east-conflict-map',
    siteName: 'WarMap Live',
    images: [{ url: '/og/middle-east-conflict-map.png', width: 1200, height: 630 }],
    type: 'website'
  },
  alternates: {
    canonical: 'https://warmap.live/middle-east-conflict-map',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Middle East Conflict Map — Live Updates 2026',
  description: 'Interactive map of active conflicts in the Middle East with real-time updates',
  url: 'https://warmap.live/middle-east-conflict-map',
  dateModified: new Date().toISOString(),
  publisher: {
    '@type': 'Organization',
    name: 'WarMap Live',
    url: 'https://warmap.live'
  }
}

export default function MiddleEastConflictMapPage() {
  const middleEastConflicts = conflicts.filter(c =>
    c.region === 'Middle East'
  )
  const gazoEvents = getEventsByConflict('israel-hamas').slice(0, 3)
  const yemenEvents = getEventsByConflict('yemen-conflict').slice(0, 2)
  const recentEvents = [...gazoEvents, ...yemenEvents]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Middle East Conflict Map</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-amber-800 to-orange-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">LIVE</span>
            <span className="text-amber-100 text-sm">Updated: April 14, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Middle East Conflict Map</h1>
          <p className="text-amber-100 text-lg leading-relaxed max-w-2xl">
            Comprehensive interactive map tracking all active conflicts and tensions across the Middle East. From Gaza to Yemen, monitor the region&apos;s most critical crisis zones.
          </p>
        </div>

        {/* Active Conflicts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {middleEastConflicts.map(conflict => (
            <Link
              key={conflict.id}
              href={`/en/conflict/${conflict.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-slate-800">{conflict.name}</h3>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full capitalize"
                  style={{ backgroundColor: conflict.color + '20', color: conflict.color }}
                >
                  {conflict.intensity}
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">{conflict.summary}</p>
              <p className="text-xs text-slate-400 mt-2">Casualties: {conflict.casualties.estimate}</p>
            </Link>
          ))}
        </div>

        <AdInContent />

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Middle East Conflict Map: Regional Overview (April 2026)</h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            The Middle East remains one of the world&apos;s most volatile regions in 2026, with multiple interconnected conflicts reshaping the geopolitical landscape. The Israel-Gaza war, now in its second year, has triggered regional escalation involving Lebanon, Yemen, and Iran. Understanding the Middle East conflict map requires tracking these interlinked crises simultaneously.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">Israel-Gaza War</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            The Israel-Hamas conflict that began October 7, 2023 continues to dominate the regional conflict map. With over 45,000 Palestinian deaths and 2.3 million displaced, Gaza faces unprecedented humanitarian collapse. Ceasefire negotiations mediated by Qatar continue while military operations persist across all of Gaza&apos;s five governorates.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Yemen War and Red Sea Crisis</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            Yemen&apos;s Houthi movement, emboldened by the Gaza conflict, has launched hundreds of attacks on commercial shipping in the Red Sea, disrupting global trade routes. US and UK military strikes continue targeting Houthi infrastructure. The underlying Yemeni civil war between Houthi forces and the Saudi-backed government remains unresolved after a decade of conflict with over 377,000 casualties.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">West Bank Violence</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            The West Bank has experienced a dramatic increase in violence since October 2023. Israeli military raids, settler violence, and Palestinian attacks have resulted in over 900 Palestinian deaths in the West Bank alone. Large-scale IDF operations in Jenin and Tulkarm refugee camps have displaced tens of thousands of civilians.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Regional Escalation Risk</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            Iran&apos;s nuclear program advances continue to raise fears of a broader regional war. Direct exchanges between Israel and Iran in April 2024 represented the first direct military confrontation between the two countries. Israeli strikes on Iranian nuclear facilities remain a persistent threat on the Middle East conflict map.
          </p>

          <p className="text-slate-600 leading-relaxed">
            This Middle East conflict map is updated daily with verified intelligence from Reuters, AP, Al Jazeera, and regional news sources. Monitor all active conflict zones, military movements, and diplomatic developments across the Middle East on WarMap Live.
          </p>
        </div>

        {/* Recent Events */}
        {recentEvents.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Latest Middle East Updates</h2>
            <div className="space-y-3">
              {recentEvents.map(event => (
                <div key={event.id} className="border-l-4 border-orange-500 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded">{event.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{event.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{event.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            View Full World Conflict Map →
          </Link>
        </div>
      </div>
    </>
  )
}
