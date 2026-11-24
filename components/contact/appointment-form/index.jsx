'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Send } from 'lucide-react'
import { business, packages, services } from '@/lib/site-data'

const fieldClass =
  'w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export default function AppointmentForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get('paket') || ''
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const options = [...packages.map((p) => `Paket: ${p.name}`), ...services.map((s) => s.title)]
  const defaultValue = initialService ? `Paket: ${initialService}` : ''

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()

    if (name.length < 2) return setError('Lütfen adınızı girin.')
    if (!/^[0-9+\s()-]{10,}$/.test(phone)) return setError('Lütfen geçerli bir telefon numarası girin.')
    setError('')

    const lines = [
      'Merhaba F&CAREngin, randevu almak istiyorum.',
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      data.get('car') && `Araç: ${data.get('car')}`,
      data.get('service') && `Hizmet: ${data.get('service')}`,
      data.get('date') && `Tercih edilen tarih: ${data.get('date')}`,
      data.get('note') && `Not: ${data.get('note')}`,
    ].filter(Boolean)

    window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
            role="status"
          >
            <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-bold tracking-tight">Talebiniz hazır!</h2>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              WhatsApp penceresinde mesajınızı göndermeniz yeterli. En kısa sürede size dönüş yapacağız.
            </p>
            <button type="button" onClick={() => setSent(false)} className="font-semibold text-primary hover:underline">
              Yeni talep oluştur
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Online randevu</h2>
              <p className="leading-relaxed text-muted-foreground">
                Formu doldurun, talebiniz WhatsApp üzerinden doğrudan bize iletilsin.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Ad Soyad *</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Adınız Soyadınız" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefon *</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="05xx xxx xx xx" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="car" className="text-sm font-medium">Araç marka / model</label>
                <input id="car" name="car" placeholder="Örn. BMW 5 Serisi" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-medium">Tercih edilen tarih</label>
                <input id="date" name="date" type="date" className={fieldClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium">Hizmet</label>
              <select id="service" name="service" defaultValue={defaultValue} className={fieldClass}>
                <option value="">Seçiniz</option>
                {options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="note" className="text-sm font-medium">Notunuz</label>
              <textarea id="note" name="note" rows={4} placeholder="Aracınızın durumu veya özel istekleriniz..." className={fieldClass} />
            </div>

            {error && (
              <p role="alert" className="rounded-md bg-accent/15 px-4 py-3 text-sm font-medium text-foreground">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              WhatsApp ile gönder
              <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
