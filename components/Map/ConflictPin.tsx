'use client'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import type L from 'leaflet'
import { Conflict } from '@/lib/data'

interface ConflictPinProps {
  conflict: Conflict
}

export default function ConflictPin({ conflict }: ConflictPinProps) {
  const map = useMap()

  useEffect(() => {
    let LeafletLib: typeof L | null = null
    let circle: L.Circle | null = null

    async function addPin() {
      const L = (await import('leaflet')).default
      LeafletLib = L

      const radiusMeters = conflict.radius * 10000 // convert to meters

      circle = L.circle([conflict.lat, conflict.lng], {
        radius: radiusMeters,
        color: conflict.color,
        fillColor: conflict.color,
        fillOpacity: 0.25,
        weight: 2,
        opacity: 0.8,
      })

      const popupContent = `
        <div style="min-width:200px;font-family:sans-serif;">
          <h3 style="margin:0 0 6px;font-size:14px;font-weight:700;color:#1e293b;">${conflict.name}</h3>
          <p style="margin:0 0 4px;font-size:11px;color:#64748b;">
            <strong>Intensity:</strong> <span style="color:${conflict.color};text-transform:capitalize;">${conflict.intensity}</span>
          </p>
          <p style="margin:0 0 4px;font-size:11px;color:#64748b;">
            <strong>Region:</strong> ${conflict.region}
          </p>
          <p style="margin:0 0 4px;font-size:11px;color:#64748b;">
            <strong>Casualties:</strong> ${conflict.casualties.estimate}
          </p>
          <p style="margin:0 0 8px;font-size:11px;color:#475569;line-height:1.4;">${conflict.summary.slice(0, 120)}...</p>
          <a href="/conflict/${conflict.slug}" style="font-size:11px;color:#2563eb;font-weight:600;">View Details →</a>
        </div>
      `

      circle.bindPopup(popupContent, { maxWidth: 280 })
      circle.addTo(map)
    }

    addPin()

    return () => {
      if (circle && map) {
        map.removeLayer(circle)
      }
    }
  }, [map, conflict])

  return null
}
