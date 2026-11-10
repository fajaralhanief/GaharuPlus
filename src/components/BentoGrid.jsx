import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Activity, 
  Wind, 
  Compass, 
  Zap, 
  ShieldAlert, 
  ArrowUpRight 
} from 'lucide-react';

export default function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Khasiat (6)' },
    { id: 'sendi', label: 'Pegal & Sendi' },
    { id: 'tidur', label: 'Tidur & Relaksasi' },
    { id: 'masukangin', label: 'Masuk Angin & Pencernaan' },
  ];

  const benefits = [
    {
      id: 1,
      category: 'tidur',
      tag: 'Aromaterapi Relaksasi',
      title: 'Tidur Pulas & Anti Insomnia',
      description: 'Aroma resin kayu gaharu menstimulasi gelombang alfa di otak, meredakan kecemasan saraf, dan membantu Anda tertidur lebih lelap hingga bangun pagi dengan energi penuh.',
      point: 'Telapak Kaki & Tengkuk',
      icon: Moon,
      color: 'amber'
    },
    {
      id: 2,
      category: 'sendi',
      tag: 'Pereda Nyeri Alami',
      title: 'Redakan Pegal, Linu & Rematik',
      description: 'Kandungan alami eugenol dan anti-inflamasi dari rempah cengkeh & gaharu melancarkan mikrosirkulasi darah, meredakan peradangan sendi dan pegal otot punggung.',
      point: 'Sepanjang Tulang Belakang',
      icon: Activity,
      color: 'forest'
    },
    {
      id: 3,
      category: 'masukangin',
      tag: 'Kehangatan Nyaman',
      title: 'Usir Masuk Angin & Kembung',
      description: 'Perpaduan jahe merah dan serai wangi memberikan rasa hangat mendalam di perut, melancarkan pelepasan gas berlebih, dan meredakan rasa mual serta begah.',
      point: 'Area Perut & Dada',
      icon: Wind,
      color: 'amber'
    },
    {
      id: 4,
      category: 'tidur',
      tag: 'Relaksasi Kepala & Leher',
      title: 'Atasi Migrain & Vertigo',
      description: 'Cukup oleskan tipis di pelipis, dahi, dan belakang telinga. Keharuman gaharu seketika melepaskan ketegangan pembuluh darah akibat kelelahan bekerja.',
      point: 'Pelipis, Dahi & Tengkuk',
      icon: Compass,
      color: 'forest'
    },
    {
      id: 5,
      category: 'sendi',
      tag: 'Restorasi Sel & Otot',
      title: 'Atasi Asam Laktat & Keseleo',
      description: 'Bagi Anda yang berolahraga atau bekerja fisik intens, baluran minyak ini mempercepat penguraian timbunan asam laktat serta membantu memulihkan ligamen otot.',
      point: 'Otot Betis, Paha & Pinggang',
      icon: Zap,
      color: 'amber'
    },
    {
      id: 6,
      category: 'masukangin',
      tag: 'Proteksi Kulit Lembut',
      title: 'Redakan Gatal & Gigitan Nyamuk',
      description: 'Minyak kelapa murni (VCO) dan serai wangi alami menjaga kelembapan kulit, menenangkan ruam kemerahan, serta bekerja sebagai repellent alami pengusir serangga.',
      point: 'Area Kulit Bermasalah',
      icon: ShieldAlert,
      color: 'forest'
    },
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
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-forest-700 block">
            Khasiat Holistik
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Satu Sentuhan Alami, <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Sejuta Khasiat Kebugaran</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Diformulasikan khusus untuk menjaga kebugaran seluruh anggota keluarga, mulai dari orang tua, pekerja aktif, hingga anak-anak.
          </p>

          {/* Interactive Filter Tabs with Animated Sliding Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-white' : 'text-forest-900 hover:text-forest-950 bg-linen-200/80 hover:bg-linen-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-forest-900 rounded-full shadow-md -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Grid with Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-8 rounded-3xl bg-white border border-linen-300 shadow-sm hover:shadow-luxury hover:border-amberGold-400/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        item.color === 'amber' 
                          ? 'bg-amberGold-50 text-amberGold-700' 
                          : 'bg-forest-50 text-forest-700'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-charcoal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                      item.color === 'amber' ? 'text-amberGold-600' : 'text-forest-600'
                    }`}>
                      {item.tag}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-linen-200 flex items-center justify-between text-xs font-semibold text-forest-800">
                    <span>Rekomendasi Titik:</span>
                    <span className="text-amberGold-700 font-bold">{item.point}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

