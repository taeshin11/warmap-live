import { NextResponse } from 'next/server'

// Uses simple in-memory storage (resets on cold start)
// For persistence, replace with Vercel KV or Edge Config
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
