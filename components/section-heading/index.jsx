import Reveal from '@/components/reveal'
import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <Reveal className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center', className)}>
      {eyebrow && (
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">{title}</h2>
      {description && <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>}
    </Reveal>
  )
}
