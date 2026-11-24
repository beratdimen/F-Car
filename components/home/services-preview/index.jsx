import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/reveal'
import SectionHeading from '@/components/section-heading'
import { services } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export default function ServicesPreview() {
  const featured = services.slice(0, 6)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Yıkamanın çok ötesinde, gerçek detailing."
          description="Her aracı kendi ihtiyacına göre ele alıyoruz. İç temizlikten boya korumaya kadar tüm işlemler tek çatı altında."
        />
        <Reveal delay={0.1}>
          <Link
            href="/hizmetler"
            className="group flex w-fit items-center gap-2 font-semibold text-primary"
          >
            Tüm hizmetleri incele
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Reveal as="li" key={service.slug} delay={(i % 3) * 0.08} className={cn(i === 0 && 'lg:row-span-2')}>
            <Link
              href={`/hizmetler#${service.slug}`}
              className="group relative flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-xl bg-surface text-surface-foreground"
            >
              <Image
                src={service.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" aria-hidden="true" />
              <div className="relative flex flex-col gap-3 p-6">
                <span className="w-fit rounded-full bg-surface-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {service.category}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                    <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-surface-muted opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100">
                      {service.short}
                    </p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
