'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { ArrowUpRight, Star } from 'lucide-react'
import Reveal from '@/components/reveal'
import { business } from '@/lib/site-data'

function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals).replace('.', ',')}
      {suffix}
    </span>
  )
}

export default function Trust() {
  const facts = [
    { value: <CountUp to={business.rating} decimals={1} />, label: 'Google ortalama puanı' },
    { value: <CountUp to={business.reviewCount} suffix="+" />, label: 'Gerçek müşteri değerlendirmesi' },
    { value: <CountUp to={7} suffix="/7" />, label: 'Haftanın her günü açık' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="flex flex-col gap-6 lg:col-span-2">
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-accent text-accent" />
            ))}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Kadıköy&apos;ün güvendiği oto kuaför.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Yüzlerce müşterimizin Google&apos;da bıraktığı yorumlar, titiz işçiliğimizin ve şeffaf hizmet anlayışımızın en
            büyük kanıtı.
          </p>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 font-semibold text-primary"
          >
            Google yorumlarını oku
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </Reveal>

        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:col-span-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1} className="flex flex-col justify-between gap-10 bg-card p-8">
              <dt className="order-2 text-sm leading-relaxed text-muted-foreground">{f.label}</dt>
              <dd className="font-display order-1 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
                {f.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
