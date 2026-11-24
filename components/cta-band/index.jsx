import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import Reveal from '@/components/reveal'
import { business } from '@/lib/site-data'

export default function CtaBand() {
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-xl bg-primary px-6 py-14 text-primary-foreground md:flex-row md:items-end md:justify-between md:px-14 md:py-20">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Aracınızı bugün bize bırakın.
          </h2>
          <p className="text-lg leading-relaxed opacity-85 text-pretty">
            Yakıtınızı alırken aracınızı teslim edin, biz ilk günkü parlaklığına kavuşturalım. Randevu ve fiyat bilgisi için hemen ulaşın.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/iletisim"
            className="group flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-4 font-semibold text-primary transition-transform hover:scale-[1.03]"
          >
            Randevu Al
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-4 font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
