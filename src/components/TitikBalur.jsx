import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, Flame, Activity } from 'lucide-react';

export default function TitikBalur() {
  const [selectedPoint, setSelectedPoint] = useState('tulang-belakang');

  const pointsData = {
    'tulang-belakang': {
      number: '1',
      category: 'TITIK FOKUS 1',
      title: 'Sepanjang Tulang Belakang',
      badge: 'Wajib Setiap Hari',
      step1: 'Tuang secukupnya Gaharu Plus ke telapak tangan. Gosok kedua telapak tangan selama 3-5 detik hingga minyak terasa hangat.',
      step2: 'Balurkan secara merata dari tengkuk leher turun perlahan ke tulang ekor dengan tekanan lembut sampai meresap ke dalam pori-pori.',
      step3: 'Selesaikan dengan meminum segelas air putih hangat untuk mempercepat proses sirkulasi darah dan pembuangan toksin tubuh.',
      activeVisual: 'spine'
    },
    'telapak-kaki': {
      number: '2',
      category: 'TITIK FOKUS 2',
      title: 'Telapak & Sela Jari Kaki',
      badge: 'Pereda Insomnia & Stres',
      step1: 'Tuangkan 3-5 tetes minyak langsung ke bagian cekungan telapak kaki dan setiap sela-sela jari kaki kiri dan kanan.',
      step2: 'Pijat melingkar dengan ibu jari selama 2-3 menit pada masing-masing telapak kaki hingga terasa hangat dan rileks.',
      step3: 'Gunakan kaus kaki bersih jika diinginkan agar rasa hangat meresap lebih tahan lama sepanjang malam tidur.',
      activeVisual: 'feet'
    },
    'dada-perut': {
      number: '3',
      category: 'TITIK FOKUS 3',
      title: 'Area Dada & Perut',
      badge: 'Atasi Begah & Kembung',
      step1: 'Balurkan minyak secara melingkar di sekeliling pusar searah putaran jarum jam selama 1-2 menit.',
      step2: 'Usapkan lembut dari bagian ulu hati naik ke arah dada untuk melegakan rongga pernapasan dan saluran tenggorokan.',
      step3: 'Hindari langsung mandi air dingin setelah pembaluran agar kehangatan rempah tidak terganggu.',
      activeVisual: 'chest'
    },
    'keluhan-khusus': {
      number: '4',
      category: 'TITIK FOKUS 4',
      title: 'Area Sendi & Titik Keluhan',
      badge: 'Target Pemulihan Nyeri',
      step1: 'Identifikasi bagian sendi yang ngilu atau bengkak (lutut, bahu, pinggang, atau pergelangan kaki).',
      step2: 'Balurkan minyak sedikit lebih tebal di titik keluhan, kemudian lakukan usapan lembut tanpa memijat terlalu keras jika ada radang.',
      step3: 'Ulangi setiap 3-4 jam sekali hingga rasa nyeri mereda dan persendian terasa lebih lentur digerakkan.',
      activeVisual: 'joints'
    }
  };

  const currentData = pointsData[selectedPoint];

  return (
    <section id="panduan-balur" className="py-24 bg-forest-950 text-linen-100 relative overflow-hidden">
      {/* Ambient Backlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amberGold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-amberGold-400 block">
            Metode Balur Tradisional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-linen-50">
            Panduan 4 Titik Kunci <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Pembaluran Tubuh Holistik</span>
          </h2>
          <p className="text-linen-300 text-base sm:text-lg">
            Khasiat minyak balur bekerja optimal saat dibalurkan pada titik meridian saraf yang langsung terhubung ke organ dalam dan simpul saraf tubuh.
          </p>
        </motion.div>

        {/* Interactive Balur Points Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Selector Tabs (Left - 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {Object.keys(pointsData).map((key) => {
              const item = pointsData[key];
              const isSelected = selectedPoint === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setSelectedPoint(key)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-forest-900 border-amberGold-500/70 shadow-lg' 
                      : 'bg-forest-900/40 border-forest-800 hover:border-amberGold-500/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-amberGold-500 text-forest-950 shadow-md' 
                        : 'bg-forest-800 text-linen-300'
                    }`}>
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-linen-50">
                        {item.title}
                      </h4>
                      <p className="text-xs text-linen-300 mt-1 leading-relaxed">
                        {item.step1.slice(0, 105)}...
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Anatomical Visual (Right - 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-card-dark border border-forest-700/80 relative shadow-luxury">
              
              {/* Header Box */}
              <div className="flex items-center justify-between pb-5 border-b border-forest-800 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amberGold-400 font-bold">
                    {currentData.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-linen-50 mt-1">
                    {currentData.title}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-forest-800/80 text-amberGold-300 text-xs font-semibold border border-amberGold-500/30 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amberGold-400 animate-pulse" />
                  <span>{currentData.badge}</span>
                </div>
              </div>

              {/* Grid: Clear SVG Body Silhouette (Left) + Step Instructions (Right) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Refined Anatomical Human Body SVG Visual */}
                <div className="md:col-span-5 flex flex-col items-center justify-center py-6 px-4 bg-forest-950/80 rounded-2xl border border-forest-800/80 relative overflow-hidden shadow-inner">
                  
                  {/* Subtle Top Indicator Pill */}
                  <div className="mb-3 px-3 py-1 rounded-full bg-forest-900/90 border border-forest-700/60 text-[10px] text-amberGold-300 font-medium tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400 animate-ping" />
                    <span>Titik Terstimulasi</span>
                  </div>

                  <svg 
                    className="w-full max-w-[190px] h-72 sm:h-80 drop-shadow-2xl transition-all duration-500" 
                    viewBox="0 0 200 320" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Visualisasi Anatomi Titik Balur Tubuh"
                  >
                    <defs>
                      {/* Gradient Tubuh Manusia Organik */}
                      <linearGradient id="bodyGradient" x1="100" y1="10" x2="100" y2="310" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1C3F2B" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#163222" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0E2216" stopOpacity="0.95" />
                      </linearGradient>

                      {/* Radial Aura Cahaya Getah Gaharu */}
                      <radialGradient id="meridianAura" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#E3B03E" stopOpacity="0.85" />
                        <stop offset="45%" stopColor="#D59B1E" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#D59B1E" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Garis Meridian Penyelaras Anatomi (Grid Halus) */}
                    <g opacity="0.12" stroke="#428E63" strokeWidth="0.8" strokeDasharray="2 3">
                      <line x1="30" y1="68" x2="170" y2="68" />
                      <line x1="30" y1="110" x2="170" y2="110" />
                      <line x1="30" y1="150" x2="170" y2="150" />
                      <line x1="30" y1="225" x2="170" y2="225" />
                      <line x1="100" y1="10" x2="100" y2="310" strokeWidth="0.5" />
                    </g>

                    {/* SILUET TUBUH ANATOMIS MANUSIA YANG JELAS & PROPORSIONAL */}
                    <path 
                      d="
                        M100 16
                        C107 16 112 21 112 28
                        C112 36 108 43 105 46
                        C105 48 107 53 111 55
                        C118 57 127 61 133 67
                        C138 72 140 78 140 85
                        L141 125
                        C141 135 139 146 138 156
                        C137 163 134 169 130 171
                        C127 172 125 169 125 165
                        L127 135
                        C128 120 128 108 126 95
                        C125 90 122 86 118 84
                        C116 89 116 102 116 115
                        C116 126 114 136 116 146
                        C118 155 120 164 121 174
                        C121 184 117 195 116 206
                        C115 218 115 230 114 240
                        C113 248 114 256 114 266
                        C114 275 113 285 112 294
                        C111 300 114 304 117 305
                        C120 306 120 309 118 310
                        L104 310
                        C102 309 103 305 105 301
                        L107 282
                        C107 266 107 250 106 235
                        C105 215 104 195 102 175
                        L100 175
                        L98 175
                        C96 195 95 215 94 235
                        C93 250 93 266 93 282
                        L95 301
                        C97 305 98 309 96 310
                        L82 310
                        C80 309 80 306 83 305
                        C86 304 89 300 88 294
                        C87 285 86 275 86 266
                        C86 256 87 248 86 240
                        C85 230 85 218 84 206
                        C83 195 79 184 79 174
                        C80 164 82 155 84 146
                        C86 136 84 126 84 115
                        C84 102 84 89 82 84
                        C78 86 75 90 74 95
                        C72 108 72 120 73 135
                        L75 165
                        C75 169 73 172 70 171
                        C66 169 63 163 62 156
                        C61 146 59 135 59 125
                        L60 85
                        C60 78 62 72 67 67
                        C73 61 82 57 89 55
                        C93 53 95 48 95 46
                        C92 43 88 36 88 28
                        C88 21 93 16 100 16
                        Z
                      "
                      fill="url(#bodyGradient)"
                      stroke="#2E6646"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />

                    {/* Garis Halus Tulang Selangka / Clavicle */}
                    <path 
                      d="M88 62C94 64 97 65 100 65C103 65 106 64 112 62" 
                      stroke="#428E63" 
                      strokeWidth="1.2" 
                      strokeLinecap="round" 
                      opacity="0.6"
                    />

                    {/* 1. SEPANJANG TULANG BELAKANG (SPINE MERIDIAN) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'spine' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Kolom Tulang Belakang */}
                      <line x1="100" y1="62" x2="100" y2="170" stroke="#D59B1E" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
                      <line x1="100" y1="62" x2="100" y2="170" stroke="#E3B03E" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Titik Vertebrae / Simpul Saraf */}
                      <circle cx="100" cy="65" r="4.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'spine' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="85" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="100" cy="110" r="5.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'spine' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="138" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="100" cy="165" r="4" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 2. TELAPAK & SELA JARI KAKI (FEET REFLEXOLOGY) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'feet' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Telapak Kaki */}
                      <ellipse cx="89" cy="304" rx="10" ry="6" fill="#E3B03E" opacity="0.5" className={currentData.activeVisual === 'feet' ? 'animate-pulse' : ''} />
                      <ellipse cx="111" cy="304" rx="10" ry="6" fill="#E3B03E" opacity="0.5" className={currentData.activeVisual === 'feet' ? 'animate-pulse' : ''} />
                      {/* Titik Pusat Refleksi Kaki */}
                      <circle cx="89" cy="304" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="111" cy="304" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 3. AREA DADA & PERUT (CHEST & ABDOMINAL MERIDIAN) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'chest' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Lingkaran Dada (Chakra Jantung / Rongga Dada) */}
                      <circle cx="100" cy="90" r="16" fill="url(#meridianAura)" className={currentData.activeVisual === 'chest' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="90" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      
                      {/* Aura Lingkaran Perut (Solar Plexus & Pusar) */}
                      <circle cx="100" cy="132" r="19" fill="url(#meridianAura)" className={currentData.activeVisual === 'chest' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="132" r="7" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 4. AREA SENDI & TITIK KELUHAN (KEY ARTICULATIONS & JOINTS) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'joints' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Sendi Bahu Kiri & Kanan */}
                      <circle cx="72" cy="74" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      <circle cx="128" cy="74" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      {/* Sendi Pergelangan Tangan / Jari */}
                      <circle cx="60" cy="162" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="140" cy="162" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      {/* Sendi Lutut Kiri & Kanan */}
                      <circle cx="88" cy="225" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      <circle cx="112" cy="225" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                    </g>
                  </svg>

                  <span className="text-[11px] text-linen-300 font-medium text-center mt-3">
                    Titik Meridian Aktif: <strong className="text-amberGold-400">{currentData.title}</strong>
                  </span>
                </div>

                {/* Animated Step-by-Step Instructions (Right) */}
                <div className="md:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={selectedPoint}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-sm"
                    >
                      <div className="p-4 rounded-xl bg-forest-900/70 border border-forest-800">
                        <span className="text-amberGold-400 font-bold block text-xs uppercase mb-1">
                          Langkah 1: Tuang & Hangatkan
                        </span>
                        <p className="text-linen-200 text-xs leading-relaxed">
                          {currentData.step1}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/70 border border-forest-800">
                        <span className="text-amberGold-400 font-bold block text-xs uppercase mb-1">
                          Langkah 2: Balurkan Merata
                        </span>
                        <p className="text-linen-200 text-xs leading-relaxed">
                          {currentData.step2}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/70 border border-forest-800">
                        <span className="text-amberGold-400 font-bold block text-xs uppercase mb-1">
                          Langkah 3: Minum Air Hangat
                        </span>
                        <p className="text-linen-200 text-xs leading-relaxed">
                          {currentData.step3}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
