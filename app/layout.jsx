import { Archivo, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsappButton from '@/components/whatsapp-button'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'F&CAREngin Oto Kuaför & Detailing | Göztepe, Kadıköy',
    template: '%s | F&CAREngin Oto Kuaför',
  },
  description:
    'F&CAREngin Oto Kuaför & Detailing — Opet Göztepe, Kadıköy. Detaylı iç-dış temizlik, koltuk yıkama, pasta cila, seramik kaplama, motor temizliği ve far yenileme. Google puanı 4.9.',
  keywords: [
    'oto kuaför kadıköy',
    'oto kuaför göztepe',
    'detailing istanbul',
    'seramik kaplama kadıköy',
    'pasta cila göztepe',
    'koltuk yıkama kadıköy',
    'F&CAREngin',
  ],
  openGraph: {
    title: 'F&CAREngin Oto Kuaför & Detailing',
    description: 'Opet Göztepe’de profesyonel oto kuaför ve detailing hizmetleri.',
    locale: 'tr_TR',
    type: 'website',
    images: ['/images/hero.png'],
  },
}

export const viewport = {
  themeColor: '#16191f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${archivo.variable} ${inter.variable} bg-background`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <WhatsappButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
