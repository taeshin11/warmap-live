# WarMap Live — PRD

## Overview

WarMap Live is an interactive global conflict tracking dashboard that displays active wars and conflict zones on a real-time-updated world map. It surfaces the latest 20 events in a side panel and provides country-specific SEO landing pages optimized for high-traffic conflict-related search queries.

## Target Users & Pain Points

- **News followers** who want a visual, at-a-glance view of active global conflicts without sifting through articles
- **Researchers and students** needing quick geographic context for ongoing wars
- **Journalists and analysts** seeking a fast reference tool with recent event feeds
- **Pain points**: Existing news sites are text-heavy; GIS conflict tools are too complex; no single site aggregates all active conflicts visually with SEO-friendly country pages

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Map**: Leaflet.js + OpenStreetMap (free, no API key)
- **Charts**: ECharts (lightweight, SSR-friendly)
- **i18n**: next-intl (en, ko, ja, zh, es, fr, de, pt)
- **Hosting**: Vercel (free tier, Hobby plan)
- **Server**: None needed (static JSON + API routes)
- **Data**: JSON files in `/public/data/` (manual daily update)
- **Ads**: Adsterra (banner, sidebar, in-content, mobile sticky)
- **Analytics**: Vercel Analytics (free)
- **Visitor Counter**: Vercel Edge Config + API route
- **Webhook**: Google Sheets via Apps Script web app URL

## Priority Level: HIGHEST

This is the flagship project. All architectural decisions made here should be referenced by the other 4 projects.

---

## Pages & Routes

```
/                          → Homepage: world map + right event panel
/[locale]/                 → Localized homepage (en, ko, ja, zh, es, fr, de, pt)
/ukraine-war-map           → Ukraine-specific SEO landing page
/gaza-war-map              → Gaza-specific SEO landing page
/middle-east-conflict-map  → Middle East region SEO landing page
/conflict/[slug]           → Dynamic conflict detail page
/about                     → About page
/api/visitor               → POST: increment + GET: read visitor counts
/sitemap.xml               → Auto-generated sitemap
/robots.txt                → SEO robots config
```

### Country SEO Landing Pages (Static at build time)
```
/ukraine-war-map
/gaza-war-map
/middle-east-conflict-map
/russia-ukraine-conflict
/israel-hamas-war
/sudan-conflict-map
/myanmar-civil-war
/yemen-war-map
/somalia-conflict
/sahel-conflict-map
```

---

## Data Model

### `/public/data/conflicts.json`
```json
[
  {
    "id": "ukraine-russia",
    "name": "Russia-Ukraine War",
    "slug": "ukraine-russia",
    "status": "active",
    "intensity": "high",
    "lat": 49.0,
    "lng": 31.0,
    "countries": ["UA", "RU"],
    "region": "Eastern Europe",
    "startDate": "2022-02-24",
    "casualties": {
      "estimate": "500000+",
      "source": "UN OHCHR",
      "lastUpdated": "2026-04-01"
    },
    "summary": "Full-scale Russian invasion of Ukraine ongoing since Feb 2022.",
    "tags": ["war", "invasion", "nato", "europe"],
    "color": "#ef4444",
    "radius": 120
  }
]
```

### `/public/data/events.json`
```json
[
  {
    "id": "evt-001",
    "conflictId": "ukraine-russia",
    "title": "Heavy shelling reported in Kharkiv region",
    "date": "2026-04-14",
    "time": "06:42 UTC",
    "severity": "high",
    "region": "Kharkiv, Ukraine",
    "source": "Reuters",
    "sourceUrl": "https://reuters.com/...",
    "summary": "Ukrainian forces repelled multiple assault attempts...",
    "tags": ["shelling", "ukraine", "kharkiv"]
  }
]
```

### `/public/data/countries.json`
```json
[
  {
    "code": "UA",
    "name": "Ukraine",
    "slug": "ukraine",
    "conflictIds": ["ukraine-russia"],
    "riskLevel": "critical",
    "population": 43700000,
    "capital": "Kyiv",
    "region": "Eastern Europe",
    "lat": 49.0,
    "lng": 31.0
  }
]
```

---

## Project Structure

