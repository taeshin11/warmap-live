import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About WarMap Live — Global Conflict Tracking Dashboard',
  description: 'Learn about WarMap Live, an interactive global conflict tracking dashboard. Our mission, data sources, and methodology for tracking active wars worldwide.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 w-full">
      <nav className="text-xs text-slate-500 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">About</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-6">About WarMap Live</h1>

      <div className="prose prose-slate max-w-none space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            WarMap Live is an interactive global conflict tracking dashboard that provides a visual, at-a-glance view of active wars and conflict zones worldwide. We aggregate verified reports from trusted news sources and humanitarian organizations to help news followers, researchers, journalists, and concerned citizens understand the geographic context of ongoing conflicts.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Data Sources</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            All conflict data on WarMap Live is sourced from publicly available reports from:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex gap-2"><span className="text-blue-600 font-medium">Reuters, AP, AFP</span> — Wire service reporting</li>
            <li className="flex gap-2"><span className="text-blue-600 font-medium">UN OCHA, WFP, UNHCR</span> — Humanitarian data</li>
            <li className="flex gap-2"><span className="text-blue-600 font-medium">ACLED</span> — Armed Conflict Location & Event Data</li>
            <li className="flex gap-2"><span className="text-blue-600 font-medium">ISW</span> — Institute for the Study of War</li>
            <li className="flex gap-2"><span className="text-blue-600 font-medium">BBC, Al Jazeera</span> — Regional news coverage</li>
            <li className="flex gap-2"><span className="text-blue-600 font-medium">IAEA</span> — Nuclear safety monitoring</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Technology</h2>
          <p className="text-slate-600 leading-relaxed">
            WarMap Live is built with Next.js 15 (App Router), Leaflet.js for interactive mapping, and OpenStreetMap tiles. The site is fully static-generated for performance and deployed on Vercel. Data is updated manually from verified sources.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-amber-800 mb-2">Disclaimer</h2>
          <p className="text-amber-700 text-sm leading-relaxed">
            WarMap Live provides information for educational and informational purposes only. Casualty figures and conflict details are estimates based on available reports and may not reflect the full or current situation. We do not take political positions on any conflict. Data accuracy depends on available public reporting. Users should consult official sources for authoritative information.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          View Conflict Map →
        </Link>
      </div>
    </div>
  )
}
