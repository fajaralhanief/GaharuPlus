import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, Flame, Activity, Clock } from 'lucide-react';

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
                    className="w-full max-w-[195px] h-72 sm:h-80 drop-shadow-2xl transition-all duration-500" 
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
                      <line x1="25" y1="72" x2="175" y2="72" />
                      <line x1="25" y1="120" x2="175" y2="120" />
                      <line x1="25" y1="163" x2="175" y2="163" />
                      <line x1="25" y1="235" x2="175" y2="235" />
                      <line x1="25" y1="290" x2="175" y2="290" />
                      <line x1="100" y1="10" x2="100" y2="310" strokeWidth="0.5" />
                    </g>

                    {/* SILUET ANATOMIS TUBUH MANUSIA: LENGAN LURUS ALAMI + KAKI & TUBUH PROPORSIONAL */}
                    <path 
                      d="M 100 18 C 108 18 114 23 114 32 C 114 42 108 48 106 52 C 106 54 107 58 108 62 C 115 64 124 66 132 69 C 134 72 135 78 135 88 C 135 98 134 114 134 128 C 134 138 133 152 132 164 C 131 172 130 178 129 184 C 128 186 125 186 124 184 C 123 178 124 172 125 164 C 126 152 126 138 126 128 C 126 118 125 106 123 94 C 122 92 121 91 120 92 C 119 98 117 108 116 118 C 115 126 116 136 118 146 C 120 154 122 164 122 176 C 122 190 120 206 118 222 C 117 230 117 236 117 242 C 119 250 119 262 116 274 C 114 282 114 290 115 296 C 116 301 116 304 113 305 L 99 305 C 98 304 99 300 101 296 C 102 290 103 282 103 274 C 103 262 104 250 104 242 C 104 236 104 230 103 222 C 103 206 102 190 101 174 C 101 168 100.5 164 100 163 C 99.5 164 99 168 99 174 C 98 190 97 206 97 222 C 96 230 96 236 96 242 C 96 250 97 262 97 274 C 97 282 98 290 99 296 C 101 300 102 304 101 305 L 87 305 C 84 304 84 301 85 296 C 86 290 86 282 84 274 C 81 262 81 250 83 242 C 83 236 83 230 82 222 C 80 206 78 190 78 176 C 78 164 80 154 82 146 C 84 136 85 126 84 118 C 83 108 81 98 80 92 C 79 91 78 92 77 94 C 75 106 74 118 74 128 C 74 138 74 152 75 164 C 76 172 77 178 76 184 C 75 186 72 186 71 184 C 70 178 69 172 68 164 C 67 152 66 138 66 128 C 66 114 65 98 65 88 C 65 78 66 72 68 69 C 76 66 85 64 92 62 C 93 58 94 54 94 52 C 92 48 86 42 86 32 C 86 23 92 18 100 18 Z"
                      fill="url(#bodyGradient)"
                      stroke="#326E4C"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />

                    {/* Garis Tulang Selangka / Clavicle & Lekuk Dada */}
                    <path 
                      d="M86 64C93 66 97 67 100 67C103 67 107 66 114 64" 
                      stroke="#428E63" 
                      strokeWidth="1.2" 
                      strokeLinecap="round" 
                      opacity="0.6"
                    />

                    {/* 1. SEPANJANG TULANG BELAKANG (SPINE MERIDIAN) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'spine' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Kolom Tulang Belakang */}
                      <line x1="100" y1="62" x2="100" y2="162" stroke="#D59B1E" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
                      <line x1="100" y1="62" x2="100" y2="162" stroke="#E3B03E" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Titik Vertebrae / Simpul Saraf */}
                      <circle cx="100" cy="65" r="4.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'spine' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="88" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="100" cy="112" r="5.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'spine' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="138" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="100" cy="160" r="4" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 2. TELAPAK & SELA JARI KAKI (FEET REFLEXOLOGY) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'feet' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Telapak Kaki Proposional */}
                      <ellipse cx="94" cy="301" rx="8" ry="4" fill="#E3B03E" opacity="0.5" className={currentData.activeVisual === 'feet' ? 'animate-pulse' : ''} />
                      <ellipse cx="106" cy="301" rx="8" ry="4" fill="#E3B03E" opacity="0.5" className={currentData.activeVisual === 'feet' ? 'animate-pulse' : ''} />
                      {/* Titik Pusat Refleksi Kaki */}
                      <circle cx="94" cy="301" r="4.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="106" cy="301" r="4.5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 3. AREA DADA & PERUT (CHEST & ABDOMINAL MERIDIAN) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'chest' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Aura Lingkaran Dada (Chakra Jantung / Rongga Dada) */}
                      <circle cx="100" cy="90" r="16" fill="url(#meridianAura)" className={currentData.activeVisual === 'chest' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="90" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      
                      {/* Aura Lingkaran Perut (Solar Plexus & Pusar) */}
                      <circle cx="100" cy="130" r="19" fill="url(#meridianAura)" className={currentData.activeVisual === 'chest' ? 'animate-pulse' : ''} />
                      <circle cx="100" cy="130" r="7" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                    </g>

                    {/* 4. AREA SENDI & TITIK KELUHAN (KEY ARTICULATIONS & JOINTS) */}
                    <g className={`transition-all duration-500 ${currentData.activeVisual === 'joints' ? 'opacity-100' : 'opacity-20'}`}>
                      {/* Sendi Bahu Kiri & Kanan */}
                      <circle cx="73" cy="73" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      <circle cx="127" cy="73" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      {/* Sendi Pergelangan Tangan (Tepat di Pergelangan Tangan yang Lurus) */}
                      <circle cx="71.5" cy="164" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      <circle cx="128.5" cy="164" r="5" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" />
                      {/* Sendi Lutut Kiri & Kanan (Tepat di Tempurung Lutut Proporsional) */}
                      <circle cx="89.5" cy="235" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
                      <circle cx="110.5" cy="235" r="6" fill="#E3B03E" stroke="#112519" strokeWidth="1.2" className={currentData.activeVisual === 'joints' ? 'animate-pulse' : ''} />
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

                      {/* Aturan Pemakaian Resmi Gaharu Plus */}
                      <div className="p-4 rounded-2xl bg-amberGold-500/10 border border-amberGold-500/30 flex items-start gap-3">
                        <Clock className="w-4 h-4 text-amberGold-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-amberGold-300 text-xs uppercase tracking-wider">
                            Aturan Pemakaian Resmi:
                          </h5>
                          <p className="text-xs text-linen-100 mt-1 leading-relaxed">
                            Oleskan ke lokasi dimana terdapat keluhan dan kedua telapak kaki <strong>sebelum tidur</strong> dan <strong>setelah mandi</strong> untuk hasil pemulihan optimal.
                          </p>
                        </div>
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