```
warmap-live/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  ← Homepage map + events panel
│   │   └── conflict/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── ukraine-war-map/
│   │   └── page.tsx
│   ├── gaza-war-map/
│   │   └── page.tsx
│   ├── middle-east-conflict-map/
│   │   └── page.tsx
│   ├── api/
│   │   └── visitor/
│   │       └── route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Map/
│   │   ├── ConflictMap.tsx           ← Leaflet wrapper (client component)
│   │   ├── ConflictPin.tsx
│   │   └── ConflictRegion.tsx
│   ├── EventPanel/
│   │   ├── EventPanel.tsx
│   │   └── EventCard.tsx
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── Ads/
│   │   ├── AdHeader.tsx
│   │   ├── AdSidebar.tsx
│   │   ├── AdInContent.tsx
│   │   └── AdMobileSticky.tsx
│   └── VisitorCounter.tsx
├── public/
│   └── data/
│       ├── conflicts.json
│       ├── events.json
│       └── countries.json
├── messages/
│   ├── en.json
│   ├── ko.json
│   ├── ja.json
│   ├── zh.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
│   └── pt.json
├── research_history/
│   ├── milestone-01-init.md
│   ├── milestone-02-map.md
│   ├── milestone-03-events.md
│   ├── milestone-04-seo.md
│   └── milestone-05-launch.md
├── feature_list.json
├── claude-progress.txt
├── middleware.ts                     ← i18n routing + Google Sheets webhook
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Milestones & Git Push Points

### Milestone 0: Project Init & GitHub Repo
```bash
# Create GitHub repo
gh repo create warmap-live --public --description "Live Global Conflict Map & Alerts"

# Init Next.js project
npx create-next-app@latest warmap-live --typescript --tailwind --app --src-dir=false

cd warmap-live

# Install dependencies
npm install leaflet react-leaflet @types/leaflet next-intl echarts echarts-for-react

# Create folder structure
mkdir -p public/data messages components/{Map,EventPanel,Layout,Ads} research_history app/{api/visitor,'ukraine-war-map','gaza-war-map','middle-east-conflict-map'}

# Init harness files
touch feature_list.json claude-progress.txt

