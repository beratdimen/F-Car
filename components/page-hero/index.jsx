'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-20 text-surface-foreground md:pt-44 md:pb-28">
      {image && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 md:px-8">
        <motion.nav
          aria-label="Sayfa yolu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ol className="flex items-center gap-1 text-sm text-surface-muted">
            <li>
              <Link href="/" className="hover:text-surface-foreground">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4" />
            </li>
            <li aria-current="page" className="text-surface-foreground">
              {eyebrow}
            </li>
          </ol>
        </motion.nav>
        <h1 className="max-w-4xl overflow-hidden text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
          <motion.span
            className="gloss-text block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.span>
        </h1>
        {description && (
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-surface-muted text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
