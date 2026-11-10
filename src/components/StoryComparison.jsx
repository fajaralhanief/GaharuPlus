import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function StoryComparison() {
  return (
    <section id="keunggulan" className="py-24 bg-linen-100 relative overflow-hidden">
      {/* Background Subtle Ancient Forest Texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Natural Visual Accent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-amberGold-600 block">
            Eksklusivitas Alami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Mengapa Kayu Gaharu Disebut <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">"Kayu Para Raja"?</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed">
            Sejak zaman kerajaan kuno nusantara dan tabib ternama dunia, getah gaharu (<em className="font-medium text-forest-900">Aquilaria</em>) dihargai melebihi emas berkat kekuatan terapeutiknya yang sanggup merelaksasi sistem saraf pusat, membuka titik cakra energi, dan menenangkan batin.
          </p>
        </motion.div>

        {/* Head-to-Head Interactive Comparison */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          
          {/* Box Minyak Balur Biasa */}
          <motion.div 
            variants={slideUp}
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-white border border-red-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Thumbnail: Murky / Ordinary Oil */}
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-linen-200">
              <img 
                src="https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80" 
                alt="Minyak Herbal Konvensional Umum" 
                className="w-full h-full object-cover grayscale opacity-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              <span className="absolute top-3 left-4 text-xs font-bold text-red-700 bg-red-100/90 px-3 py-1 rounded-full border border-red-200">
                Formula Konvensional Biasa
              </span>
            </div>

            <div className="p-8 sm:p-10 pt-2">
              <div className="flex items-center justify-between pb-6 border-b border-linen-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-red-500">Kelemahan Produk Lain</span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-800 mt-1">Minyak Balur Biasa</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-lg">
                  <X className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 pt-6 text-sm sm:text-base text-charcoal-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✕
                  </span>
                  <span><strong>Aroma jamu menyengat</strong> yang tajam, menusuk hidung, dan membuat kurang percaya diri saat dipakai di luar rumah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✕
                  </span>
                  <span><strong>Tekstur sangat lengket & berminyak</strong>, lama meresap, dan meninggalkan noda kuning kotor pada sprei serta pakaian.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✕
                  </span>
                  <span><strong>Sensasi panas perih di permukaan kulit</strong> yang memicu iritasi dan rasa terbakar, bukan kehangatan yang meresap ke otot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✕
                  </span>
                  <span>Komposisi umum tanpa bahan adaptogen khusus untuk relaksasi saraf dan perbaikan kualitas tidur.</span>
                </li>
              </ul>
            </div>
            
            <div className="px-8 pb-8 pt-0 border-t border-linen-200 text-xs text-charcoal-500 italic">
              *Banyak pengguna mengeluhkan bau jamu tajam dan rasa lengket berlebih pada produk konvensional.
            </div>
          </motion.div>

          {/* Box Gaharu Plus (The Premium Choice) */}
          <motion.div 
            variants={slideUp}
            whileHover={{ y: -6, boxShadow: '0 30px 60px -15px rgba(17, 37, 25, 0.25)' }}
            className="rounded-3xl bg-forest-900 border-2 border-amberGold-400 shadow-luxury text-linen-50 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Thumbnail: Pure Golden Herbal Elixir Droplet */}
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-forest-950">
              <img 
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80" 
                alt="Minyak Herbal Gaharu Plus Murni Berkualitas" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent" />
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <span className="text-xs font-bold text-forest-950 bg-amberGold-500 px-3 py-1 rounded-full shadow-md">
                  Inovasi Ekstrak Gaharu Grade A
                </span>
              </div>
            </div>

            {/* Subtle Gold Aura */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amberGold-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="p-8 sm:p-10 pt-2">
              <div className="flex items-center justify-between pb-6 border-b border-forest-800">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amberGold-300">Standar Kemewahan Baru</span>
                  <h3 className="font-serif text-2xl font-bold text-linen-50 mt-1 flex items-center gap-2">
                    Gaharu Plus 
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amberGold-500 text-forest-950 font-sans font-bold">
                      Grade A
                    </span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-amberGold-500 text-forest-950 flex items-center justify-center font-bold text-lg">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
              </div>

              <ul className="space-y-4 pt-6 text-sm sm:text-base text-linen-200">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amberGold-400 text-forest-950 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-amberGold-300">Aroma Mewah & Menenangkan (Oud Aromatherapeutic):</strong> Wangi kayu gaharu yang anggun seperti spa bintang lima, merilekskan pikiran dari stres.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amberGold-400 text-forest-950 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-amberGold-300">Nano Herbal Penetrasi Tinggi:</strong> Minyak mudah dibalur, cepat diserap pori-pori kulit tanpa meninggalkan rasa lengket ataupun noda pakaian.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amberGold-400 text-forest-950 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-amberGold-300">Hangat Menembus Otot Terdalam:</strong> Tidak membakar kulit luar, rasa hangat bertahan berjam-jam untuk mengurai ketegangan sendi & otot kaku.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amberGold-400 text-forest-950 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-amberGold-300">Sinergi 7 Botanical Elixir:</strong> Kombinasi Gaharu murni, Jahe Merah, Cengkeh, VCO, dan Serai Wangi yang bekerja secara holistik.</span>
                </li>
              </ul>
            </div>

            <div className="px-8 pb-8 pt-0 border-t border-forest-800 flex items-center justify-between text-xs text-amberGold-300 font-semibold">
              <span>Formula Disempurnakan untuk Keseharian</span>
              <span className="inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amberGold-400" />
                100% Kepuasan Pelanggan
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
