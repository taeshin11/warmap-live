'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [counts, setCounts] = useState({ today: 0, total: 0 })

  useEffect(() => {
    fetch('/api/visitor', { method: 'POST' })
      .then(r => r.json())
      .then(setCounts)
      .catch(() => {})
  }, [])

  return (
    <div className="text-xs text-slate-400 flex gap-4">
      <span>Today: {counts.today.toLocaleString()}</span>
      <span>Total: {counts.total.toLocaleString()}</span>
    </div>
  )
}
