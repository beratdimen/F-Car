import PageHero from '@/components/page-hero'
import GalleryGrid from '@/components/gallery/gallery-grid'
import CtaBand from '@/components/cta-band'

export const metadata = {
  title: 'Galeri',
  description: 'F&CAREngin Oto Kuaför & Detailing çalışmalarından kareler: seramik kaplama, pasta cila, iç temizlik ve daha fazlası.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Işığın altında, işimiz konuşur."
        description="Stüdyomuzdan detaylar: köpükten seramiğe, her aşamada aracınıza gösterdiğimiz özen."
        image="/images/ceramic.png"
      />
      <GalleryGrid />
      <CtaBand />
    </>
  )
}
