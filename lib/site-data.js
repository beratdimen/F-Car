export const business = {
  name: 'F&CAREngin',
  tagline: 'Oto Kuaför & Detailing',
  phoneDisplay: '0535 479 79 69',
  phoneHref: 'tel:+905354797969',
  whatsappNumber: '905354797969',
  address: 'Opet Göztepe, Fahrettin Kerim Gökay Cd. No:140, 34730 Kadıköy / İstanbul',
  addressShort: 'Opet Göztepe, Kadıköy',
  rating: 4.9,
  reviewCount: 790,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=F%26CAREngin+Oto+Kuaf%C3%B6r+Detailing+Opet+G%C3%B6ztepe+Kad%C4%B1k%C3%B6y',
  mapsEmbed:
    'https://www.google.com/maps?q=Opet+G%C3%B6ztepe+Fahrettin+Kerim+G%C3%B6kay+Cd+No:140+Kad%C4%B1k%C3%B6y+%C4%B0stanbul&output=embed',
}

export const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

// day: JS Date#getDay index (0 = Pazar)
export const openingHours = [
  { day: 1, label: 'Pazartesi', hours: '09:00 – 20:00' },
  { day: 2, label: 'Salı', hours: '09:00 – 20:00' },
  { day: 3, label: 'Çarşamba', hours: '09:00 – 19:00' },
  { day: 4, label: 'Perşembe', hours: '09:00 – 18:30' },
  { day: 5, label: 'Cuma', hours: '09:00 – 18:30' },
  { day: 6, label: 'Cumartesi', hours: '09:00 – 18:30' },
  { day: 0, label: 'Pazar', hours: '09:00 – 20:00' },
]

