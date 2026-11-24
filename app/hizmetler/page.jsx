import PageHero from '@/components/page-hero'
import ServiceList from '@/components/services/service-list'
import Packages from '@/components/services/packages'
import Faq from '@/components/services/faq'
import CtaBand from '@/components/cta-band'

export const metadata = {
  title: 'Hizmetler',
  description:
    'Detaylı dış yıkama, iç temizlik ve koltuk yıkama, pasta cila, seramik kaplama, motor temizliği, jant bakımı ve far yenileme. F&CAREngin Oto Kuaför, Göztepe Kadıköy.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Her detay, özenle."
        description="Aracınızın içini, dışını ve boyasını; doğru ürünler ve profesyonel ekipmanlarla yeniliyor, uzun süre koruma altına alıyoruz."
        image="/images/polish.png"
      />
      <ServiceList />
      <Packages />
      <Faq />
      <CtaBand />
    </>
  )
}
