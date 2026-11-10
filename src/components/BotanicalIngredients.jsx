import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { slideUp, staggerContainer } from '../utils/animations';

export default function BotanicalIngredients() {
  const botanicals = [
    {
      id: 2,
      name: 'Jahe Merah Pilihan',
      latin: 'Zingiber Officinale Var. Rubrum',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
      benefit: 'Kadar gingerol dan shogaol tertinggi untuk mengalirkan sirkulasi darah, menghangatkan tubuh hingga ke tulang, dan meluruhkan kembung.',
      tag: 'Pemanas Alami Tubuh',
    },
    {
      id: 3,
      name: 'Minyak Kelapa Murni (VCO)',
      latin: 'Cocos Nucifera Oil',
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
      benefit: 'Diekstrak dingin (cold-pressed) sebagai carrier oil alami yang menjaga kelembapan kulit dan mempermudah penetrasi rempah ke pori-pori.',
      tag: 'Carrier Oil & Pelembap',
    },
    {
      id: 4,
      name: 'Cengkeh Nusantara',
      latin: 'Syzygium Aromaticum',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
      benefit: 'Kaya senyawa aktif Eugenol murni yang bertindak sebagai analgesik alami penghilang rasa ngilu pada persendian dan pegal punggung.',
      tag: 'Analgesik Pereda Nyeri',
    },
    {
      id: 5,
      name: 'Serai Wangi Segar',
      latin: 'Cymbopogon Nardus',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
      benefit: 'Memberikan kesegaran aromaterapi pelega rongga pernapasan, meredakan gatal alergi ringan, serta melindungi dari gigitan serangga.',
      tag: 'Pelega Napas & Anti-Nyamuk',
    },
    {
      id: 6,
      name: 'Bunga Lawang & Adas',
      latin: 'Illicium Verum',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      benefit: 'Antioksidan kuat yang menenangkan kontraksi otot lambung, meredakan begah, kolik, serta meningkatkan stamina kekebalan tubuh.',
      tag: 'Penenang Pencernaan',
    },
    {
      id: 7,
      name: 'Kayu Manis Alami',
      latin: 'Cinnamomum Verum',
      image: 'https://images.unsplash.com/photo-1509358740172-f77c168f6312?auto=format&fit=crop&w=600&q=80',
      benefit: 'Menyeimbangkan aroma gaharu, menutrisi lapisan kulit terluar, serta memberi sensasi kehangatan aromatik manis yang menenangkan.',
      tag: 'Antioksidan & Nutrisi Kulit',
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
            Kemurnian Tanpa Kompromi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            7 Mahakarya Rempah Nusantara <br className="hidden sm:inline" />
            <span className="italic text-gold-gradient font-serif">Diperkaya Getah Gaharu Murni</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Setiap tetes Gaharu Plus diproses melalui ekstraksi modern bersuhu rendah demi menjaga keutuhan zat bioaktif alami di dalamnya.
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
          
          {/* Ingredient 1: Kayu Gaharu (Main Hero Feature - 2 columns span on large) */}
          <motion.div 
            variants={slideUp}
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-3xl bg-forest-900 text-linen-100 border border-amberGold-400/50 shadow-luxury flex flex-col justify-between overflow-hidden relative"
          >
            {/* Background image preview with rich dark gradient overlay */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=1000&q=80" 
                alt="Getah Resin Kayu Gaharu (Aquilaria Malaccensis) Grade Super" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amberGold-500 text-forest-950 shadow-md">
                  Bahan Utama Eksklusif
                </span>
                <span className="text-xs text-amberGold-300 font-mono bg-forest-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Aquilaria Malaccensis
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-2">
              <h3 className="font-serif text-3xl font-bold text-linen-50 mb-3">
                Getah Kayu Gaharu (Oud)
              </h3>
              <p className="text-linen-200 text-sm leading-relaxed mb-6">
                Raja dari segala wewangian dan tanaman obat kuno. Ekstrak resin gaharu kaya akan senyawa <em>sesquiterpene</em> alami yang terbukti secara ilmiah sanggup menenangkan sistem saraf pusat, meredakan peradangan sendi mendalam, serta membuka aliran energi vital tubuh yang tersumbat.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-forest-800 text-xs">
                <div>
                  <span className="text-amberGold-400 font-bold block mb-0.5">Khasiat Inti</span>
                  <span className="text-linen-300">Relaksasi, Anti-Stres, Pulihkan Vitalitas</span>
                </div>
                <div>
                  <span className="text-amberGold-400 font-bold block mb-0.5">Karakter Aroma</span>
                  <span className="text-linen-300">Hangat, Kayu Mewah, Menenangkan Batin</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6 Other Botanicals with Photo Cards */}
          {botanicals.map((bot) => (
            <motion.div
              key={bot.id}
              variants={slideUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-linen-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Botanical Photo Thumbnail */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-linen-100 relative">
                  <img 
                    src={bot.image} 
                    alt={`Bahan Alami ${bot.name}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] font-mono text-linen-100 bg-forest-950/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {bot.latin}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold text-forest-950 mb-2">
                    {bot.name}
                  </h4>
                  <p className="text-charcoal-600 text-xs leading-relaxed mb-4">
                    {bot.benefit}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-[11px] font-semibold text-forest-700 bg-forest-50 px-2.5 py-1 rounded-md inline-block">
                  {bot.tag}
                </span>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Purity Statement Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-forest-100/60 border border-forest-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-forest-800 flex-shrink-0" />
            <span className="text-sm text-forest-950 font-medium">
              Seluruh bahan baku dipanen dari perkebunan organik terstandar di nusantara dan diuji di laboratorium bersertifikasi.
            </span>
          </div>
          <a href="#paket" className="text-xs uppercase tracking-wider font-bold text-forest-800 hover:text-forest-950 underline underline-offset-4 flex-shrink-0">
            Dapatkan Keaslian Produk &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  );
}
