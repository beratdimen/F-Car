import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Logo({ className, onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group flex flex-col leading-none', className)}
      aria-label="F&CAREngin Oto Kuaför ana sayfa"
    >
      <span className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
        F&amp;<span className="text-primary">CAR</span>Engin
      </span>
      <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] opacity-70">
        Oto Kuaför · <span lang="en">Detailing</span>
      </span>
    </Link>
  )
}