git add -A && git commit -m "feat: project init with Next.js 15, Tailwind, Leaflet, next-intl"
git push origin main
```

### Milestone 1: Data Layer + JSON Files
- Create `conflicts.json`, `events.json`, `countries.json` with real seed data (10+ conflicts)
- Write data utility functions in `lib/data.ts`
```bash
git add -A && git commit -m "feat: data layer - conflicts, events, countries JSON + utility functions"
git push origin main
# Log: echo "M1 complete $(date)" >> research_history/milestone-01-init.md
```

### Milestone 2: World Map Component
- Implement `ConflictMap.tsx` with Leaflet (dynamic import, SSR disabled)
- Add conflict pins with color-coded severity circles
- Add popup on pin click showing conflict summary
- Add right event panel with latest 20 events
```bash
git add -A && git commit -m "feat: interactive world map with Leaflet + OSM, conflict pins, event panel"
git push origin main
```

### Milestone 3: Layout + Ads + Visitor Counter
- Build Header, Footer, Sidebar layout
- Add Adsterra placeholder zones (4 positions)
- Implement visitor counter API route + footer display
- Connect Google Sheets webhook in middleware
```bash
git add -A && git commit -m "feat: layout, Adsterra ad zones, visitor counter, Google Sheets webhook"
git push origin main
```

### Milestone 4: i18n + Country SEO Landing Pages
- Configure next-intl with 8 languages
- Create `/ukraine-war-map`, `/gaza-war-map`, `/middle-east-conflict-map` static pages
- Add meta tags, structured data (JSON-LD), OG images
- Generate sitemap.xml and robots.txt
```bash
git add -A && git commit -m "feat: i18n (8 langs), SEO landing pages, sitemap, structured data"
git push origin main
```

### Milestone 5: QA + Deploy
- Mobile responsiveness testing (375px, 768px, 1280px)
- Lighthouse audit (target: Performance >85, SEO >95)
- Deploy to Vercel
```bash
vercel --prod
git add -A && git commit -m "feat: production deploy, QA pass, lighthouse optimized"
git push origin main
```

---

## Agent Team

### Agent 1: Frontend (Map & UI)
**Responsibilities:**
- Build ConflictMap.tsx (Leaflet, dynamic import)
- ConflictPin + ConflictRegion overlay components
- EventPanel with EventCard list
- Responsive layout (mobile-first, md: sidebar)
- Tailwind color system: `bg-slate-50` base, `bg-white` cards, subtle `shadow-sm`
- Dark mode ready (CSS variables)

**Key files:**
- `components/Map/ConflictMap.tsx`
- `components/EventPanel/EventPanel.tsx`
- `app/[locale]/page.tsx`

### Agent 2: Backend/Data
**Responsibilities:**
- Maintain and update JSON data files daily
- Build `/api/visitor/route.ts` (Edge Runtime)
- Google Sheets webhook integration in middleware
- ISR revalidation config (revalidate: 3600)
- Data validation with Zod

**Key files:**
- `public/data/*.json`
- `app/api/visitor/route.ts`
- `middleware.ts`
- `lib/data.ts`

### Agent 3: SEO/Content
**Responsibilities:**
- Write keyword-optimized content for each SEO landing page
- Implement JSON-LD structured data (Article, BreadcrumbList)
- Generate sitemap.xml covering all static + dynamic pages
- Configure robots.txt
- OG image generation (Next.js ImageResponse)
- Hreflang tags for all 8 languages

**Key files:**
- `app/ukraine-war-map/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/opengraph-image.tsx`

### Agent 4: QA
**Responsibilities:**
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile viewport testing (iPhone SE, iPhone 14, iPad, Desktop)
- Adsterra zone verification (zones visible, no layout shift)
- Visitor counter accuracy check
- Google Sheets webhook delivery confirmation
- Lighthouse CI: Performance ≥85, Accessibility ≥90, SEO ≥95, Best Practices ≥90
- Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms

---

## Harness Files

### `feature_list.json`
```json
{
  "project": "warmap-live",
  "version": "1.0.0",
  "lastUpdated": "2026-04-14",
  "features": [
    { "id": "F01", "name": "Interactive World Map", "status": "pending", "agent": "frontend", "priority": "p0" },
    { "id": "F02", "name": "Conflict Pins + Regions", "status": "pending", "agent": "frontend", "priority": "p0" },
    { "id": "F03", "name": "Latest Events Panel (20 items)", "status": "pending", "agent": "frontend", "priority": "p0" },
    { "id": "F04", "name": "Visitor Counter (footer)", "status": "pending", "agent": "backend", "priority": "p1" },
    { "id": "F05", "name": "Google Sheets Webhook", "status": "pending", "agent": "backend", "priority": "p1" },
    { "id": "F06", "name": "Adsterra Ad Zones (4)", "status": "pending", "agent": "frontend", "priority": "p1" },
    { "id": "F07", "name": "i18n (8 languages)", "status": "pending", "agent": "seo", "priority": "p1" },
    { "id": "F08", "name": "Ukraine War Map SEO Page", "status": "pending", "agent": "seo", "priority": "p0" },
    { "id": "F09", "name": "Gaza War Map SEO Page", "status": "pending", "agent": "seo", "priority": "p0" },
    { "id": "F10", "name": "Middle East Conflict Map SEO Page", "status": "pending", "agent": "seo", "priority": "p0" },
    { "id": "F11", "name": "Sitemap + Robots.txt", "status": "pending", "agent": "seo", "priority": "p1" },
    { "id": "F12", "name": "Structured Data (JSON-LD)", "status": "pending", "agent": "seo", "priority": "p1" },
    { "id": "F13", "name": "Mobile Sticky Ad", "status": "pending", "agent": "frontend", "priority": "p2" },
    { "id": "F14", "name": "Conflict Detail Pages", "status": "pending", "agent": "frontend", "priority": "p2" },
    { "id": "F15", "name": "Lighthouse QA Pass", "status": "pending", "agent": "qa", "priority": "p1" }
  ],
  "milestones": [
    { "id": "M0", "name": "Init + GitHub", "features": [], "gitPush": true },
    { "id": "M1", "name": "Data Layer", "features": ["F01-data"], "gitPush": true },
    { "id": "M2", "name": "Map + Events", "features": ["F01", "F02", "F03"], "gitPush": true },
    { "id": "M3", "name": "Layout + Ads + Counter", "features": ["F04", "F05", "F06", "F13"], "gitPush": true },
    { "id": "M4", "name": "i18n + SEO", "features": ["F07", "F08", "F09", "F10", "F11", "F12"], "gitPush": true },
    { "id": "M5", "name": "QA + Deploy", "features": ["F14", "F15"], "gitPush": true }
  ]
}
```

### `claude-progress.txt`
```
# WarMap Live — Claude Session Progress Log
# Format: [TIMESTAMP] [AGENT] [MILESTONE] [ACTION] [STATUS]

SESSION START ROUTINE:
1. Read this file top-to-bottom
2. Read feature_list.json → identify pending features
3. Read research_history/ latest .md file
4. Resume from last incomplete milestone
5. On milestone complete → write research_history/milestone-XX-name.md
6. git add -A && git commit -m "..." && git push

[2026-04-14 00:00] [INIT] [M0] Project PRD written. Awaiting implementation.
```

---

## Ads Integration (Adsterra)

### Strategy
Adsterra is integrated before Google AdSense. User must sign up at adsterra.com and get zone keys from their dashboard. The following 4 zones are reserved in the layout:

### Zone Placements

**1. Header Banner (728x90 desktop / 320x50 mobile)**
```tsx
// components/Ads/AdHeader.tsx
'use client'
export default function AdHeader() {
  return (
    <div className="w-full flex justify-center py-2 bg-slate-100">
      {/* ADSTERRA ZONE: Header Banner */}
      {/* Replace with: <script ... atOptions={{ key: 'YOUR_KEY' }} /> */}
      <div className="w-[728px] h-[90px] bg-slate-200 flex items-center justify-center text-slate-400 text-sm rounded">
        [Adsterra Header Banner 728x90]
      </div>
    </div>
  )
}
```

**2. Sidebar Ad (300x250)**
```tsx
// components/Ads/AdSidebar.tsx
'use client'
export default function AdSidebar() {
  return (
    <div className="sticky top-4">
      {/* ADSTERRA ZONE: Sidebar 300x250 */}
      <div className="w-[300px] h-[250px] bg-slate-200 flex items-center justify-center text-slate-400 text-sm rounded">
        [Adsterra Sidebar 300x250]
      </div>
    </div>
  )
}
```

**3. In-Content Ad (468x60 or native)**
```tsx
// components/Ads/AdInContent.tsx
'use client'
export default function AdInContent() {
  return (
    <div className="my-6 flex justify-center">
      {/* ADSTERRA ZONE: In-Content */}
      <div className="w-[468px] h-[60px] bg-slate-200 flex items-center justify-center text-slate-400 text-sm rounded">
        [Adsterra In-Content 468x60]
      </div>
    </div>
  )
}
```

**4. Mobile Sticky Bottom (320x50)**
```tsx
// components/Ads/AdMobileSticky.tsx
'use client'
export default function AdMobileSticky() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 md:hidden bg-white/90 backdrop-blur-sm py-1 shadow-lg">
      {/* ADSTERRA ZONE: Mobile Sticky */}
      <div className="w-[320px] h-[50px] bg-slate-200 flex items-center justify-center text-slate-400 text-xs rounded">
        [Adsterra Mobile Sticky 320x50]
      </div>
    </div>
  )
}
```

### Activating Real Adsterra Zones
When user provides Adsterra keys, replace placeholder divs with:
```html
<script type="text/javascript">
  atOptions = {
    'key' : 'YOUR_ADSTERRA_ZONE_KEY',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/YOUR_KEY/invoke.js"></script>
```

---

## Google Sheets Webhook

### Setup Steps
1. Create a Google Sheet with columns: `timestamp, page, country, userAgent, referrer, sessionId`
2. In Sheet → Extensions → Apps Script, paste the following:

```javascript
// Google Apps Script (paste in Apps Script editor)
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(data.timestamp),
    data.page,
    data.country,
    data.userAgent,
    data.referrer,
    data.sessionId
  ]);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as Web App → Execute as: Me → Who has access: Anyone
