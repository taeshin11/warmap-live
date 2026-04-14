import type { Metadata } from 'next'
import Link from 'next/link'
import AdInContent from '@/components/Ads/AdInContent'
import { getConflictBySlug, getEventsByConflict } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ukraine War Map — Live Frontline Updates 2026 | WarMap Live',
  description: 'Interactive Ukraine war map with live frontline updates, conflict zones, and daily situation reports. Track the Russia-Ukraine conflict in real time.',
  keywords: ['ukraine war map', 'ukraine frontline map', 'russia ukraine conflict map', 'ukraine live map', 'ukraine war 2026'],
  openGraph: {
    title: 'Ukraine War Map — Live Frontline Updates 2026',
    description: 'Interactive map tracking the Russia-Ukraine war with daily updates.',
    url: 'https://warmap.live/ukraine-war-map',
    siteName: 'WarMap Live',
    images: [{ url: '/og/ukraine-war-map.png', width: 1200, height: 630 }],
    type: 'website'
  },
  alternates: {
    canonical: 'https://warmap.live/ukraine-war-map',
    languages: {
      'en': 'https://warmap.live/ukraine-war-map',
      'ko': 'https://warmap.live/ko/ukraine-war-map',
      'ja': 'https://warmap.live/ja/ukraine-war-map',
      'zh': 'https://warmap.live/zh/ukraine-war-map',
      'es': 'https://warmap.live/es/ukraine-war-map',
      'fr': 'https://warmap.live/fr/ukraine-war-map',
      'de': 'https://warmap.live/de/ukraine-war-map',
      'pt': 'https://warmap.live/pt/ukraine-war-map',
    }
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ukraine War Map — Live Frontline Updates 2026',
  description: 'Interactive Ukraine conflict map with real-time updates',
  url: 'https://warmap.live/ukraine-war-map',
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
      { '@type': 'ListItem', position: 2, name: 'Ukraine War Map', item: 'https://warmap.live/ukraine-war-map' }
    ]
  }
}

export default function UkraineWarMapPage() {
  const conflict = getConflictBySlug('ukraine-russia')
  const events = getEventsByConflict('ukraine-russia')

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
          <span className="text-slate-800">Ukraine War Map</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-900 to-yellow-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">LIVE</span>
            <span className="text-blue-100 text-sm">Updated: April 14, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Ukraine War Map</h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Live frontline updates tracking the Russia-Ukraine war. Interactive conflict zones, daily situation reports, and verified news from the front.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-red-600">500K+</p>
            <p className="text-xs text-slate-500 mt-1">Estimated Casualties</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-orange-600">1,000km</p>
            <p className="text-xs text-slate-500 mt-1">Active Front Line</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600">8M+</p>
            <p className="text-xs text-slate-500 mt-1">Displaced Persons</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-700">797</p>
            <p className="text-xs text-slate-500 mt-1">Days of Full-Scale War</p>
          </div>
        </div>

        <AdInContent />

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Russia-Ukraine War: Current Situation (April 2026)</h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            The Russia-Ukraine war, which began with Russia&apos;s full-scale invasion on February 24, 2022, continues to be one of the deadliest conflicts in European history since World War II. The conflict has reshaped geopolitical alliances, triggered global energy crises, and resulted in massive humanitarian displacement across Europe.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            As of April 2026, fighting continues along a front line stretching over 1,000 kilometers across eastern and southern Ukraine. Key active zones include Kharkiv Oblast in the northeast, the Donbas region including Donetsk and Luhansk, and the Zaporizhzhia direction in the south. Both sides have been engaged in attritional warfare with limited major territorial changes in recent months.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">Key Conflict Zones on the Ukraine War Map</h3>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Kharkiv Oblast:</strong>
                <span className="text-slate-600"> Heavy Russian shelling continues targeting Ukraine&apos;s second-largest city. Cross-border strikes and ground incursion attempts persist near Vovchansk.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Donetsk Front:</strong>
                <span className="text-slate-600"> Russian forces continue grinding assaults toward Pokrovsk and Kurakhove. Intense urban combat reported in multiple settlements.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Zaporizhzhia Direction:</strong>
                <span className="text-slate-600"> Drone warfare and artillery exchanges ongoing. Zaporizhzhia Nuclear Power Plant remains under IAEA monitoring amid safety concerns.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-slate-800">Sumy Region:</strong>
                <span className="text-slate-600"> Cross-border drone and artillery attacks continue. Evacuation orders remain in effect for border communities.</span>
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Ukraine War Map: Military Aid & International Support</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            Ukraine continues to receive military assistance from NATO allies including the United States, United Kingdom, Germany, and France. Key systems in use include HIMARS rocket artillery, Leopard tanks, F-16 fighter jets, and various air defense systems. The EU approved a €5 billion aid package in April 2026.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Humanitarian Situation</h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            Over 8 million Ukrainians remain displaced within Europe according to UNHCR. Infrastructure attacks have disrupted power supply to millions. The UN estimates over 500,000 total casualties on both sides since February 2022, though exact figures remain disputed. War crimes investigations are ongoing at the International Criminal Court.
          </p>

          <p className="text-slate-600 leading-relaxed">
            This Ukraine war map is updated daily using verified reports from Reuters, AP, BBC, Ukrinform, and ISW (Institute for the Study of War). Track frontline movements, air defense intercepts, and diplomatic developments in real time on WarMap Live.
          </p>
        </div>

        {/* Recent Events */}
        {events.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Latest Ukraine War Updates</h2>
            <div className="space-y-3">
              {events.slice(0, 5).map(event => (
                <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{event.date}</span>
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

        {/* CTA */}
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
