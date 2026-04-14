'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'ko', label: 'KO' },
  { code: 'ja', label: 'JA' },
  { code: 'zh', label: 'ZH' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' },
]

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: `/${locale}`, label: 'Home' },
    { href: '/ukraine-war-map', label: 'Ukraine Map' },
    { href: '/gaza-war-map', label: 'Gaza Map' },
    { href: '/middle-east-conflict-map', label: 'Middle East' },
    { href: '/about', label: 'About' },
  ]

  function switchLocale(newLocale: string) {
    // Replace current locale prefix in pathname
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/') || `/${newLocale}`)
  }

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-800">
            <span className="text-red-600">⚠</span> WarMap Live
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <select
            value={locale}
            onChange={e => switchLocale(e.target.value)}
            className="text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-600 cursor-pointer"
          >
            {locales.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
