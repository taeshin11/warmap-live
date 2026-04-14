import type { Metadata } from 'next'
import Link from 'next/link'
import AdInContent from '@/components/Ads/AdInContent'
import { getConflictBySlug, getEventsByConflict } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Gaza War Map — Live Conflict Updates 2026 | WarMap Live',
  description: 'Interactive Gaza war map tracking Israeli military operations and humanitarian situation. Live updates on the Israel-Hamas conflict with verified news.',
  keywords: ['gaza map', 'gaza war map', 'israel hamas map', 'gaza conflict map', 'israel gaza 2026'],
  openGraph: {
    title: 'Gaza War Map — Live Conflict Updates 2026',
    description: 'Interactive map tracking the Israel-Gaza war with daily updates and humanitarian data.',
    url: 'https://warmap.live/gaza-war-map',
    siteName: 'WarMap Live',
    images: [{ url: '/og/gaza-war-map.png', width: 1200, height: 630 }],
    type: 'website'
  },
  alternates: {
    canonical: 'https://warmap.live/gaza-war-map',
    languages: {
      'en': 'https://warmap.live/gaza-war-map',
      'ko': 'https://warmap.live/ko/gaza-war-map',
      'ja': 'https://warmap.live/ja/gaza-war-map',
      'zh': 'https://warmap.live/zh/gaza-war-map',
      'ar': 'https://warmap.live/gaza-war-map',
    }
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Gaza War Map — Live Conflict Updates 2026',
  description: 'Interactive Gaza conflict map with real-time updates',
  url: 'https://warmap.live/gaza-war-map',
  dateModified: new Date().toISOString(),
  publisher: {
    '@type': 'Organization',
    name: 'WarMap Live',
    url: 'https://warmap.live'
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warmap.live' },
      { '@type': 'ListItem', position: 2, name: 'Gaza War Map', item: 'https://warmap.live/gaza-war-map' }
    ]
  }
}

export default function GazaWarMapPage() {
  const events = getEventsByConflict('israel-hamas')

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
          <span className="text-slate-800">Gaza War Map</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-800 to-red-800 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">LIVE</span>
            <span className="text-slate-300 text-sm">Updated: April 14, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Gaza War Map</h1>
          <p className="text-slate-200 text-lg leading-relaxed max-w-2xl">
            Live interactive map of the Israel-Gaza conflict. Track military operations, humanitarian corridors, and the latest verified updates from Gaza.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-red-600">45,000+</p>
            <p className="text-xs text-slate-500 mt-1">Palestinian Deaths</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-orange-600">2.3M</p>
            <p className="text-xs text-slate-500 mt-1">Displaced</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-yellow-600">560</p>
            <p className="text-xs text-slate-500 mt-1">Days of War</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-700">90%</p>
            <p className="text-xs text-slate-500 mt-1">Buildings Damaged</p>
          </div>
        </div>

        <AdInContent />

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Gaza Map: Israel-Hamas War Situation (April 2026)</h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            The Israel-Gaza war, which began following the Hamas attacks on October 7, 2023 that killed approximately 1,200 Israelis, has entered its second year of intense military operations. The Gaza Strip, a 365 square kilometer territory home to 2.3 million Palestinians, has experienced unprecedented destruction with over 90% of buildings damaged or destroyed according to satellite assessments.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            As of April 2026, Israeli Defense Forces continue ground operations in Gaza, particularly in the Jabalia refugee camp in northern Gaza. Rafah in the south has been the site of major IDF operations. The war has resulted in over 45,000 Palestinian deaths according to the Gaza Health Ministry, while Israel continues to hold 101 hostages taken during the October 7 attacks.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">Key Areas on the Gaza War Map</h3>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Jabalia (North Gaza):</strong>
                <span className="text-slate-600"> Ongoing Israeli ground operations in the refugee camp. Humanitarian access severely restricted. Multiple hospitals non-operational.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Gaza City:</strong>
                <span className="text-slate-600"> Largely destroyed. Sporadic IDF operations continue. No functioning hospitals in the area. Famine conditions reported by WFP.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Deir al-Balah (Central Gaza):</strong>
                <span className="text-slate-600"> Main humanitarian hub. Nasser Hospital partially functioning. Overcrowded displacement camps with 1M+ displaced.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Rafah (South Gaza):</strong>
                <span className="text-slate-600"> Post-IDF operations. Kerem Shalom crossing primary entry point for limited humanitarian aid. Periodic border closures.</span>
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Humanitarian Crisis</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            The UN has declared Gaza&apos;s humanitarian situation the worst since the conflict began. The World Food Programme warns of famine in northern Gaza. Over 2.3 million Palestinians are displaced, with most living in makeshift shelters or severely damaged buildings. Access to clean water, food, and medicine remains critically limited.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Ceasefire Negotiations</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            Indirect ceasefire talks mediated by Qatar and Egypt, with US involvement, have continued throughout 2025 and into 2026. Multiple proposed frameworks for hostage-prisoner exchanges have been discussed but no lasting ceasefire has been achieved. The International Court of Justice has ordered Israel to take measures to prevent genocide in Gaza.
          </p>

          <p className="text-slate-600 leading-relaxed">
            This Gaza war map is updated daily with verified reports from Al Jazeera, Reuters, BBC, UN OCHA, and WFP. Track the latest developments in the Israel-Hamas conflict on WarMap Live.
          </p>
        </div>

        {/* Recent Events */}
        {events.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Latest Gaza War Updates</h2>
            <div className="space-y-3">
              {events.slice(0, 5).map(event => (
                <div key={event.id} className="border-l-4 border-red-500 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded">{event.date}</span>
                    <span className="text-xs text-slate-500">{event.time}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{event.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{event.summary}</p>
                  <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                    Source: {event.source} →
                  </a>
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
