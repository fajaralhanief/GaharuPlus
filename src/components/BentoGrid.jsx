import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Activity, 
  Wind, 
  Compass, 
  Zap, 
  ShieldAlert, 
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Heart,
  Droplets,
  Flame
} from 'lucide-react';

export default function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Khasiat (17)' },
    { id: 'kulit', label: 'Anti Gatal & Kulit' },
    { id: 'sendi', label: 'Sendi, Saraf & Nyeri' },
    { id: 'sirkulasi', label: 'Pencernaan & Sirkulasi' },
    { id: 'relaksasi', label: 'Tidur & Yin Yang' },
  ];

  // 6 Main Bento Highlight Cards
  const benefits = [
    {
      id: 1,
      category: 'kulit',
      tag: 'Formula Anti Gatal & Alergi',
      title: 'Anti Gatal, Alergi & Antiseptik Kulit',
      description: 'Meredakan gatal akibat alergi dan gigitan serangga, membantu menyembuhkan kutil, menjaga elastisitas kulit, serta menetralisir racun di permukaan kulit tanpa rasa lengket.',
      point: 'Kulit Bermasalah & Gigitan Serangga',
      icon: ShieldAlert,
      color: 'amber'
    },
    {
      id: 2,
      category: 'sendi',
      tag: 'Nyeri Saraf & Sendi Akut',
      title: 'Rematik, Asam Urat & Syaraf Kejepit',
      description: 'Bekerja aktif meredakan kesemutan, neuropati diabetik, tegang leher, nyeri sendi, hingga salah urat dan bengkak akibat keseleo, luka terpukul, atau beri-beri.',
      point: 'Titik Sendi & Sepanjang Tulang Belakang',
      icon: Activity,
      color: 'forest'
    },
    {
      id: 3,
      category: 'sirkulasi',
      tag: 'Energi Tubuh & Aliran Darah',
      title: 'Lancar Sirkulasi & Stagnasi Ci',
      description: 'Meningkatkan sirkulasi peredaran darah, meredakan pegal linu seluruh tubuh, kram otot, serta membantu menyeimbangkan Yin-Yang dan membuyarkan stagnasi Ci.',
      point: 'Titik Meridian & Garis Otot Tubuh',
      icon: Zap,
      color: 'amber'
    },
    {
      id: 4,
      category: 'relaksasi',
      tag: 'Aromaterapi Penenang Jiwa',
      title: 'Tidur Pulas & Pereda Stres',
      description: 'Aroma getah gaharu dan kayu cendana asli bekerja sebagai obat penenang relaksasi, melepas kecemasan saraf, meredakan migrain dan vertigo, serta menyembuhkan insomnia.',
      point: 'Pelipis, Dahi & Telapak Kaki',
      icon: Moon,
      color: 'forest'
    },
    {
      id: 5,
      category: 'sirkulasi',
      tag: 'Kenyamanan Lambung & Perut',
      title: 'Maag, Begah, Mual & Kembung',
      description: 'Meringankan gangguan pencernaan dan mabuk perjalanan dengan menguraikan gas lambung berlebih, menghangatkan rongga dada, dan melegakan tarikan pernapasan.',
      point: 'Area Perut, Pusar & Dada',
      icon: Wind,
      color: 'amber'
    },
    {
      id: 6,
      category: 'relaksasi',
      tag: 'Keharmonisan Pasangan',
      title: 'Aroma Relaksasi & Tambah Gairah',
      description: 'Keharuman alami getah gaharu eksklusif berfungsi sebagai afrodisiak aromatik alami yang menstimulasi keintiman, menambah gairah, dan menguatkan keharmonisan suami-istri.',
      point: 'Aroma Relaksasi & Titik Tubuh Pilihan',
      icon: Heart,
      color: 'forest'
    },
  ];

  // 17 Complete Official Benefit Checklist
  const all17Benefits = [
    { title: 'Gatal-gatal karena alergi & gigitan serangga', group: 'Kulit & Alergi' },
    { title: 'Bengkak luka terpukul, keseleo & salah urat', group: 'Otot & Cedera' },
    { title: 'Nyeri karena rematik & asam urat', group: 'Sendi & Tulang' },
    { title: 'Nyeri neuropati diabetik & kebas', group: 'Saraf & Nyeri' },
    { title: 'Kesemutan, syaraf kejepit & tegang leher', group: 'Saraf & Nyeri' },
    { title: 'Meringankan pegal linu & otot kejang/kram', group: 'Otot & Cedera' },
    { title: 'Meningkatkan sirkulasi peredaran darah', group: 'Sirkulasi & Energi' },
    { title: 'Stabilkan Yin Yang & buyarkan stagnasi Ci', group: 'Sirkulasi & Energi' },
    { title: 'Gangguan pencernaan: mual, maag & kembung', group: 'Pencernaan' },
    { title: 'Vertigo, migrain, sakit kepala & mabuk perjalanan', group: 'Kepala & Saraf' },
    { title: 'Bengkak karena beri-beri', group: 'Otot & Cedera' },
    { title: 'Membantu menyembuhkan kutil', group: 'Kulit & Alergi' },
    { title: 'Menjaga elastisitas kulit & antiseptik alami', group: 'Kulit & Alergi' },
    { title: 'Menetralisir racun yang menempel di kulit', group: 'Kulit & Alergi' },
    { title: 'Penenang pikiran & pereda stres (aroma relaksasi)', group: 'Relaksasi & Tidur' },
    { title: 'Menambah gairah saat berhubungan intim', group: 'Relaksasi & Tidur' },
    { title: 'Cepat meresap, melembutkan kulit & tidak lengket', group: 'Tekstur Nyaman' },
  ];

  const filteredBenefits = activeCategory === 'all' 
    ? benefits 
    : benefits.filter(b => b.category === activeCategory);

  return (
    <section id="manfaat" className="py-24 bg-linen-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-bold uppercase tracking-widest border border-forest-800/20">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            Formula Anti Gatal & Alergi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Khasiat Lengkap & Kegunaan <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Minyak Balur Gaharu Plus</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Satu botol dengan khasiat komprehensif: meredakan nyeri saraf sendi, menuntaskan gatal alergi, melancarkan peredaran darah, hingga menjaga ketenangan batin.
          </p>
        </motion.div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive 
                    ? 'text-linen-50 shadow-md' 
                    : 'text-charcoal-700 bg-white hover:bg-linen-100 border border-linen-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-forest-900 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Interactive Bento Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredBenefits.map((item) => {
              const IconComponent = item.icon;
              const isDark = item.color === 'forest';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between border shadow-sm hover:shadow-luxury ${
                    isDark 
                      ? 'bg-forest-900 text-linen-100 border-forest-800' 
                      : 'bg-white text-forest-950 border-linen-300'
                  }`}
                >
                  <div>
                    {/* Top Tag & Icon Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                        isDark 
                          ? 'bg-forest-800 text-amberGold-300 border border-amberGold-400/20' 
                          : 'bg-amberGold-50 text-amberGold-800 border border-amberGold-200'
                      }`}>
                        {item.tag}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-forest-800 text-amberGold-400' : 'bg-forest-50 text-forest-800'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-3 ${
                      isDark ? 'text-linen-50' : 'text-forest-950'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-linen-300' : 'text-charcoal-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Recommended Balur Target Point */}
                  <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium ${
                    isDark ? 'border-forest-800 text-linen-300' : 'border-linen-200 text-charcoal-500'
                  }`}>
                    <span>Titik Balur:</span>
                    <strong className={isDark ? 'text-amberGold-400' : 'text-forest-900'}>
                      {item.point}
                    </strong>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Complete 17 Khasiat Checklist Drawer / Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-forest-900 text-linen-100 border border-amberGold-500/30 shadow-luxury"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amberGold-400 font-bold">
              Katalog Khasiat Medis & Tradisional
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen-50">
              Daftar Lengkap 17 Manfaat Gaharu Plus
            </h3>
            <p className="text-xs sm:text-sm text-linen-300">
              Diolah higienis untuk mengatasi berbagai macam keluhan harian keluarga Anda dalam satu botol praktis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {all17Benefits.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-forest-950/70 border border-forest-800/80 flex items-start gap-3 hover:border-amberGold-500/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-amberGold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-linen-100 leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-amberGold-400/90 font-medium block mt-1">
                    Kategori: {item.group}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice: Tidak Lengket & Cepat Menyerap */}
          <div className="mt-8 pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-linen-300">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-amberGold-400" />
              <span>Tekstur premium: <strong>Tidak lengket</strong>, cepat menyerap ke pori-pori, dan melembutkan kulit.</span>
            </div>
            <a 
              href="#panduan-balur" 
              className="text-amberGold-400 hover:text-amberGold-300 font-bold underline underline-offset-4"
            >
              Lihat Cara Pemakaian & Titik Balur &rarr;
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
