import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { FeedbackButton } from '@/components/FeedbackButton'

export const metadata: Metadata = {
  title: {
    default: 'WarMap Live | Real-Time Intelligence',
    template: '%s | WarMap Live'
  },
  description: 'Real-time interactive map tracking active war zones, frontlines, and military incidents worldwide',
  keywords: 'war map, conflict map, battle tracker, military incidents, war zones, frontline map',
  metadataBase: new URL('https://warmap-live.vercel.app'),
  openGraph: {
    type: 'website',
    siteName: 'WarMap Live',
    title: 'WarMap Live | Real-Time Intelligence',
    description: 'Real-time interactive map tracking active war zones, frontlines, and military incidents worldwide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WarMap Live',
    description: 'Real-time interactive map tracking active war zones, frontlines, and military incidents worldwide',
  },
  verification: {
    google: 'WddgcbVJsL2BGHNAje5m6DK56IcR0Mw5UOqozI2Xtrc',
  },
  other: {
    'google-adsense-account': 'ca-pub-7098271335538021',
    'indexnow-key': 'warmap-live-2025',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WarMap Live",
              "url": "https://warmap-live.vercel.app",
              "description": "Real-time interactive map tracking active war zones, frontlines, and military incidents worldwide",
              "publisher": {
                "@type": "Organization",
                "name": "WarMap Live",
                "url": "https://warmap-live.vercel.app"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://warmap-live.vercel.app/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        {children}
        <FeedbackButton siteName="WarMap Live" siteUrl="https://warmap-live.vercel.app" />
      <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098271335538021"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
