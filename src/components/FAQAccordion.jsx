import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Apakah Gaharu Plus aman digunakan untuk anak-anak dan lansia?',
      a: 'Sangat aman. Gaharu Plus diracik dari 100% bahan rempah alami tanpa bahan kimia sintetis (BKO) dan tanpa paraben. Efek hangatnya berasal dari jahe merah dan rempah alami yang lembut di kulit, tidak menimbulkan rasa panas menyengat seperti balsem, sehingga aman dibalurkan pada anak di atas usia 2 tahun serta orang tua/lansia.'
    },
    {
      q: 'Apa perbedaan utama Gaharu Plus dibandingkan minyak balur lainnya?',
      a: 'Keunggulan utama terletak pada kandungan ekstrak getah Kayu Gaharu (Oud) Grade A yang langka dan bernilai tinggi. Selain khasiat meredakan nyeri fisik, aroma gaharu memberikan efek relaksasi batin yang mewah (aromaterapi penenang saraf), tidak berbau jamu tajam, cepat meresap, dan tidak meninggalkan rasa lengket atau noda kuning kotor di pakaian.'
    },
    {
      q: 'Apakah produk ini sudah memiliki izin edar resmi BPOM?',
      a: 'Ya, resmi terdaftar di Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia dengan nomor registrasi POM TR: 236081291 serta telah mengantongi Sertifikat Halal Indonesia dari MUI. Anda dapat mengecek keaslian nomor registrasi ini secara langsung di laman resmi BPOM.'
    },
    {
      q: 'Berapa kali pemakaian yang dianjurkan dalam sehari?',
      a: 'Untuk menjaga kebugaran rutin, balurkan 1–2 kali sehari terutama sebelum tidur malam di telapak kaki dan sepanjang tulang belakang. Untuk membantu penyembuhan keluhan tertentu (seperti nyeri sendi akut, keseleo, atau masuk angin), dapat dibalurkan 3–4 kali sehari pada area yang bermasalah.'
    },
    {
      q: 'Apakah bisa melakukan pembayaran di tempat (COD)?',
      a: 'Tentu bisa! Kami melayani sistem pembayaran Cash on Delivery (COD / Bayar di Tempat) untuk seluruh wilayah Indonesia. Anda cukup menunggu kurir mengantarkan paket ke rumah dan membayar saat pesanan tiba dengan aman.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-linen-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-forest-700 block">
            Tanya Jawab Seputar Produk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Pertanyaan yang Sering <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Diajukan Konsumen</span>
          </h2>
          <p className="text-charcoal-600 text-base">
            Jawaban lengkap dan transparan seputar cara pakai, keamanan, legalitas BPOM, dan pengiriman Gaharu Plus.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-linen-300 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-forest-950 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-forest-700"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-charcoal-600 leading-relaxed border-t border-linen-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

