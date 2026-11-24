'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react'
import { business, services } from '@/lib/site-data'
import TodayHours from '@/components/today-hours'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const marqueeItems = [...services, ...services]

  return (
    <section ref={ref} className="relative flex min-h-dvh flex-col overflow-hidden bg-surface text-surface-foreground">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/hero.png"
          alt="F&CAREngin stüdyosunda LED ışıklar altında makine pasta ile parlatılan siyah sedan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-surface/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/60" aria-hidden="true" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-12 md:px-8"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-3xl flex-col gap-7">
          <motion.a
            variants={item}
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-full border border-surface-foreground/20 bg-surface/40 px-4 py-2 text-sm backdrop-blur-sm transition-colors hover:border-surface-foreground/40"
          >
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-accent text-accent" />
              ))}
            </span>
            <span className="font-semibold">{business.rating}</span>
            <span className="text-surface-muted">· Google&apos;da {business.reviewCount}+ değerlendirme</span>
          </motion.a>

          <motion.h1
            variants={item}
            className="text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-8xl"
          >
            <span className="gloss-text block">Aracınız,</span>
            <span className="block">ilk günkü</span>
            <span className="block text-primary">parlaklığında.</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-surface-muted text-pretty">
            Kadıköy Göztepe&apos;de, Opet istasyonu içinde profesyonel oto kuaför & detailing. Detaylı iç-dış temizlikten
            seramik kaplamaya, aracınızın her santimine ustalıkla dokunuyoruz.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim"
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Randevu Al
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/hizmetler"
              className="flex items-center justify-center gap-2 rounded-full border border-surface-foreground/30 px-7 py-4 font-semibold transition-colors hover:bg-surface-foreground/10"
            >
              Hizmetlerimiz
            </Link>
          </motion.div>

          <motion.dl variants={item} className="flex flex-col gap-4 pt-4 text-sm sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-surface-muted">Konum</dt>
                <dd className="font-semibold">{business.addressShort}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-surface-muted">Telefon</dt>
                <dd className="font-semibold">
                  <a href={business.phoneHref} className="hover:underline">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <TodayHours />
          </motion.dl>
        </motion.div>
      </motion.div>

      <div className="relative border-y border-surface-foreground/10 bg-surface/80 py-5 backdrop-blur-sm" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {marqueeItems.map((s, i) => (
            <span key={`${s.slug}-${i}`} className="font-display flex items-center gap-10 text-xl font-bold uppercase tracking-wide text-surface-foreground/80">
              {s.title}
              <span className="size-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
