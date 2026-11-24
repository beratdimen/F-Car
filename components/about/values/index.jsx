import { Eye, FlaskConical, Handshake, ShieldCheck } from 'lucide-react'
import Reveal from '@/components/reveal'
import SectionHeading from '@/components/section-heading'

const values = [
  {
    icon: Eye,
    title: 'Titizlik',
    text: 'Kapı içlerinden havalandırma kanallarına kadar gözden kaçan nokta bırakmıyoruz. Son kontrol LED ışık altında yapılır.',
  },
  {
    icon: FlaskConical,
    title: 'Doğru ürün',
    text: 'Boyanıza, döşemenize ve jantlarınıza uygun pH dengeli, profesyonel detailing ürünleri kullanıyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Aracınıza saygı',
    text: 'Çiziksiz yıkama teknikleri ve kontrollü pasta uygulamasıyla boyanıza zarar vermeden sonuç alıyoruz.',
  },
  {
    icon: Handshake,
    title: 'Şeffaflık',
    text: 'İşleme başlamadan önce aracınızı birlikte inceliyor, ne yapacağımızı ve fiyatını açıkça paylaşıyoruz.',
  },
]

export default function Values() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Değerlerimiz" title="Fark, detaylarda saklı." />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl bg-surface-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.08} className="flex flex-col gap-5 bg-surface p-8">
              <v.icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
              <p className="leading-relaxed text-surface-muted">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
