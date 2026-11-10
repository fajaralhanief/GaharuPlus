import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function BotanicalIngredients() {
  const botanicals = [
    {
      id: 2,
      name: 'Kayu Cendana Asli',
      latin: 'Santalum Album',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80',
      benefit: 'Aromaterapi relaksasi jiwa berkelas tinggi yang menenangkan sistem saraf, meredakan stres, dan membantu menyeimbangkan energi Yin-Yang tubuh.',
      tag: 'Aromaterapi & Penenang Stres',
    },
    {
      id: 3,
      name: 'Rosemary Alami',
      latin: 'Salvia Rosmarinus',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
      benefit: 'Meningkatkan mikrosirkulasi peredaran darah, meredakan pegal linu seluruh tubuh, kram otot, tegang leher, serta meringankan nyeri sendi dan asam urat.',
      tag: 'Pelancar Sirkulasi & Otot Kram',
    },
    {
      id: 4,
      name: 'Minyak Zaitun Murni',
      latin: 'Oleum Olivarum',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
      benefit: 'Kaya asam lemak esensial dan antioksidan yang menjaga elastisitas kulit, cepat menyerap ke dalam pori-pori, melembutkan kulit tanpa rasa lengket.',
      tag: 'Elastisitas & Cepat Menyerap',
    },
    {
      id: 5,
      name: 'Minyak Kelapa Murni (VCO)',
      latin: 'Cocos Nucifera Oil',
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
      benefit: 'Carrier oil organik dengan sifat antiseptik alami. Efektif meredakan gatal-gatal alergi, luka terpukul, gigitan serangga, serta menyembuhkan kutil.',
      tag: 'Anti Gatal, Alergi & Antiseptik',
    },
    {
      id: 6,
      name: 'Minyak Kayu Putih Murni',
      latin: 'Melaleuca Cajuputi Powell',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
      benefit: 'Menghadirkan kehangatan mendalam pereda masuk angin, mual, maag, perut kembung, begah, vertigo, mabuk perjalanan, dan menetralisir racun kulit.',
      tag: 'Pencernaan & Masuk Angin',
    },
    {
      id: 7,
      name: '+30 Tanaman Berkhasiat Obat',
      latin: 'Formulasi Herbal Tradisi Nusantara',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      benefit: 'Sinergi rempah obat pilihan nusantara (Cengkeh, Jahe Merah, Temulawak, Adas, dll.) untuk menuntaskan nyeri neuropati diabetik, syaraf kejepit, dan beri-beri.',
      tag: 'Sinergi 30+ Rempah Obat',
    },
  ];

  return (
    <section id="komposisi" className="py-24 bg-linen-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-forest-700 block">
            100% Organik Natural Herbal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Kemurnian Kandungan Alami <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Daun & Kayu Gaharu Pilihan</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Minyak Balur Gaharu Plus diracik murni dari daun dan kayu <em>Aquilaria malaccensis</em>, diperkuat 5 intisari botani premium serta dilengkapi lebih dari 30 jenis tanaman berkhasiat obat nusantara.
          </p>
        </motion.div>

        {/* Botanical Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Ingredient 1: Kayu & Daun Gaharu (Main Hero Feature - 2 columns span on large) */}
          <motion.div 
            variants={slideUp}
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-3xl bg-forest-900 text-linen-100 border border-amberGold-400/50 shadow-luxury flex flex-col justify-between overflow-hidden relative"
          >
            {/* Background image preview with rich dark gradient overlay */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=1000&q=80" 
                alt="Daun dan Kayu Gaharu (Aquilaria Malaccensis)" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amberGold-500 text-forest-950 shadow-md">
                  Bahan Inti Utama
                </span>
                <span className="text-xs text-amberGold-300 font-mono bg-forest-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Aquilaria Malaccensis
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-2">
              <h3 className="font-serif text-3xl font-bold text-linen-50 mb-3">
                Daun & Getah Kayu Gaharu
              </h3>
              
              <p className="text-sm text-linen-200 leading-relaxed mb-6">
                Ekstrak daun dan inti kayu gaharu pilihan yang secara empiris terbukti membuyarkan stagnasi energi Ci, menstabilkan Yin-Yang, meredakan nyeri saraf terdalam, serta bekerja sebagai aromaterapi penenang pikiran yang meningkatkan keharmonisan hubungan intim.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-forest-800 text-xs text-amberGold-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400" />
                  Buyarkan Stagnasi Ci & Nyeri
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400" />
                  Stabilkan Keseimbangan Yin-Yang
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400" />
                  Aromaterapi Penenang Stres
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400" />
                  Meningkatkan Gairah & Keharmonisan
                </span>
              </div>
            </div>
          </motion.div>

          {/* Other 6 Botanical Ingredients */}
          {botanicals.map((item) => (
            <motion.div
              key={item.id}
              variants={slideUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-linen-300 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-forest-950/80 text-linen-100 backdrop-blur-sm border border-forest-800">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-mono text-amberGold-700 block italic mb-1">
                    {item.latin}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <span className="text-[11px] font-semibold text-forest-700 inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Organik Bersertifikat
                </span>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Official Formulation Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-forest-900 border border-amberGold-500/30 text-linen-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amberGold-500/20 border border-amberGold-400/40 flex items-center justify-center flex-shrink-0 text-amberGold-400">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-linen-50">
                Formulasi Murni 100% Organik Natural Herbal
              </h4>
              <p className="text-xs text-linen-300 mt-1 max-w-2xl leading-relaxed">
                Bebas bahan kimia sintetis (BKO), bebas pewarna atau pengawet buatan. Diperkaya intisari <em>Aquilaria malaccensis</em>, <em>Santalum album</em>, <em>Salvia rosmarinus</em>, <em>Oleum olivarum</em>, <em>Cocos nucifera</em>, <em>Melaleuca cajuputi Powell</em>, dan lebih dari 30 tanaman obat nusantara.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-forest-800 text-amberGold-300 text-xs font-bold border border-amberGold-400/30 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              POM TR: 236081291
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
