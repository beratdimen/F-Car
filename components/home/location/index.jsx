import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Fuel, MapPin } from 'lucide-react'
import Reveal from '@/components/reveal'
import { business } from '@/lib/site-data'

export default function Location() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/studio.png"
            alt="Opet Göztepe istasyonundaki F&CAREngin detailing stüdyosu"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-sm">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {business.addressShort}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Fuel className="size-5" aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Yakıtınızı alın, aracınızı bize bırakın.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Fahrettin Kerim Gökay Caddesi üzerindeki Opet Göztepe istasyonunun içindeyiz. Kolay ulaşım, rahat park
            imkânı ve ana cadde üzerinde olmanın avantajıyla aracınızı dakikalar içinde teslim edebilirsiniz.
          </p>
          <address className="not-italic leading-relaxed text-foreground">{business.address}</address>
          <Link
            href="/iletisim"
            className="group flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Yol tarifi & iletişim
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