4. Copy the Web App URL → add to Vercel env as `GOOGLE_SHEETS_WEBHOOK_URL`

### Next.js Middleware Integration
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Fire-and-forget to Google Sheets
  if (SHEETS_URL && request.method === 'GET') {
    const payload = {
      timestamp: new Date().toISOString(),
      page: request.nextUrl.pathname,
      country: request.geo?.country ?? 'unknown',
      userAgent: request.headers.get('user-agent') ?? '',
      referrer: request.headers.get('referer') ?? '',
      sessionId: request.cookies.get('session_id')?.value ?? crypto.randomUUID()
    }
    // Non-blocking
    fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {})
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
```

---

## Visitor Counter

### API Route (Edge Runtime)
```typescript
// app/api/visitor/route.ts
import { NextRequest, NextResponse } from 'next/server'

// Uses Vercel Edge Config for persistence
// Fallback: simple in-memory (resets on cold start)
let totalVisitors = 0
let todayVisitors = 0
let lastResetDate = new Date().toDateString()

export const runtime = 'edge'

export async function GET() {
  const today = new Date().toDateString()
  if (today !== lastResetDate) {
    todayVisitors = 0
    lastResetDate = today
  }
  return NextResponse.json({ total: totalVisitors, today: todayVisitors })
}

export async function POST() {
  const today = new Date().toDateString()
  if (today !== lastResetDate) {
    todayVisitors = 0
    lastResetDate = today
  }
  totalVisitors++
  todayVisitors++
  return NextResponse.json({ total: totalVisitors, today: todayVisitors })
}
```

### Footer Display Component
```tsx
// components/VisitorCounter.tsx
'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [counts, setCounts] = useState({ today: 0, total: 0 })

  useEffect(() => {
    fetch('/api/visitor', { method: 'POST' })
      .then(r => r.json())
      .then(setCounts)
  }, [])

  return (
    <div className="text-xs text-slate-400 flex gap-4">
      <span>Today: {counts.today.toLocaleString()}</span>
      <span>Total: {counts.total.toLocaleString()}</span>
    </div>
  )
}
```

---

## SEO Strategy

### Primary Keywords
| Page | Primary Keyword | Monthly Volume (est.) |
|------|----------------|----------------------|
| / | war map live | 40,000+ |
| /ukraine-war-map | ukraine war map | 200,000+ |
| /gaza-war-map | gaza map | 150,000+ |
| /middle-east-conflict-map | middle east conflict map | 50,000+ |
| /conflict/ukraine-russia | ukraine russia war | 300,000+ |

### Meta Tags Template
```tsx
// app/ukraine-war-map/page.tsx
export const metadata = {
  title: 'Ukraine War Map — Live Frontline Updates | WarMap Live',
  description: 'Interactive Ukraine war map with live frontline updates, conflict zones, and daily situation reports. Track the Russia-Ukraine conflict in real time.',
  keywords: ['ukraine war map', 'ukraine frontline map', 'russia ukraine conflict map', 'ukraine live map'],
  openGraph: {
    title: 'Ukraine War Map — Live Frontline Updates',
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
      'zh': 'https://warmap.live/zh/ukraine-war-map'
    }
  }
}
```

### JSON-LD Structured Data
```tsx
// In each SEO page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ukraine War Map — Live Frontline Updates',
  description: 'Interactive Ukraine conflict map with real-time updates',
  url: 'https://warmap.live/ukraine-war-map',
  dateModified: new Date().toISOString(),
  publisher: {
    '@type': 'Organization',
    name: 'WarMap Live',
    url: 'https://warmap.live'
  }
}