export const services = [
  {
    slug: 'detayli-dis-yikama',
    title: 'Detaylı Dış Yıkama',
    short: 'Aktif köpük, iki kova tekniği ve mikrofiber kurulama ile çiziksiz yıkama.',
    description:
      'Aracınızın boyasına zarar vermeden yolun kirini, zift ve böcek kalıntılarını temizliyoruz. pH dengeli ön yıkama köpüğü, iki kova tekniği ve yumuşak mikrofiber eldivenlerle elde yıkama yapılır; kapı içleri, yakıt kapağı ve jant aralarına kadar her nokta detaylandırılır.',
    features: ['Aktif köpük ön yıkama', 'İki kova elde yıkama', 'Kapı içi & marşpiyel temizliği', 'Mikrofiber ile çiziksiz kurulama', 'Cam ve ayna temizliği'],
    image: '/images/foam-wash.png',
    category: 'Dış Bakım',
  },
  {
    slug: 'ic-detayli-temizlik',
    title: 'İç Detaylı Temizlik',
    short: 'Koltuk yıkama, tavan-döşeme, torpido ve ozon ile koku giderme.',
    description:
      'Kabin içini ilk günkü haline getiriyoruz. Kumaş koltuklar ekstraksiyon makinesi ile yıkanır, deri yüzeyler özel temizleyici ve besleyici ile bakıma alınır. Tavan döşemesi, paspaslar, bagaj, havalandırma kanalları ve torpido tek tek temizlenir; kötü kokular ozon uygulaması ile giderilir.',
    features: ['Kumaş & deri koltuk yıkama', 'Tavan ve kapı döşemesi temizliği', 'Torpido & konsol detaylandırma', 'Bagaj ve paspas yıkama', 'Ozon ile koku giderme'],
    image: '/images/interior.png',
    category: 'İç Bakım',
  },
  {
    slug: 'pasta-cila',
    title: 'Pasta & Cila',
    short: 'Makine pasta ile hare, çizik ve matlığı gideren boya düzeltme.',
    description:
      'Zamanla oluşan hareler, ince çizikler, kuş pisliği lekeleri ve oksitlenme boya kalınlığı ölçülerek kontrollü şekilde giderilir. Aracınızın durumuna göre tek ya da çok aşamalı pasta uygulanır, ardından derin parlaklık ve koruma için cila ile son kat atılır.',
    features: ['Boya kalınlık ölçümü', 'Tek / çok aşamalı makine pasta', 'Hare ve swirl giderme', 'Oksitlenme & leke düzeltme', 'Koruyucu cila son kat'],
    image: '/images/polish.png',
    category: 'Boya Bakımı',
  },
  {
    slug: 'seramik-kaplama',
    title: 'Seramik Kaplama',
    short: 'Boyayı uzun süre koruyan, su ve kiri iten cam sertliğinde katman.',
    description:
      'Pasta ile düzeltilmiş boya yüzeyine uygulanan seramik kaplama; UV ışınlarına, kuş pisliğine, ağaç reçinesine ve kimyasallara karşı kalıcı bir kalkan oluşturur. Hidrofobik yapısı sayesinde su ve kir yüzeyde tutunamaz, aracınız daha uzun süre temiz ve parlak kalır.',
    features: ['Uygulama öncesi boya hazırlığı', 'Hidrofobik (su itici) yüzey', 'UV ve kimyasal koruma', 'Derin, ıslak görünümlü parlaklık', 'Jant ve cam kaplama seçenekleri'],
    image: '/images/ceramic.png',
    category: 'Koruma',
  },
  {
    slug: 'motor-temizligi',
    title: 'Motor Temizliği',
    short: 'Elektronik aksama zarar vermeden güvenli motor bölmesi temizliği.',
    description:
      'Motor bölmesindeki yağ, toz ve kir birikimini; hassas elektronik parçalar korunarak, düşük basınç ve özel motor temizleyicileri ile temizliyoruz. Plastik ve kauçuk parçalar besleyici ile korunur, motorunuz hem göze hem de olası arıza tespitine hazır hale gelir.',
    features: ['Elektronik aksam koruması', 'Düşük basınçla güvenli yıkama', 'Yağ ve kir sökücü uygulama', 'Plastik & kauçuk besleme'],
    image: '/images/engine.png',
    category: 'Dış Bakım',
  },
  {
    slug: 'jant-lastik-bakimi',
    title: 'Jant & Lastik Bakımı',
    short: 'Demir tozu sökücü ile derin jant temizliği ve lastik parlatma.',
    description:
      'Fren tozları zamanla jantlara yapışarak kalıcı lekelere dönüşür. Demir tozu sökücü ile jantlarınızı derinlemesine temizliyor, yumuşak fırçalarla ulaşılması zor bölgeleri detaylandırıyoruz. Son olarak lastiklere mat ya da parlak bakım ürünü uygulanır.',
    features: ['Demir tozu sökücü uygulama', 'Jant içi ve kaliper temizliği', 'Lastik yanak bakımı', 'Jant seramik kaplama seçeneği'],
    image: '/images/wheel.png',
    category: 'Dış Bakım',
  },
  {
    slug: 'far-yenileme',
    title: 'Far Temizleme & Yenileme',
    short: 'Sararmış ve matlaşmış farlara netlik ve görüş güvenliği.',
    description:
      'Güneş ışığı ve zamanla sararan, buğulanan farlar hem aracınızın görünümünü bozar hem de gece görüşünü azaltır. Kademeli zımpara ve polisaj işlemleri ile far yüzeyini yeniliyor, UV koruyucu ile uzun süre berrak kalmasını sağlıyoruz.',
    features: ['Kademeli zımpara & polisaj', 'Sararma ve matlık giderme', 'UV koruyucu son kat', 'Gece görüşünde belirgin artış'],
    image: '/images/headlight.png',
    category: 'Boya Bakımı',
  },
]

