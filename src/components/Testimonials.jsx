import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Stethoscope, MapPin, CheckCircle2 } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      tag: 'Pemulihan Stroke Ringan',
      complaint: 'Keluhan: Tangan kanan & jari kaku kebas (3 bulan pasca stroke, tensi 180/110)',
      quote: '"Selama 3 bulan terakhir saya berikhtiar pulih dari stroke ringan akibat tensi tinggi (180/110). Tangan kanan dan jari-jari saya kaku, kebas, dan sangat sulit digerakkan. Masya Allah, baru 30 menit dibalurkan minyak Gaharu Plus, reaksi hangatnya langsung terasa meresap. Tangan terasa jauh lebih enteng diangkat dan jari yang tadinya kaku mulai lentur—terutama jari telunjuk yang kaku alhamdulillah sekarang sudah bisa lurus kembali. Semua jari tangan kini leluasa digerakkan tanpa rasa kaku lagi. Semoga Allah memberikan kesembuhan total melalui wasilah minyak herbal ini."',
      author: 'Bapak Canel',
      role: 'Pasien Stroke Ringan — Pemulihan 3 Bulan',
      location: 'Ulasan Langsung Pengguna',
      avatar: '/testimonials/testi-1.jpg',
      isFeatured: true
    },
    {
      id: 2,
      rating: 5,
      tag: 'Pusing, Sesak & Kembung',
      complaint: 'Keluhan: Kepala pusing keleyengan, napas ngap-ngapan, perut begah & leher kaku',
      quote: '"Awalnya kepala saya sering pusing keleyengan, napas terasa berat ngap-ngap, perut begah kembung, serta otot leher kaku tidak nyaman. Alhamdulillah, setelah dioles dan dibalur dengan minyak Gaharu Plus, keluhannya reda dengan cepat. Rasa keleyengan di kepala hilang, tarikan napas jadi lega plong, dan leher terasa enteng tidak kaku lagi. Badan kembali hangat dan nyaman untuk beraktivitas sehari-hari."',
      author: 'Umi Yayat',
      role: 'Warga Kebon Alas Lebak',
      location: 'Desa Ciasmara 1, Kec. Pamijahan, Kab. Bogor',
      avatar: '/testimonials/testi-2.jpg',
      isFeatured: false
    },
    {
      id: 3,
      rating: 5,
      tag: 'Nyeri Sendi & Jari Ngilu',
      complaint: 'Keluhan: Tangan pegal linu, persendian ngilu & jari kaku nyeri',
      quote: '"Tangan saya sering sekali terasa pegal-pegal, persendian ngilu, serta jari-jari kaku dan nyeri saat ditekuk untuk beraktivitas. Setelah dioles dan dibalur lembut dengan minyak Gaharu Plus, alhamdulillah keluhan pegal dan ngilu hilang tuntas. Jari-jari tangan jadi lentur kembali dan bebas digerakkan tanpa rasa sakit. Sangat terasa perbedaannya."',
      author: 'Dewi Susanti',
      role: 'Pengelola Warung Umi Yayat',
      location: 'Desa Ciasmara 1, Kec. Pamijahan, Kab. Bogor',
      avatar: '/testimonials/testi-3.jpg',
      isFeatured: false
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-linen-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-amberGold-600 block">
            Kisah Nyata Konsumen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Bukti Nyata Pemulihan <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Dari Para Pengguna Gaharu Plus</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Dengarkan pengalaman langsung dari mereka yang telah membuktikan sendiri keampuhan formulasi minyak balur Gaharu Plus untuk keluhan stroke ringan, pegal linu, hingga migrain.
          </p>
        </motion.div>

        {/* Testimonials 3 Columns Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {reviews.map((rev) => {
            if (rev.isFeatured) {
              return (
                <motion.div
                  key={rev.id}
                  variants={slideUp}
                  whileHover={{ y: -6 }}
                  className="p-7 sm:p-8 rounded-3xl bg-forest-900 text-linen-100 border-2 border-amberGold-400 shadow-luxury flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-2"
                >
                  {/* Subtle Gold Aura */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-amberGold-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Header: Tag + Rating */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amberGold-500 text-forest-950 uppercase tracking-wider">
                        ★ {rev.tag}
                      </span>
                      <div className="flex items-center text-amberGold-400 text-xs">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amberGold-400 text-amberGold-400" />
                        ))}
                      </div>
                    </div>

                    {/* Complaint badge */}
                    <div className="mb-4 p-2.5 rounded-xl bg-forest-950/70 border border-forest-700/80 text-[11px] text-amberGold-300 font-medium">
                      {rev.complaint}
                    </div>

                    {/* Main Polished Quote */}
                    <p className="text-linen-200 text-xs sm:text-sm leading-relaxed mb-6 italic">
                      {rev.quote}
                    </p>
                  </div>

                  {/* Author Card Footer */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-forest-800">
                    <div className="relative flex-shrink-0">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-amberGold-400 shadow-md"
                        loading="lazy"
                      />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-forest-900 flex items-center justify-center text-[9px] text-white font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-linen-50 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                      </h4>
                      <p className="text-xs text-amberGold-300 font-medium">{rev.role}</p>
                      <p className="text-[11px] text-linen-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amberGold-400" />
                        <span>{rev.location}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={rev.id}
                variants={slideUp}
                whileHover={{ y: -6 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-linen-300 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Tag + Rating */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-forest-100 text-forest-800 uppercase tracking-wider">
                      {rev.tag}
                    </span>
                    <div className="flex items-center text-amber-500 text-xs">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Complaint badge */}
                  <div className="mb-4 p-2.5 rounded-xl bg-linen-100 border border-linen-200 text-[11px] text-forest-900 font-medium">
                    {rev.complaint}
                  </div>

                  {/* Main Polished Quote */}
                  <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    {rev.quote}
                  </p>
                </div>

                {/* Author Card Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-linen-200">
                  <div className="relative flex-shrink-0">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-forest-200 shadow-sm"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-forest-950">{rev.author}</h4>
                    <p className="text-xs text-charcoal-600 font-medium">{rev.role}</p>
                    <p className="text-[11px] text-charcoal-500 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-forest-700" />
                      <span>{rev.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expert Endorsement Highlight with Doctor Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 p-8 rounded-3xl bg-linen-100 border border-linen-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="relative mb-2">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=80"
                alt="Tony Yulianto Praktisi Herbal"
                className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-amberGold-400"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-forest-900 text-amberGold-400 flex items-center justify-center text-xs">
                <Stethoscope className="w-3.5 h-3.5" />
              </div>
            </div>
            <h4 className="font-serif font-bold text-base text-forest-950">Tony Yulianto</h4>
            <p className="text-xs text-charcoal-500">Praktisi Akupunktur & Herbal Medis</p>
          </div>
          <div className="md:col-span-9 border-t md:border-t-0 md:border-l border-linen-300 pt-4 md:pt-0 md:pl-8">
            <p className="text-sm text-charcoal-700 leading-relaxed italic">
              "Kekuatan pengobatan herbal nusantara terletak pada sinergi fitokimianya. Penambahan getah gaharu murni dalam formulasi balur adalah lompatan luar biasa. Senyawa agarospirol di dalamnya bekerja sinergis membuka mikrosirkulasi kapiler sehingga regenerasi sel, sirkulasi saraf motorik, dan relaksasi otot berlangsung jauh lebih cepat."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
