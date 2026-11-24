import Link from 'next/link'
import { Clock, MapPin, Phone } from 'lucide-react'
import Logo from '@/components/logo'
import { business, navLinks, openingHours, services } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-surface-muted">
            Kadıköy Göztepe&apos;de, Opet istasyonu içinde profesyonel oto kuaför ve detailing stüdyosu.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Sayfalar</h2>
          <ul className="flex flex-col gap-2 text-sm text-surface-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-surface-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Hizmetler</h2>
          <ul className="flex flex-col gap-2 text-sm text-surface-muted">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler#${s.slug}`} className="transition-colors hover:text-surface-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest">İletişim</h2>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-surface-muted hover:text-surface-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="leading-relaxed">{business.address}</span>
          </a>
          <a href={business.phoneHref} className="flex gap-3 text-surface-muted hover:text-surface-foreground">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <div className="flex gap-3 text-surface-muted">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="leading-relaxed">
              Haftanın her günü açık
              <br />
              <span className="text-xs">
                {openingHours[0].hours} (kapanış saati güne göre değişir)
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-surface-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} F&amp;CAREngin Oto Kuaför & Detailing. Tüm hakları saklıdır.</p>
          <p>Opet Göztepe · Kadıköy / İstanbul</p>
        </div>
      </div>
    </footer>
  )
}
