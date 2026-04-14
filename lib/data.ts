import conflictsData from '@/public/data/conflicts.json'
import eventsData from '@/public/data/events.json'
import countriesData from '@/public/data/countries.json'

export interface Conflict {
  id: string
  name: string
  slug: string
  status: string
  intensity: string
  lat: number
  lng: number
  countries: string[]
  region: string
  startDate: string
  casualties: {
    estimate: string
    source: string
    lastUpdated: string
  }
  summary: string
  tags: string[]
  color: string
  radius: number
}

export interface ConflictEvent {
  id: string
  conflictId: string
  title: string
  date: string
  time: string
  severity: string
  region: string
  source: string
  sourceUrl: string
  summary: string
  tags: string[]
}

export interface Country {
  code: string
  name: string
  slug: string
  conflictIds: string[]
  riskLevel: string
  population: number
  capital: string
  region: string
  lat: number
  lng: number
}

export const conflicts: Conflict[] = conflictsData as Conflict[]
export const events: ConflictEvent[] = eventsData as ConflictEvent[]
export const countries: Country[] = countriesData as Country[]

export function getConflictBySlug(slug: string): Conflict | undefined {
  return conflicts.find((c) => c.slug === slug)
}

export function getConflictById(id: string): Conflict | undefined {
  return conflicts.find((c) => c.id === id)
}

export function getEventsByConflict(conflictId: string): ConflictEvent[] {
  return events.filter((e) => e.conflictId === conflictId)
}

export function getLatestEvents(count: number = 20): ConflictEvent[] {
  return [...events]
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`).getTime()
      const dateB = new Date(`${b.date} ${b.time}`).getTime()
      return dateB - dateA
    })
    .slice(0, count)
}

export function getEventsBySeverity(severity: string): ConflictEvent[] {
  return events.filter((e) => e.severity === severity)
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((c) => c.code === code)
}

export function getActiveConflicts(): Conflict[] {
  return conflicts.filter((c) => c.status === 'active')
}

export function getConflictsByIntensity(intensity: string): Conflict[] {
  return conflicts.filter((c) => c.intensity === intensity)
}

export const intensityColors: Record<string, string> = {
  critical: '#dc2626',
  high: '#ea580c',
  medium: '#d97706',
  low: '#16a34a',
}

export const severityBadgeClasses: Record<string, string> = {
  critical: 'bg-red-100 text-red-700 border-red-200',
  high: 'bg-orange-100 text-orange-700 border-orange-200',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  low: 'bg-green-100 text-green-700 border-green-200',
}
