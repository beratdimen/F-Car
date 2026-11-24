import PageHero from '@/components/page-hero'
import Story from '@/components/about/story'
import Values from '@/components/about/values'
import Trust from '@/components/home/trust'
import CtaBand from '@/components/cta-band'

export const metadata = {
  title: 'Hakkımızda',
  description:
    'F&CAREngin Oto Kuaför & Detailing; Kadıköy Göztepe Opet istasyonunda titiz işçilik ve kaliteli ürünlerle hizmet veren detailing stüdyosu.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Göztepe'nin detailing stüdyosu."
        description="Opet Göztepe istasyonundaki stüdyomuzda, her aracı kendi aracımız gibi özenle ele alıyoruz."
        image="/images/studio.png"
      />
      <Story />
      <Values />
      <Trust />
      <CtaBand />
    </>
  )
}
