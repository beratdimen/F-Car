'use client'

import { useEffect, useState } from 'react'
import { openingHours } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export default function HoursTable() {
  const [todayIndex, setTodayIndex] = useState(null)

  useEffect(() => {
    setTodayIndex(new Date().getDay())
  }, [])

  return (
    <div className="rounded-xl bg-surface p-6 text-surface-foreground md:p-8">
      <h3 className="mb-5 text-xl font-bold tracking-tight">Çalışma saatleri</h3>
      <table className="w-full text-sm">
        <caption className="sr-only">Haftalık çalışma saatleri</caption>
        <tbody>
          {openingHours.map((h) => {
            const isToday = h.day === todayIndex
            return (
              <tr key={h.label} className="border-b border-surface-foreground/10 last:border-0">
                <th scope="row" className={cn('py-3 text-left font-medium', isToday ? 'text-surface-foreground' : 'text-surface-muted')}>
                  <span className="flex items-center gap-2">
                    {h.label}
                    {isToday && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">Bugün</span>
                    )}
                  </span>
                </th>
                <td className={cn('py-3 text-right tabular-nums', isToday ? 'font-semibold' : 'text-surface-muted')}>{h.hours}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="mt-4 text-xs leading-relaxed text-surface-muted">
        Bayram ve özel günlerde saatler değişebilir; gelmeden önce aramanızı öneririz.
      </p>
    </div>
  )
}
