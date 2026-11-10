import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Keluhan apa saja yang dapat dibantu pemulihannya dengan Minyak Balur Gaharu Plus?',
      a: (
        <div className="space-y-2">
          <p>Minyak Balur Gaharu Plus berkhasiat komprehensif untuk beragam keluhan:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-charcoal-700 pt-1">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Nyeri rematik, asam urat & sendi</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Syaraf kejepit & neuropati diabetik</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Kesemutan, kram & otot kejang</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Gatal-gatal alergi & gigitan serangga</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Bengkak terpukul, keseleo & salah urat</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Mual, maag, kembung & begah</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Vertigo, migrain & mabuk perjalanan</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Membantu menyembuhkan kutil</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Stabilkan Yin-Yang & buyarkan stagnasi Ci</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amberGold-600 flex-shrink-0" /> Tambah gairah hubungan suami-istri</li>
          </ul>
        </div>
      )
    },
    {
      q: 'Bagaimana cara dan waktu penggunaan yang paling tepat?',
      a: 'Cukup oleskan dan balurkan secara merata ke lokasi dimana terdapat keluhan serta kedua telapak kaki setiap sebelum tidur malam dan setelah mandi pagi/sore. Formulanya lembut, tidak lengket, cepat meresap ke pori-pori, dan tidak meninggalkan noda kotor pada pakaian atau sprei.'
    },
    {
      q: 'Apakah Gaharu Plus aman untuk kulit sensitif dan benar berkhasiat Anti Gatal & Alergi?',
      a: 'Sangat aman dan terbukti ampuh. Gaharu Plus diracik dari 100% Organik Natural Herbal (daun & kayu Aquilaria malaccensis, Cendana, Rosemary, Zaitun murni, VCO kelapa, dan Cajuput oil). Minyak ini berfungsi sebagai antiseptik alami yang menetralkan racun di permukaan kulit, meredakan gatal alergi seketika, serta menjaga elastisitas dan kelembutan kulit.'
    },
    {
      q: 'Apakah produk ini sudah memiliki izin edar resmi BPOM dan Sertifikasi Halal?',
      a: 'Ya, resmi terdaftar di Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia dengan nomor registrasi POM TR: 236081291 serta memiliki Sertifikat Halal Resmi dari MUI. Anda dapat mengecek keabsahan nomor izin edar ini langsung di situs resmi BPOM.'
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
            Jawaban lengkap dan transparan seputar khasiat, aturan pakai, keamanan herbal, dan legalitas BPOM Gaharu Plus.
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-forest-950 focus:outline-none"
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
