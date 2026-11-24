'use client'

import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { business } from '@/lib/site-data'

export default function WhatsappButton() {
  const text = encodeURIComponent('Merhaba, aracım için randevu almak istiyorum.')
  return (
    <motion.a
      href={`https://wa.me/${business.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-foreground/20"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  )
}
