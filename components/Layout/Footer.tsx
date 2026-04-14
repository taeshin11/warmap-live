import Link from 'next/link'
import VisitorCounter from '@/components/VisitorCounter'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-white font-semibold text-sm">WarMap Live</div>
            <div className="text-xs text-slate-500 mt-1">Data for informational purposes only.</div>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/ukraine-war-map" className="hover:text-white transition-colors">Ukraine Map</Link>
            <Link href="/gaza-war-map" className="hover:text-white transition-colors">Gaza Map</Link>
            <Link href="/middle-east-conflict-map" className="hover:text-white transition-colors">Middle East</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <VisitorCounter />
        </div>
        <div className="border-t border-slate-800 mt-6 pt-4 text-xs text-center text-slate-600">
          © {new Date().getFullYear()} WarMap Live. For informational purposes only.
        </div>
      </div>
    </footer>
  )
}
