'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { conflicts } from '@/lib/data'
import ConflictPin from './ConflictPin'

export default function ConflictMap() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Fix Leaflet default icon paths in Next.js
    import('leaflet').then((L) => {
      const DefaultIcon = L.default.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
      L.default.Marker.prototype.options.icon = DefaultIcon
    })
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <div className="text-slate-500 text-sm flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          Loading map...
        </div>
      </div>
    )
  }

  return (
    <MapContainer
      center={[20, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      worldCopyJump={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {conflicts.map(conflict => (
        <ConflictPin key={conflict.id} conflict={conflict} />
      ))}
    </MapContainer>
  )
}
