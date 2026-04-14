import { MetadataRoute } from 'next'
import conflicts from '@/public/data/conflicts.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://warmap.live'
  const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt']
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, priority: 1.0, changeFrequency: 'hourly' },
    { url: `${base}/ukraine-war-map`, lastModified: now, priority: 0.9, changeFrequency: 'daily' },
    { url: `${base}/gaza-war-map`, lastModified: now, priority: 0.9, changeFrequency: 'daily' },
    { url: `${base}/middle-east-conflict-map`, lastModified: now, priority: 0.9, changeFrequency: 'daily' },
    { url: `${base}/about`, lastModified: now, priority: 0.5, changeFrequency: 'monthly' },
  ]

  const localePages: MetadataRoute.Sitemap = locales.map(locale => ({
    url: `${base}/${locale}`,
    lastModified: now,
    priority: locale === 'en' ? 1.0 : 0.8,
    changeFrequency: 'hourly' as const,
  }))

  const conflictPages: MetadataRoute.Sitemap = (conflicts as Array<{ slug: string }>).map(c => ({
    url: `${base}/en/conflict/${c.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'daily' as const,
  }))

  return [...staticPages, ...localePages, ...conflictPages]
}
