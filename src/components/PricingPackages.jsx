import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Truck, ShieldCheck, Zap, Headphones, Gift } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function PricingPackages() {
  const packages = [
    {
      id: 1,
      badge: 'Paket Personal',
      name: '1 Botol Gaharu Plus',
      description: 'Cocok untuk pemula yang ingin mencoba khasiatnya.',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80',
      oldPrice: 'Rp 230.000',
      price: 'Rp 175.000',
      unit: '/ botol 100ml',
      savings: 'Hemat Rp 55.000',
      isPopular: false,
      features: [
        { text: '1x Minyak Balur Gaharu Plus 100ml', available: true },
        { text: 'Panduan Titik Balur Cetak', available: true },
        { text: 'Packing Bubble Wrap Tebal', available: true },
        { text: 'Belum Termasuk Promo Gratis Ongkir', available: false },
      ],
      ctaText: 'Pesan 1 Botol via WhatsApp',
      waMessage: 'Halo Admin Gaharu Plus, saya ingin memesan Paket 1 Botol (Rp 175.000). Mohon info ketersediaan dan ongkos kirim ke alamat saya.'
    },
    {
      id: 2,
      badge: 'Paket Rekomendasi',
      name: 'Paket Duo Sehat',
      description: 'Pilihan terpopuler: 1 untuk di rumah, 1 untuk bepergian/orang tua.',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80',
      oldPrice: 'Rp 460.000',
      price: 'Rp 310.000',
      unit: '/ 2 botol (@100ml)',
      savings: 'Hemat Rp 150.000 + Bonus',
      isPopular: true,
      features: [
        { text: '2x Minyak Balur Gaharu Plus 100ml', available: true, bold: true },
        { text: 'GRATIS 1x Roll-On Aromaterapi 10ml', available: true, highlight: true },
        { text: 'Buku Panduan Titik Balur Lengkap', available: true },
        { text: 'Subsidi Ongkos Kirim Seluruh Indonesia', available: true },
      ],
      ctaText: 'Ambil Paket Duo Hemat Ini →',
      waMessage: 'Halo Admin Gaharu Plus, saya ingin memesan Paket Duo Sehat (2 Botol + Gratis Roll-On) seharga Rp 310.000. Mohon info pengiriman.'
    },
    {
      id: 3,
      badge: 'Paket Lengkap Keluarga',
      name: 'Paket Keluarga Harmoni',
      description: 'Paling hemat untuk seluruh keluarga & persediaan rutin.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
      oldPrice: 'Rp 690.000',
      price: 'Rp 420.000',
      unit: '/ 3 botol (@100ml)',
      savings: 'Hemat Rp 270.000 + Bebas Ongkir',
      isPopular: false,
      features: [
        { text: '3x Minyak Balur Gaharu Plus 100ml', available: true, bold: true },
        { text: 'GRATIS 2x Roll-On Aromaterapi 10ml', available: true, highlight: true },
        { text: 'GRATIS ONGKIR SELURUH INDONESIA', available: true, bold: true },
        { text: 'Prioritas Konsultasi Tim Herbal', available: true },
      ],
      ctaText: 'Pesan Paket Keluarga Harmoni',
      waMessage: 'Halo Admin Gaharu Plus, saya ingin memesan Paket Keluarga Harmoni (3 Botol + Gratis Ongkir) seharga Rp 420.000. Mohon proses pesanan saya.'
    }
  ];

  return (
    <section id="paket" className="py-24 bg-linen-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-amberGold-600 block">
            Penawaran Terbatas Hari Ini
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Pilih Paket Kebugaran <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Gaharu Plus Asli</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Dapatkan harga promo peluncuran resmi langsung dari produsen. Garansi 100% Produk Original & Layanan Pengiriman Cepat.
          </p>
        </motion.div>

        {/* 3 Tier Pricing Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
        >
          {packages.map((pkg) => {
            if (pkg.isPopular) {
              return (
                <motion.div
                  key={pkg.id}
                  variants={slideUp}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-forest-900 text-linen-100 border-2 border-amberGold-400 shadow-luxury flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-4"
                >
                  <div className="absolute top-4 right-4 bg-amberGold-500 text-forest-950 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm z-10">
                    Paling Laris ★
                  </div>

                  {/* Visual Package Thumbnail */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-950">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-8 sm:p-10 pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-amberGold-300 block mb-1">
                      {pkg.badge}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-linen-50 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-linen-300 mb-6">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-6 pb-6 border-b border-forest-800">
                      <span className="text-xs text-linen-400 line-through block">
                        {pkg.oldPrice}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-serif text-linen-50 font-bold">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-amberGold-300">
                          {pkg.unit}
                        </span>
                      </div>
                      <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-bold bg-amberGold-500 text-forest-950">
                        {pkg.savings}
                      </span>
                    </div>

                    <ul className="space-y-3.5 text-xs sm:text-sm text-linen-200 mb-8">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amberGold-400 font-bold flex-shrink-0" />
                          <span className={f.highlight ? 'text-amberGold-300 font-semibold' : f.bold ? 'font-bold' : ''}>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8 pt-0">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(pkg.waMessage)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-full bg-amberGold-500 hover:bg-amberGold-400 text-forest-950 font-extrabold text-sm sm:text-base text-center transition-all duration-200 block shadow-lg"
                    >
                      {pkg.ctaText}
                    </motion.a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={pkg.id}
                variants={slideUp}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white border border-linen-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Package Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-linen-200">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-8 pt-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-charcoal-500 block mb-1">
                    {pkg.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6 pb-6 border-b border-linen-200">
                    <span className="text-xs text-charcoal-400 line-through block">
                      {pkg.oldPrice}
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-serif text-forest-950 font-bold">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-charcoal-500">
                        {pkg.unit}
                      </span>
                    </div>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-forest-100 text-forest-800">
                      {pkg.savings}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-charcoal-600 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {f.available ? (
                          <Check className="w-4 h-4 text-emerald-600 font-bold flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-charcoal-400 flex-shrink-0" />
                        )}
                        <span className={!f.available ? 'text-charcoal-400' : f.bold ? 'font-bold text-forest-900' : ''}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(pkg.waMessage)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-forest-900 hover:bg-forest-850 text-linen-50 font-bold text-sm text-center transition-all duration-200 block"
                  >
                    {pkg.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4 Trust Highlights Below Pricing */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-charcoal-600"
        >
          <div className="p-4 rounded-2xl bg-white border border-linen-200">
            <Truck className="w-5 h-5 text-forest-700 mx-auto mb-1.5" />
            <span className="font-bold text-forest-900 block">Bisa Bayar di Tempat</span>
            <span>COD Seluruh Indonesia</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-linen-200">
            <ShieldCheck className="w-5 h-5 text-forest-700 mx-auto mb-1.5" />
            <span className="font-bold text-forest-900 block">Garansi Uang Kembali</span>
            <span>100% Produk Original</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-linen-200">
            <Zap className="w-5 h-5 text-forest-700 mx-auto mb-1.5" />
            <span className="font-bold text-forest-900 block">Pengiriman Cepat</span>
            <span>Order Hari Ini Kirim Hari Ini</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-linen-200">
            <Headphones className="w-5 h-5 text-forest-700 mx-auto mb-1.5" />
            <span className="font-bold text-forest-900 block">Konsultasi Ramah</span>
            <span>Didampingi Tim Herbal</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
