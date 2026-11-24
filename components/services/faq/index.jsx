'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import { faqs } from '@/lib/site-data'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-5">
      <SectionHeading eyebrow="Sık sorulanlar" title="Merak ettikleriniz." className="lg:col-span-2" />
      <ul className="flex flex-col border-t border-border lg:col-span-3">
        {faqs.map((faq, i) => {
          const open = openIndex === i
          const id = `sss-${i}`
          return (
            <li key={faq.q} className="border-b border-border">
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold"
                  aria-expanded={open}
                  aria-controls={id}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {faq.q}
                  <motion.span animate={{ rotate: open ? 45 : 0 }} className="shrink-0 text-primary">
                    <Plus className="size-5" aria-hidden="true" />
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 leading-relaxed text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
