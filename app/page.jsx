import Hero from '@/components/home/hero'
import ServicesPreview from '@/components/home/services-preview'
import Process from '@/components/home/process'
import Trust from '@/components/home/trust'
import Location from '@/components/home/location'
import CtaBand from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <Trust />
      <Location />
      <CtaBand />
    </>
  )
}
