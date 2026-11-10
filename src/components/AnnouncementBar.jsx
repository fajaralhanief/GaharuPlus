import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, ShieldAlert } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-forest-950 text-linen-100 py-2.5 px-4 text-xs md:text-sm font-medium border-b border-amberGold-500/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amberGold-500/20 text-amberGold-300 border border-amberGold-400/30">
            <Sparkles className="w-3 h-3 text-amberGold-400" />
            100% ORGANIK HERBAL
          </span>
          <span className="text-linen-200">
            Minyak Balur Gaharu Plus <strong>Anti Gatal & Alergi</strong> • Diskon s.d. <strong>35%</strong> + Gratis Ongkir Hari Ini!
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-linen-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            BPOM RI & Sertifikasi Halal Resmi
          </span>
          <a 
            href="#paket" 
            className="inline-flex items-center gap-1 text-amberGold-300 hover:text-amberGold-200 font-semibold underline underline-offset-4 transition-colors"
          >
            Klaim Promo Sekarang
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
