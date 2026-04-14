import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

const SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function proxy(request: NextRequest) {
  const response = intlMiddleware(request)

  // Fire-and-forget to Google Sheets
  if (SHEETS_URL && request.method === 'GET') {
    const payload = {
      timestamp: new Date().toISOString(),
      page: request.nextUrl.pathname,
      country: (request as unknown as { geo?: { country?: string } }).geo?.country ?? 'unknown',
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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}
