import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-surface px-5 text-center text-surface-foreground">
      <p className="font-display gloss-text text-8xl font-extrabold md:text-9xl">404</p>
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Aradığınız sayfa bulunamadı.</h1>
      <Link href="/" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground">
        Ana sayfaya dön
      </Link>
    </section>
  )
}
