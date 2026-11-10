import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Hint Pill */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex items-center gap-2 bg-forest-950 text-linen-100 px-4 py-2 rounded-full shadow-2xl border border-amberGold-400/30 text-xs"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Konsultasi Herbal Aktif</span>
      </motion.div>

      {/* Pulsing WhatsApp Button */}
      <motion.a 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        href="https://wa.me/6287888000551?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20ingin%20tanya%20seputar%20minyak%20balur%20Gaharu%20Plus." 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-luxury focus:outline-none"
        aria-label="Chat WhatsApp Admin Gaharu Plus"
      >
        {/* Ripple effect ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
        
        {/* Lucide React MessageCircle Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-white text-emerald-500" />
      </motion.a>
    </div>
  );
}

