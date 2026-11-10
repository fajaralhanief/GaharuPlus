import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export default function TitikBalur() {
  const [selectedPoint, setSelectedPoint] = useState('tulang-belakang');

  const pointsData = {
    'tulang-belakang': {
      number: '1',
      category: 'TITIK FOKUS 1',
      title: 'Sepanjang Tulang Belakang',
      badge: 'Wajib Setiap Hari',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
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
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=700&q=80',
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
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80',
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
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
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
            Panduan 3 Titik Kunci <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Pembaluran Tubuh Holistik</span>
          </h2>
          <p className="text-linen-300 text-base sm:text-lg">
            Khasiat minyak balur bekerja optimal bukan sekadar digosok acak, melainkan dibalurkan pada titik meridian saraf yang langsung terhubung ke organ dalam tubuh.
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
            <div className="p-8 sm:p-10 rounded-3xl glass-card-dark border border-forest-700/80 relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-forest-800 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amberGold-400 font-bold">
                    {currentData.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-linen-50 mt-1">
                    {currentData.title}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-forest-800/80 text-amberGold-300 text-xs font-semibold border border-amberGold-500/30">
                  {currentData.badge}
                </div>
              </div>

              {/* Animated Visual Diagram & Therapeutic Photo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Silhouette Graphic with Interactive Highlight */}
                <div className="flex flex-col items-center justify-center py-4 bg-forest-950/60 rounded-2xl border border-forest-800/60 p-5 relative overflow-hidden">
                  
                  {/* Real Therapeutic Photo Overlay at top corner */}
                  <div className="w-full aspect-[16/9] mb-4 rounded-xl overflow-hidden relative shadow-md">
                    <img 
                      src={currentData.image} 
                      alt={`Pembaluran ${currentData.title}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 left-2.5 text-[10px] text-amberGold-300 font-medium">
                      Pembaluran Titik Meridian
                    </span>
                  </div>

                  <svg className="w-40 sm:w-44 h-56 drop-shadow-lg" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Head */}
                    <path d="M100 20C88 20 80 32 80 45C80 58 88 68 100 68C112 68 120 58 120 45C120 32 112 20 100 20Z" fill="#1C3F2B" stroke="#26543A" strokeWidth="2"/>
                    {/* Shoulders and Torso */}
                    <path d="M80 55C60 62 45 75 42 100L46 160C47 170 54 175 62 175H70L68 280C68 290 76 295 86 295H92L96 190H104L108 295H114C124 295 132 290 132 280L130 175H138C146 175 153 170 154 160L158 100C155 75 140 62 120 55" fill="#163222" stroke="#26543A" strokeWidth="2"/>
                    
                    {/* Spine Glow (Point 1) */}
                    <g className={`transition-opacity duration-300 ${currentData.activeVisual === 'spine' ? 'opacity-100' : 'opacity-25'}`}>
                      <line x1="100" y1="70" x2="100" y2="185" stroke="#D59B1E" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 8"/>
                      <circle cx="100" cy="75" r="5" fill="#E3B03E"/>
                      <circle cx="100" cy="110" r="5" fill="#E3B03E"/>
                      <circle cx="100" cy="145" r="5" fill="#E3B03E"/>
                      <circle cx="100" cy="180" r="5" fill="#E3B03E"/>
                    </g>

                    {/* Feet Reflexology Glow (Point 2) */}
                    <g className={`transition-opacity duration-300 ${currentData.activeVisual === 'feet' ? 'opacity-100' : 'opacity-25'}`}>
                      <ellipse cx="89" cy="285" rx="9" ry="6" fill="#D59B1E"/>
                      <ellipse cx="111" cy="285" rx="9" ry="6" fill="#D59B1E"/>
                    </g>

                    {/* Chest & Belly Glow (Point 3) */}
                    <g className={`transition-opacity duration-300 ${currentData.activeVisual === 'chest' ? 'opacity-100' : 'opacity-25'}`}>
                      <circle cx="100" cy="100" r="14" fill="#D59B1E" fillOpacity="0.5"/>
                      <circle cx="100" cy="135" r="16" fill="#D59B1E" fillOpacity="0.5"/>
                    </g>

                    {/* Joints Glow (Point 4) */}
                    <g className={`transition-opacity duration-300 ${currentData.activeVisual === 'joints' ? 'opacity-100' : 'opacity-25'}`}>
                      <circle cx="58" cy="95" r="6" fill="#D59B1E"/>
                      <circle cx="142" cy="95" r="6" fill="#D59B1E"/>
                      <circle cx="80" cy="235" r="6" fill="#D59B1E"/>
                      <circle cx="120" cy="235" r="6" fill="#D59B1E"/>
                    </g>
                  </svg>
                </div>

                {/* Animated Step-by-Step Instructions */}
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
    </section>
  );
}
