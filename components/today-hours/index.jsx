'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { openingHours } from '@/lib/site-data'

export default function TodayHours() {
  const [today, setToday] = useState(null)

  useEffect(() => {
    setToday(openingHours.find((h) => h.day === new Date().getDay()))
  }, [])

  return (
    <div className="flex items-center gap-3">
      <Clock className="size-5 text-primary" aria-hidden="true" />
      <div>
        <dt className="text-surface-muted">{today ? `Bugün (${today.label})` : 'Çalışma saatleri'}</dt>
        <dd className="font-semibold">{today ? today.hours : 'Her gün açık'}</dd>
      </div>
    </div>
  )
}
