import Link from 'next/link'
import { Check } from 'lucide-react'
import Reveal from '@/components/reveal'
import SectionHeading from '@/components/section-heading'
import { packages } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export default function Packages() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="Paketler"
          title="İhtiyacınıza uygun bakım paketi."
          description="Fiyatlar aracın sınıfına ve mevcut durumuna göre belirlenir. Size özel fiyat için bizi arayın veya WhatsApp'tan aracınızın fotoğrafını gönderin."
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal
              as="li"
              key={pkg.name}
              delay={i * 0.1}
              className={cn(
                'flex flex-col gap-6 rounded-xl border p-8',
                pkg.highlight
                  ? 'border-surface bg-surface text-surface-foreground lg:-translate-y-4'
                  : 'border-border bg-card text-card-foreground',
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight">{pkg.name}</h3>
                {pkg.highlight && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    En çok tercih edilen
                  </span>
                )}
              </div>
              <p className={cn('leading-relaxed', pkg.highlight ? 'text-surface-muted' : 'text-muted-foreground')}>
                {pkg.description}
              </p>
              <ul className="flex flex-1 flex-col gap-3">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/iletisim?paket=${encodeURIComponent(pkg.name)}`}
                className={cn(
                  'rounded-full px-6 py-3.5 text-center font-semibold transition-transform hover:scale-[1.02]',
                  pkg.highlight ? 'bg-primary text-primary-foreground' : 'bg-foreground text-background',
                )}
              >
                Fiyat & randevu al
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
