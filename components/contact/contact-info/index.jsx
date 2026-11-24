import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import Reveal from '@/components/reveal'
import HoursTable from '@/components/contact/hours-table'
import { business } from '@/lib/site-data'

export default function ContactInfo() {
  const cards = [
    { icon: Phone, label: 'Telefon', value: business.phoneDisplay, href: business.phoneHref },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Mesaj gönderin',
      href: `https://wa.me/${business.whatsappNumber}`,
      external: true,
    },
    { icon: Navigation, label: 'Yol tarifi', value: 'Google Haritalar', href: business.mapsUrl, external: true },
  ]

  return (
    <div className="flex flex-col gap-8">
      <Reveal className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Bize ulaşın</h2>
        <address className="flex gap-3 not-italic leading-relaxed text-muted-foreground">
          <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          {business.address}
        </address>
      </Reveal>

      <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal as="li" key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <c.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-muted-foreground">{c.label}</span>
                <span className="font-semibold">{c.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <HoursTable />
      </Reveal>
    </div>
  )
}
