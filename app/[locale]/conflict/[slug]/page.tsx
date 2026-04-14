import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getConflictBySlug, getEventsByConflict, conflicts } from '@/lib/data'
import EventCard from '@/components/EventPanel/EventCard'
import AdInContent from '@/components/Ads/AdInContent'

interface ConflictPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return conflicts.map(conflict => ({
    slug: conflict.slug,
  }))
}

export async function generateMetadata({ params }: ConflictPageProps): Promise<Metadata> {
  const { slug } = await params
  const conflict = getConflictBySlug(slug)

  if (!conflict) {
    return { title: 'Conflict Not Found | WarMap Live' }
  }

  return {
    title: `${conflict.name} — Live Updates & Map | WarMap Live`,
    description: `Track the ${conflict.name} with live updates, casualty data, and interactive conflict map. ${conflict.summary.slice(0, 120)}`,
    openGraph: {
      title: `${conflict.name} — Live Updates`,
      description: conflict.summary,
      type: 'article',
    },
  }
}

export default async function ConflictPage({ params }: ConflictPageProps) {
  const { locale, slug } = await params
  const conflict = getConflictBySlug(slug)

  if (!conflict) {
    notFound()
  }

  const events = getEventsByConflict(conflict.id)

  const intensityClasses: Record<string, string> = {
    critical: 'bg-red-100 text-red-700 border-red-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200',
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${conflict.name} — Live Updates`,
    description: conflict.summary,
    url: `https://warmap.live/${locale}/conflict/${conflict.slug}`,
    dateModified: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'WarMap Live',
      url: 'https://warmap.live'
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 mb-4">
        <Link href={`/${locale}`} className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{conflict.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm">
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <h1 className="text-2xl font-bold text-slate-900 flex-1">{conflict.name}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${intensityClasses[conflict.intensity] ?? intensityClasses.medium}`}>
            {conflict.intensity.charAt(0).toUpperCase() + conflict.intensity.slice(1)}
          </span>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">{conflict.summary}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">Region</p>
            <p className="text-sm font-semibold text-slate-800">{conflict.region}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">Start Date</p>
            <p className="text-sm font-semibold text-slate-800">{conflict.startDate}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">Casualties</p>
            <p className="text-sm font-semibold text-slate-800">{conflict.casualties.estimate}</p>
            <p className="text-xs text-slate-400">{conflict.casualties.source}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">Status</p>
            <p className="text-sm font-semibold text-slate-800 capitalize">{conflict.status}</p>
          </div>
        </div>
      </div>

      <AdInContent />

      {/* Events */}
      {events.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Events</h2>
          <div className="space-y-3">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="mt-6">
        <Link
          href={`/${locale}`}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to World Map
        </Link>
      </div>
    </div>
  )
}
