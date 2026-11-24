import Image from 'next/image'
import { Check } from 'lucide-react'
import Reveal from '@/components/reveal'
import { services } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export default function ServiceList() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <nav aria-label="Hizmetler" className="mb-16 flex flex-wrap gap-2">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-24 md:gap-32">
        {services.map((service, i) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={cn('relative aspect-[4/3] overflow-hidden rounded-xl bg-surface', i % 2 === 1 && 'lg:order-2')}>
              <Image
                src={service.image || '/placeholder.svg'}
                alt={`${service.title} uygulaması`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{service.category}</span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-4xl">{service.title}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{service.description}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}
