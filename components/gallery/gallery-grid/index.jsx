'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryItems } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const categories = ['Tümü', ...new Set(galleryItems.map((g) => g.category))]

export default function GalleryGrid() {
  const [filter, setFilter] = useState('Tümü')
  const [activeIndex, setActiveIndex] = useState(null)

  const items = filter === 'Tümü' ? galleryItems : galleryItems.filter((g) => g.category === filter)
  const active = activeIndex !== null ? items[activeIndex] : null

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, items.length])

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div role="group" aria-label="Kategori filtresi" className="mb-12 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              'relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
              filter === c ? 'text-primary-foreground' : 'bg-card text-foreground hover:bg-muted',
            )}
          >
            {filter === c && (
              <motion.span
                layoutId="gallery-filter"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(filter === 'Tümü' && (i === 0 || i === 4) && 'sm:row-span-2')}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-surface text-left"
                aria-label={`${item.title} görselini büyüt`}
              >
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col gap-1 p-5 text-surface-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{item.category}</span>
                  <span className="font-semibold">{item.title}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-surface/95 p-4 text-surface-foreground backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-surface-foreground/10 hover:bg-surface-foreground/20"
              onClick={() => setActiveIndex(null)}
              aria-label="Kapat"
              autoFocus
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-surface-foreground/10 hover:bg-surface-foreground/20 md:left-8"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex((i) => (i - 1 + items.length) % items.length)
              }}
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <motion.figure
              key={active.src}
              className="flex max-h-full w-full max-w-4xl flex-col gap-4"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square max-h-[75vh] w-full overflow-hidden rounded-xl md:aspect-[4/3]">
                <Image src={active.src || '/placeholder.svg'} alt={active.title} fill sizes="90vw" className="object-contain" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold">{active.title}</span>
                <span className="text-surface-muted">
                  {activeIndex + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
            <button
              type="button"
              className="absolute right-3 flex size-11 items-center justify-center rounded-full bg-surface-foreground/10 hover:bg-surface-foreground/20 md:right-8"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex((i) => (i + 1) % items.length)
              }}
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
