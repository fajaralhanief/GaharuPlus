import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Leaf, HeartPulse } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Izin BPOM RI',
      subtitle: 'POM TR: 236081291',
    },
    {
      icon: CheckCircle2,
      title: 'Halal Indonesia',
      subtitle: 'Sertifikasi Halal MUI Resmi',
    },
    {
      icon: Leaf,
      title: '100% Rempah Alami',
      subtitle: 'Bebas Bahan Kimia Obat (BKO)',
    },
    {
      icon: HeartPulse,
      title: 'Dermatology Safe',
      subtitle: 'Aman untuk Kulit Sensitif',
    },
  ];

  return (
    <section className="bg-forest-900 text-linen-100 py-10 border-y border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.25em] uppercase font-semibold text-amberGold-400 mb-8"
        >
          JAMINAN MUTU, LEGALITAS RESMI, & STANDAR KEAMANAN TINGGI
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center text-center"
        >
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                variants={slideUp}
                whileHover={{ y: -4, borderColor: 'rgba(213, 155, 30, 0.5)' }}
                className="flex flex-col items-center p-4 rounded-2xl bg-forest-950/50 border border-forest-700/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-forest-800/80 flex items-center justify-center text-amberGold-400 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-linen-50">{b.title}</h4>
                <p className="text-xs text-linen-300 mt-1">{b.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

