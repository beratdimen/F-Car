'use client'

import { motion } from 'motion/react'
import SectionHeading from '@/components/section-heading'
import { processSteps } from '@/lib/site-data'

export default function Process() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Nasıl çalışıyoruz"
          title="Dört adımda kusursuz teslim."
          className="[&_p]:text-surface-muted"
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            className="absolute top-6 left-0 hidden h-px w-full origin-left bg-primary lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.25 + i * 0.18, duration: 0.6 }}
              >
                <span className="font-display relative flex size-12 items-center justify-center rounded-full border border-primary bg-surface text-lg font-bold text-primary">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="leading-relaxed text-surface-muted">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
