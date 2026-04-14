import Link from 'next/link'
import VisitorCounter from '@/components/VisitorCounter'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 text-sm mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-2">WarMap Live</h3>
            <p className="text-xs leading-relaxed">
              Interactive global conflict tracking dashboard. Track active wars and conflicts worldwide with real-time updates.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Pages</h3>
            <ul className="space-y-1 text-xs">
              <li><Link href="/ukraine-war-map" className="hover:text-white transition-colors">Ukraine War Map</Link></li>
              <li><Link href="/gaza-war-map" className="hover:text-white transition-colors">Gaza War Map</Link></li>
              <li><Link href="/middle-east-conflict-map" className="hover:text-white transition-colors">Middle East Conflict Map</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Visitor Counter */}
          <div>
            <h3 className="text-white font-semibold mb-2">Visitor Stats</h3>
            <VisitorCounter />
            <p className="text-xs mt-2">
              Data last updated: <span className="text-slate-300">{new Date().toLocaleDateString()}</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-4 text-xs text-center">
          <p className="mb-1">For informational purposes only. Data sourced from public reports and verified news sources.</p>
          <p>© {new Date().getFullYear()} WarMap Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
