'use client'
import dynamic from 'next/dynamic'

const ConflictMap = dynamic(
  () => import('./ConflictMap'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <div className="text-slate-500 text-sm flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          Loading map...
        </div>
      </div>
    )
  }
)

export default function ConflictMapWrapper() {
  return <ConflictMap />
}
