import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, ArrowUp } from 'lucide-react';

export default function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-forest-900 text-linen-100 relative overflow-hidden">
      {/* Radial Gradient Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-forest-800/60 via-forest-900 to-forest-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amberGold-500/20 text-amberGold-300 border border-amberGold-400/40 text-xs font-semibold"
        >
          KONSULTASI GRATIS & LAYANAN CEPAT
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-linen-50 leading-tight"
        >
          Saatnya Hadirkan Kehangatan & <br className="hidden sm:inline" />
          <span className="text-gold-gradient italic font-serif">Kesehatan Sejati di Rumah Anda.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-linen-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Jangan biarkan nyeri sendi, syaraf kejepit, gatal alergi, dan malam-malam tanpa tidur mengganggu kualitas hidup Anda. Balurkan Gaharu Plus sebelum tidur dan setelah mandi, dan rasakan khasiatnya sejak tetes pertama.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/6287888000551?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20tertarik%20dengan%20promo%20Gaharu%20Plus%20dan%20ingin%20konsultasi%20pemesanan." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-amberGold-500 hover:bg-amberGold-400 text-forest-950 font-bold text-base sm:text-lg shadow-gold-glow hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 text-forest-950" />
            <span>Pesan Sekarang via WhatsApp</span>
          </motion.a>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-forest-800/80 hover:bg-forest-800 text-linen-100 font-semibold text-base border border-forest-700 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-amberGold-400" />
            <span>Kembali ke Atas</span>
          </motion.button>
        </motion.div>

        {/* Direct Contact Numbers Pill */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-amberGold-300">
          <span>Layanan Cepat WhatsApp:</span>
          <a href="https://wa.me/6287888000551" className="font-bold underline hover:text-white transition-colors">0878-8800-0551</a>
          <span>•</span>
          <a href="https://wa.me/6281318055557" className="font-bold underline hover:text-white transition-colors">0813-1805-5557</a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-linen-300"
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 font-bold" />
            Customer Service Ramah & Cepat
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 font-bold" />
            100% Garansi Pengembalian Jika Rusak
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 font-bold" />
            Bisa Bayar di Tempat (COD)
          </span>
        </motion.div>

      </div>
    </section>
  );
}

