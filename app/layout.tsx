import type { Metadata } from 'next'
import './globals.css'

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
    google: 'add-your-google-site-verification-here',
  },
  other: {
    'google-adsense-account': 'ca-pub-add-your-publisher-id-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        {children}
      </body>
    </html>
  )
}
