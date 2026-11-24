import { Suspense } from 'react'
import PageHero from '@/components/page-hero'
import ContactInfo from '@/components/contact/contact-info'
import AppointmentForm from '@/components/contact/appointment-form'
import Reveal from '@/components/reveal'
import { business } from '@/lib/site-data'

export const metadata = {
  title: 'İletişim & Randevu',
  description:
    'F&CAREngin Oto Kuaför: Opet Göztepe, Fahrettin Kerim Gökay Cd. No:140, Kadıköy / İstanbul. Tel: 0535 479 79 69. Online randevu ve yol tarifi.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Randevunuzu oluşturun."
        description="Arayın, WhatsApp'tan yazın ya da formu doldurun. Opet Göztepe'deki stüdyomuzda sizi bekliyoruz."
        image="/images/foam-wash.png"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <ContactInfo />
        <Reveal delay={0.1}>
          <Suspense fallback={<div className="h-[600px] rounded-xl border border-border bg-card" />}>
            <AppointmentForm />
          </Suspense>
        </Reveal>
      </section>
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-border">
          <iframe
            title="F&CAREngin Oto Kuaför konumu - Opet Göztepe, Kadıköy"
            src={business.mapsEmbed}
            className="h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  )
}
