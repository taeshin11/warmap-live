import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WarMap Live — Interactive Global Conflict Map',
  description: 'Track active wars and conflicts worldwide. Live updates on Ukraine, Gaza, Sudan, Myanmar and more.',
  metadataBase: new URL('https://warmap.live'),
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
