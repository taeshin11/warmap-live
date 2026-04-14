# Milestone 01: Project Init

**Date:** 2026-04-14
**Status:** COMPLETE

## Summary

- Next.js 15 (App Router) scaffolded in `/c/MakingApps/260414/warmap-live`
- TypeScript + Tailwind CSS configured
- Dependencies installed: leaflet, react-leaflet, @types/leaflet, next-intl, echarts, echarts-for-react

## Files Created

- `next.config.ts` — next-intl plugin configured
- `middleware.ts` — i18n routing + Google Sheets webhook
- `i18n/routing.ts` — 8 locales defined
- `i18n/request.ts` — next-intl server config
- `app/layout.tsx` — minimal root layout
- `app/globals.css` — base styles

## Data Layer (M1)

- `public/data/conflicts.json` — 12 real conflicts
- `public/data/events.json` — 22 recent events (April 2026)
- `public/data/countries.json` — 15 countries
- `lib/data.ts` — utility functions

## Components (M2-M3)

- `components/Map/ConflictMap.tsx` — Leaflet map (dynamic, SSR disabled)
- `components/Map/ConflictPin.tsx` — Individual conflict circles
- `components/EventPanel/EventPanel.tsx` — 20-item event feed
- `components/EventPanel/EventCard.tsx` — Event card with severity badge
- `components/Layout/Header.tsx` — Logo, nav, language switcher
- `components/Layout/Footer.tsx` — With visitor counter
- `components/Ads/AdHeader.tsx` — 728x90 placeholder
- `components/Ads/AdSidebar.tsx` — 300x250 placeholder
- `components/Ads/AdInContent.tsx` — 468x60 placeholder
- `components/Ads/AdMobileSticky.tsx` — 320x50 mobile sticky
- `components/VisitorCounter.tsx` — Visitor counter component

## i18n + SEO (M4)

- `messages/` — 8 language files (en, ko, ja, zh, es, fr, de, pt)
- `app/[locale]/layout.tsx` — Localized layout
- `app/[locale]/page.tsx` — Homepage with map + events
- `app/[locale]/conflict/[slug]/page.tsx` — Conflict detail page
- `app/ukraine-war-map/page.tsx` — SEO page with 300+ words
- `app/gaza-war-map/page.tsx` — SEO page with 300+ words
- `app/middle-east-conflict-map/page.tsx` — SEO page with 300+ words
- `app/about/page.tsx` — About page
- `app/sitemap.ts` — Auto-generated sitemap
- `app/robots.ts` — Robots.txt config
