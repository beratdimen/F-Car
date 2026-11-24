import Image from 'next/image'
import Reveal from '@/components/reveal'

export default function Story() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Hikâyemiz
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Araçlara tutkuyla bakan bir ekip.
          </h2>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              F&amp;CAREngin, Kadıköy Göztepe&apos;de Opet istasyonu içinde hizmet veren bir oto kuaför ve detailing
              stüdyosudur. Amacımız basit: her aracı kendi aracımız gibi görmek ve teslim ettiğimizde sahibinin yüzünde
              bir gülümseme bırakmak.
            </p>
            <p>
              Sıradan bir oto yıkamanın ötesinde; koltuk yıkamadan pasta-cilaya, motor temizliğinden seramik kaplamaya
              kadar tüm işlemleri profesyonel ekipman ve kaliteli ürünlerle, acele etmeden yapıyoruz.
            </p>
            <p>
              Google&apos;da yüzlerce müşterimizin bıraktığı yüksek puanlar, bu yaklaşımın karşılığını gösteriyor.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="/images/studio.png"
              alt="F&CAREngin detailing stüdyosu"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src="/images/interior.png" alt="İç detaylı temizlik çalışması" fill sizes="25vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.2} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src="/images/ceramic.png" alt="Seramik kaplama sonrası su itici yüzey" fill sizes="25vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