// In <head>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### Sitemap
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import conflicts from '@/public/data/conflicts.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://warmap.live'
  const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt']

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/ukraine-war-map`, priority: 0.9 },
    { url: `${base}/gaza-war-map`, priority: 0.9 },
    { url: `${base}/middle-east-conflict-map`, priority: 0.9 },
  ]

  const conflictPages = conflicts.map(c => ({
    url: `${base}/conflict/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8
  }))

  return [...staticPages, ...conflictPages]
}
```

---

## i18n Setup

### Configuration
```typescript
// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()
export default withNextIntl({ /* next config */ })
```

```typescript
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing'
export const routing = defineRouting({
  locales: ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt'],
  defaultLocale: 'en'
})
```

### Message File Example
```json
// messages/en.json
{
  "nav": {
    "home": "Home",
    "ukraine": "Ukraine Map",
    "gaza": "Gaza Map",
    "middleEast": "Middle East",
    "about": "About"
  },
  "map": {
    "title": "Live Global Conflict Map",
    "subtitle": "Tracking {count} active conflicts worldwide",
    "loading": "Loading map...",
    "clickPin": "Click a pin for details"
  },
  "events": {
    "title": "Latest Events",
    "noEvents": "No recent events",
    "source": "Source"
  },
  "footer": {
    "visitorsToday": "Today: {count} visitors",
    "visitorsTotal": "Total: {count} visitors",
    "lastUpdated": "Data last updated: {date}",
    "disclaimer": "For informational purposes only. Data sourced from public reports."
  },
  "severity": {
    "critical": "Critical",
    "high": "High",
    "medium": "Medium",
    "low": "Low"
  }
}
```

---

## UI Design Specs

### Color Palette
```
Background:    bg-slate-50   (#f8fafc)
Cards:         bg-white      (#ffffff)
Card border:   border-slate-200
Sidebar bg:    bg-slate-100
Header bg:     bg-white with shadow-sm
Text primary:  text-slate-800
Text muted:    text-slate-500
Accent:        text-blue-600
Critical:      text-red-600, bg-red-50
High:          text-orange-600, bg-orange-50
Medium:        text-yellow-600, bg-yellow-50
Low:           text-green-600, bg-green-50
```

### Map Conflict Pin Colors
```
Critical: #dc2626 (red-600) — radius 100-150px
High:     #ea580c (orange-600) — radius 60-100px
Medium:   #d97706 (amber-600) — radius 30-60px
Low:      #16a34a (green-600) — radius 20-30px
```

### Layout (Desktop)
```
┌─────────────────────────────────────────────────────┐
│  Header: Logo | Nav | Language Switcher              │
├──────────────────────────────┬──────────────────────┤
│  [Ad Header Banner 728x90]   │                       │
├──────────────────────────────┤                       │
│                              │  Events Panel         │
│   World Map (Leaflet)        │  [Event Card]         │
│   (fills remaining height)   │  [Event Card]         │
│                              │  [Ad Sidebar 300x250] │
│                              │  [Event Card]         │
├──────────────────────────────┴──────────────────────┤
│  Footer: About | Disclaimer | Visitor Counter        │
└─────────────────────────────────────────────────────┘
```

### Layout (Mobile)
```
┌─────────────────┐
│ Header (compact)│
├─────────────────┤
│ World Map       │
│ (300px height)  │
├─────────────────┤
│ [Ad In-Content] │
├─────────────────┤
│ Events List     │
│ (scrollable)    │
├─────────────────┤
│ Footer          │
├─────────────────┤
│[Mobile Sticky Ad│
└─────────────────┘
```

---

## Cost Analysis

| Service | Plan | Monthly Cost |
|---------|------|-------------|
| Vercel Hosting | Hobby (free) | $0 |
| OpenStreetMap tiles | Free | $0 |
| Leaflet.js | MIT open source | $0 |
| next-intl | MIT open source | $0 |
| Google Sheets | Free | $0 |
| GitHub | Free public repo | $0 |
| Domain (optional) | ~$10/yr | ~$0.83/mo |
| **Total** | | **$0–$1/mo** |

**Traffic limits on Vercel free tier:**
- 100GB bandwidth/month
- 100K Edge Function invocations/day
- 6,000 build minutes/month

---

## Vercel Deployment Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Set environment variables
vercel env add GOOGLE_SHEETS_WEBHOOK_URL production

# Deploy to production
vercel --prod

# Verify deployment
vercel ls
```

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## Launch Checklist

### Pre-Launch
- [ ] All 10+ conflicts added to `conflicts.json`
- [ ] 20+ events added to `events.json`
- [ ] All 8 language message files complete
- [ ] Ukraine, Gaza, Middle East SEO pages have 300+ words of keyword-rich content
- [ ] Sitemap submitted to Google Search Console
- [ ] robots.txt verified (no blocking of important pages)
- [ ] Adsterra zones created in Adsterra dashboard (even if placeholder)
- [ ] Google Sheets webhook URL set in Vercel env
- [ ] Visitor counter tested (increments on page load)
- [ ] Mobile sticky ad does not cover footer content
- [ ] OG images generated for all major pages
- [ ] 404 page created

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Submit sitemap.xml
- [ ] Add to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Check Google Sheets is receiving webhook data
- [ ] Apply for Adsterra account approval
- [ ] Set up Vercel Analytics alerts

### Daily Operations
- [ ] Update `events.json` with latest 20 events
- [ ] Update conflict status in `conflicts.json` if changed
- [ ] Monitor visitor counts in footer
- [ ] Check Adsterra earnings dashboard