export const packages = [
  {
    name: 'Hızlı Bakım',
    description: 'Günlük kullanım araçları için düzenli temizlik.',
    items: ['Aktif köpük dış yıkama', 'İç süpürge & paspas', 'Torpido silme', 'Cam temizliği', 'Lastik parlatma'],
    highlight: false,
  },
  {
    name: 'Detaylı Oto Kuaför',
    description: 'İç ve dış komple detaylandırma, en çok tercih edilen paket.',
    items: ['Detaylı dış yıkama', 'Koltuk & döşeme yıkama', 'Tavan temizliği', 'Motor temizliği', 'Jant & lastik bakımı', 'Ozon ile koku giderme'],
    highlight: true,
  },
  {
    name: 'Premium Koruma',
    description: 'Boyayı yenileyip uzun süre koruma altına alın.',
    items: ['Detaylı Oto Kuaför paketi', 'Boya kalınlık ölçümü', 'Çok aşamalı pasta & cila', 'Seramik kaplama', 'Far yenileme'],
    highlight: false,
  },
]

export const processSteps = [
  {
    title: 'Ön İnceleme',
    text: 'Aracınızı birlikte inceliyor, boya, iç döşeme ve jant durumuna göre ihtiyacı belirliyoruz.',
  },
  {
    title: 'Köpük & Ön Yıkama',
    text: 'Aktif köpük ile kiri çözüp yüzeyi çizmeden arındırıyor, detaylı işlemlere hazırlıyoruz.',
  },
  {
    title: 'Detaylı Uygulama',
    text: 'Seçtiğiniz hizmete göre iç temizlik, pasta-cila veya seramik kaplama özenle uygulanır.',
  },
  {
    title: 'Kontrol & Teslim',
    text: 'LED ışık altında son kontrol yapılır, aracınız pırıl pırıl şekilde size teslim edilir.',
  },
]

export const faqs = [
  {
    q: 'Detaylı iç-dış temizlik ne kadar sürer?',
    a: 'Aracın boyutuna ve kirlilik durumuna göre değişmekle birlikte detaylı oto kuaför işlemi genellikle birkaç saat sürer. Seramik kaplama gibi işlemler için aracınızı gün içinde bırakmanızı öneririz.',
  },
  {
    q: 'Fiyatlarınız nedir?',
    a: 'Fiyatlar aracın sınıfına (binek, SUV, ticari) ve mevcut durumuna göre belirlenir. Net fiyat için bizi arayabilir veya WhatsApp üzerinden aracınızın fotoğrafını gönderebilirsiniz.',
  },
  {
    q: 'Randevu almam gerekiyor mu?',
    a: 'Hızlı yıkama için doğrudan gelebilirsiniz. Detaylı temizlik, pasta-cila ve seramik kaplama için önceden randevu almanız beklemeden hizmet almanızı sağlar.',
  },
  {
    q: 'Seramik kaplama ne kadar dayanır?',
    a: 'Kullanılan ürüne ve aracın bakımına bağlı olarak uzun yıllar koruma sağlar. Uygulama sonrası bakım önerilerimizi de size iletiyoruz.',
  },
  {
    q: 'Nerede bulunuyorsunuz?',
    a: 'Kadıköy Göztepe’de, Fahrettin Kerim Gökay Caddesi No:140 adresindeki Opet istasyonu içerisindeyiz. Yakıt alırken aracınızı bize bırakabilirsiniz.',
  },
]

export const galleryItems = [
  { src: '/images/hero.png', title: 'Showroom parlaklığı', category: 'Pasta & Cila' },
  { src: '/images/ceramic.png', title: 'Seramik kaplama sonrası su itici yüzey', category: 'Seramik Kaplama' },
  { src: '/images/interior.png', title: 'Deri koltuk derin temizlik', category: 'İç Temizlik' },
  { src: '/images/foam-wash.png', title: 'Aktif köpük ön yıkama', category: 'Dış Yıkama' },
  { src: '/images/polish.png', title: 'Makine pasta ile boya düzeltme', category: 'Pasta & Cila' },
  { src: '/images/headlight.png', title: 'Far yenileme: önce & sonra', category: 'Far Yenileme' },
  { src: '/images/wheel.png', title: 'Demir tozu sökücü ile jant temizliği', category: 'Dış Yıkama' },
  { src: '/images/engine.png', title: 'Motor bölmesi detaylandırma', category: 'Dış Yıkama' },
  { src: '/images/studio.png', title: 'Opet Göztepe stüdyomuz', category: 'Stüdyo' },
]
