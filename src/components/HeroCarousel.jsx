import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  MessageCircle, 
  Flame, 
  Moon, 
  Activity, 
  Award,
  CheckCircle2,
  Camera
} from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    // SLIDE 1: INTRODUKSI PRODUK GAHARU PLUS & BOTOL AMBER
    {
      id: 1,
      badge: 'Minyak Balur Gaharu Plus • Anti Gatal & Alergi',
      badgeIcon: Sparkles,
      bgImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80', // Tropical foliage with morning dew
      title: 'Pulihkan Kebugaran Tubuh & Ketenangan Jiwa dengan',
      titleHighlight: 'Gaharu Murni.',
      description: 'Minyak balur 100% Organik Natural Herbal dengan formula Anti Gatal & Alergi. Memadukan daun dan kayu Aquilaria malaccensis, Cendana, Rosemary, Zaitun, VCO, dan Cajuput oil. Cepat meresap tanpa lengket, meredakan rematik, neuropati diabetik, syaraf kejepit, maag, kembung, hingga memulihkan energi alami tubuh.',
      primaryBtnText: 'Pesan Cepat via WhatsApp',
      primaryBtnHref: 'https://wa.me/6281234567890?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20tertarik%20dengan%20promo%20Gaharu%20Plus%20hari%20ini.',
      secondaryBtnText: 'Pelajari Khasiat & Manfaat',
      secondaryBtnHref: '#manfaat',
      visualType: 'product-photo'
    },
    // SLIDE 2: BAHAN UTAMA GAHARU (THE WOOD OF THE GODS)
    {
      id: 2,
      badge: 'Warisan Medis Para Raja • Penyeimbang Yin-Yang & Ci',
      badgeIcon: Award,
      bgImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80', // Ancient mystical rainforest canopy
      title: 'Getah Kayu Gaharu: "Emas Hitam Hutan" Bernilai',
      titleHighlight: 'Melebihi Emas.',
      description: 'Gaharu (Aquilaria Malaccensis) bukan sekadar wewangian mewah, melainkan tanaman obat kuno yang membuyarkan stagnasi Ci dan menstabilkan Yin-Yang. Diperkaya intisari Cendana dan Rosemary yang menenangkan sistem saraf, melepas stres, dan menambah keharmonisan hubungan pasangan.',
      primaryBtnText: 'Konsultasi dengan Herbalist',
      primaryBtnHref: 'https://wa.me/6281234567890?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20ingin%20tanya%20tentang%20khasiat%20ekstrak%20Gaharu.',
      secondaryBtnText: 'Lihat Komposisi Bahan',
      secondaryBtnHref: '#komposisi',
      visualType: 'agarwood-photo'
    },
    // SLIDE 3: KHASIAT UTAMA (PEGAL LINU, TIDUR NYENYAK, KEHANGATAN NYAMAN)
    {
      id: 3,
      badge: 'Solusi Alami Nyeri Sendi, Neuropati Diabetik & Insomnia',
      badgeIcon: Moon,
      bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80', // Holistic spa wellness & warm herbal therapy
      title: 'Tidur Pulas Tanpa Gelisah, Bangun Pagi Tubuh',
      titleHighlight: 'Segar Berenergi.',
      description: 'Sensasi hangat mendalam dari 100% rempah organik meresap hingga ke sendi tanpa rasa panas perih membakar. Dibalur pada lokasi keluhan dan telapak kaki sebelum tidur dan sesudah mandi, Gaharu Plus melepaskan kepenatan otot dan memberikan relaksasi tidur terbaik.',
      primaryBtnText: 'Klaim Paket Promo Sekarang',
      primaryBtnHref: '#paket',
      secondaryBtnText: 'Lihat Panduan Titik Balur',
      secondaryBtnHref: '#panduan-balur',
      visualType: 'wellness-photo'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.45 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 }
      }
    })
  };

  const slide = slides[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section 
      className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden min-h-[680px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Dynamic Nature Imagery with Smooth Crossfade */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />
        </AnimatePresence>
        {/* Ambient Gradient Masks for flawless contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-linen-50 via-linen-50/90 to-linen-50" />
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[520px] bg-gradient-to-tr from-forest-800/10 via-amberGold-400/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-forest-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Content Container */}
        <div className="relative min-h-[600px] lg:min-h-[540px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
              
              {/* Left Column: Copy & Actions (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Tag Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100/90 border border-forest-200 text-forest-800 text-xs sm:text-sm font-semibold shadow-sm"
                >
                  <BadgeIcon className="w-4 h-4 text-amberGold-600" />
                  <span>{slide.badge}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.55 }}
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl text-forest-950 font-bold leading-[1.15] tracking-tight"
                >
                  {slide.title} <span className="text-gold-gradient italic font-serif">{slide.titleHighlight}</span>
                </motion.h1>

                {/* Subheadline Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.55 }}
                  className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {slide.description}
                </motion.p>

                {/* Dual CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.55 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
                >
                  <motion.a 
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={slide.primaryBtnHref}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-850 text-linen-50 font-bold text-base shadow-luxury hover:shadow-2xl transition-all duration-300 border border-amberGold-400/30 group"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>{slide.primaryBtnText}</span>
                    <span className="text-amberGold-300 text-xs px-2 py-0.5 rounded-full bg-forest-950/60 font-normal">
                      Respon &lt; 3 mnt
                    </span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={slide.secondaryBtnHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-linen-100 hover:bg-linen-200 text-forest-900 font-semibold text-base border border-linen-300 transition-colors"
                  >
                    <span>{slide.secondaryBtnText}</span>
                    <ArrowRight className="w-4 h-4 text-forest-700" />
                  </motion.a>
                </motion.div>

                {/* Micro Trust Stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="pt-4 border-t border-linen-300/80 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-charcoal-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img 
                        src="/testimonials/testi-1.jpg" 
                        alt="Konsumen Terverifikasi 1" 
                        className="w-8 h-8 rounded-full object-cover object-top border-2 border-linen-50 shadow-sm"
                      />
                      <img 
                        src="/testimonials/testi-2.jpg" 
                        alt="Konsumen Terverifikasi 2" 
                        className="w-8 h-8 rounded-full object-cover object-top border-2 border-linen-50 shadow-sm"
                      />
                      <img 
                        src="/testimonials/testi-3.jpg" 
                        alt="Konsumen Terverifikasi 3" 
                        className="w-8 h-8 rounded-full object-cover object-top border-2 border-linen-50 shadow-sm"
                      />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center text-amber-500 text-xs">
                        <span>★★★★★</span>
                        <span className="ml-1.5 font-bold text-xs text-forest-950">4.9 / 5.0</span>
                      </div>
                      <span className="text-xs text-charcoal-500">14.800+ Ulasan Konsumen Terverifikasi</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-forest-900">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Izin BPOM RI TR: 236081291 & Halal MUI</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: High-Res Realistic Visual (5 cols) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                
                {/* SLIDE 1 VISUAL: REALISTIC AMBER GLASS BOTTLE PRODUCT CARD */}
                {slide.visualType === 'product-photo' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55 }}
                    className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl glass-card shadow-luxury border border-linen-300 p-4 sm:p-5"
                  >
                    {/* Floating Pill 1 */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-forest-900 text-linen-50 px-4 py-2 rounded-2xl shadow-lg border border-amberGold-400/40 text-xs font-semibold flex items-center gap-2 animate-float-slow z-20">
                      <Sparkles className="w-4 h-4 text-amberGold-400" />
                      <span>Aroma Mewah Kayu Gaharu</span>
                    </div>

                    {/* Floating Pill 2 */}
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white text-forest-900 px-4 py-2.5 rounded-2xl shadow-xl border border-linen-300 text-xs font-semibold flex items-center gap-2 z-20">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>Cepat Meresap & Tidak Lengket</span>
                    </div>

                    {/* Product Photo Showcase */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-linen-100 flex items-center justify-center group">
                      <img 
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80" 
                        alt="Botol Minyak Balur Herbal Gaharu Plus 100ml" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                      
                      {/* Gradient overlay at bottom for title label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />

                      {/* Overlaid Badge & Product Specs */}
                      <div className="absolute bottom-4 left-4 right-4 text-linen-50 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] tracking-widest uppercase font-mono text-amberGold-300 block">
                              HERBAL ELIXIR 100ML
                            </span>
                            <h3 className="font-serif text-lg font-bold">Gaharu Plus Original</h3>
                          </div>
                          <span className="px-2.5 py-1 bg-amberGold-500 text-forest-950 rounded-lg text-xs font-bold shadow-md">
                            POM TR Resmi
                          </span>
                        </div>
                      </div>

                      {/* Small Placeholder hint pill */}
                      <div className="absolute top-3 right-3 bg-forest-950/70 backdrop-blur-md text-[10px] text-linen-200 px-2 py-0.5 rounded-md flex items-center gap-1 border border-linen-300/20">
                        <Camera className="w-3 h-3 text-amberGold-400" />
                        <span>Foto Produk Asli</span>
                      </div>
                    </div>

                    {/* 3 Quick Bullets under image */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-linen-200 text-center">
                      <div className="p-2 rounded-xl bg-linen-100/70">
                        <span className="block text-forest-900 font-bold text-xs">100% Murni</span>
                        <span className="block text-[10px] text-charcoal-500 mt-0.5">Tanpa Kimia</span>
                      </div>
                      <div className="p-2 rounded-xl bg-linen-100/70">
                        <span className="block text-forest-900 font-bold text-xs">Gaharu Super</span>
                        <span className="block text-[10px] text-charcoal-500 mt-0.5">Resin Pilihan</span>
                      </div>
                      <div className="p-2 rounded-xl bg-linen-100/70">
                        <span className="block text-forest-900 font-bold text-xs">Hangat Dalam</span>
                        <span className="block text-[10px] text-charcoal-500 mt-0.5">Tahan Lama</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* SLIDE 2 VISUAL: AROMATIC AGARWOOD WOOD & RESIN PHOTOGRAPHY */}
                {slide.visualType === 'agarwood-photo' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55 }}
                    className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl bg-forest-900 text-linen-50 shadow-luxury border-2 border-amberGold-400 p-5 sm:p-6 relative overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amberGold-500/20 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-forest-800">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amberGold-400">
                          Botanical Source
                        </span>
                        <h4 className="font-serif text-xl font-bold text-linen-50">Aquilaria Malaccensis</h4>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-amberGold-500/20 text-amberGold-300 rounded-full border border-amberGold-400/30 font-bold">
                        Grade Super A+
                      </span>
                    </div>

                    {/* Image of Real Agarwood Chips & Resin */}
                    <div className="my-4 rounded-2xl overflow-hidden aspect-[16/10] relative shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80" 
                        alt="Potongan Kayu Gaharu Alami dan Getah Resin Berkhasiat" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-linen-100 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amberGold-400" />
                        <span>Getah Resin Kayu Gaharu Alami Nusantara</span>
                      </div>
                    </div>

                    {/* Key features bullets */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-forest-950/60 border border-forest-700/60 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-linen-200">
                          Kaya <strong>senyawa sesquiterpene & agarospirol</strong> alami penenang saraf pusat.
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-forest-950/60 border border-forest-700/60 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-linen-200">
                          Membuka titik meridian chi tubuh saat dibalur di sepanjang tulang belakang.
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-forest-800 flex items-center justify-between text-xs text-amberGold-300">
                      <span>Ekstraksi Suhu Rendah</span>
                      <span className="font-bold">100% Kemurnian Terjaga</span>
                    </div>
                  </motion.div>
                )}

                {/* SLIDE 3 VISUAL: RESTORATIVE SLEEP & WELLNESS PHOTOGRAPHY */}
                {slide.visualType === 'wellness-photo' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55 }}
                    className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl bg-white border border-linen-300 shadow-luxury p-5 sm:p-6 relative"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-linen-200">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-forest-700">
                          Hasil Terapi Holistik
                        </span>
                        <h4 className="font-serif text-xl font-bold text-forest-950">Tidur Pulas & Otot Relaks</h4>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-forest-50 text-forest-800 flex items-center justify-center">
                        <Moon className="w-5 h-5 text-forest-700" />
                      </div>
                    </div>

                    {/* Photo of Calming Restful Sleep sanctuary */}
                    <div className="my-4 rounded-2xl overflow-hidden aspect-[16/10] relative shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80" 
                        alt="Kenyamanan Tidur Lelap dan Kebugaran Pagi Hari bersama Gaharu Plus" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-white flex items-center gap-1.5">
                        <Moon className="w-3.5 h-3.5 text-amberGold-400" />
                        <span>Kenyamanan Tidur Pulas & Otot Relaks</span>
                      </div>
                    </div>

                    {/* Stat Badges */}
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-linen-100 border border-linen-200 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-charcoal-500 block">Kualitas Tidur Nyenyak</span>
                          <span className="text-xs font-bold text-forest-950">Bebas Insomnia Malam</span>
                        </div>
                        <span className="text-xl font-serif font-bold text-forest-800">98.4%</span>
                      </div>

                      <div className="p-3 rounded-xl bg-linen-100 border border-linen-200 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-charcoal-500 block">Penetrasi Cepat Tanpa Lengket</span>
                          <span className="text-xs font-bold text-forest-950">Meresap ke Jaringan Otot</span>
                        </div>
                        <span className="text-xl font-serif font-bold text-amberGold-600">3x Cepat</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 text-center text-[11px] text-charcoal-500">
                      *Hasil survei mandiri dari ribuan pengguna rutin Gaharu Plus.
                    </div>
                  </motion.div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Controls & Indicators */}
        <div className="mt-8 pt-4 flex items-center justify-between border-t border-linen-300/80">
          
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setDirection(idx > currentSlide ? 1 : -1);
                  setCurrentSlide(idx);
                }}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  currentSlide === idx 
                    ? 'w-10 bg-forest-900' 
                    : 'w-2.5 bg-linen-300 hover:bg-forest-700/60'
                }`}
                aria-label={`Pindah ke Slide ${idx + 1}`}
              />
            ))}
            <span className="ml-3 text-xs font-semibold text-charcoal-500">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Navigation Chevron Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white hover:bg-linen-200 text-forest-900 border border-linen-300 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Slide Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white hover:bg-linen-200 text-forest-900 border border-linen-300 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Slide Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
