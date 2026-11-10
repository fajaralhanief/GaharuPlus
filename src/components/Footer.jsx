import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import LogoGaharu from './LogoGaharu';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-linen-200 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <LogoGaharu variant="full" size="md" colorScheme="light" />

            <p className="text-xs text-linen-300 leading-relaxed max-w-sm">
              Minyak balur herbal premium karya anak bangsa yang memadukan keajaiban getah gaharu alami dengan 100% rempah organik berstandar farmasi tradisional.
            </p>

            <div className="pt-2 text-xs text-linen-300 space-y-1">
              <p><strong>Diproduksi Oleh:</strong> PT Gaharu Herbal Nusantara</p>
              <p><strong>Izin BPOM:</strong> POM TR 236081291</p>
              <p><strong>Sertifikat Halal:</strong> ID00110000492810222</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-linen-50 tracking-wider uppercase">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-linen-300">
              <li><a href="#keunggulan" className="hover:text-amberGold-300 transition-colors">Keunggulan Gaharu</a></li>
              <li><a href="#manfaat" className="hover:text-amberGold-300 transition-colors">Khasiat & Manfaat</a></li>
              <li><a href="#komposisi" className="hover:text-amberGold-300 transition-colors">7 Bahan Alami</a></li>
              <li><a href="#panduan-balur" className="hover:text-amberGold-300 transition-colors">Titik Balur Tubuh</a></li>
              <li><a href="#paket" className="hover:text-amberGold-300 transition-colors">Paket Promo Hari Ini</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-linen-50 tracking-wider uppercase">
              Layanan Konsumen
            </h4>
            <ul className="space-y-2 text-xs text-linen-300">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amberGold-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amberGold-400" />
                <span>08.00 - 21.00 WIB</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amberGold-400" />
                <span>cs@gaharuplus.co.id</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amberGold-400" />
                <span>Distribusi Seluruh Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-linen-50 tracking-wider uppercase">
              Metode Pembayaran
            </h4>
            <p className="text-xs text-linen-300 leading-relaxed">
              Mendukung transfer bank (BCA, Mandiri, BRI, BNI), QRIS, serta <strong>COD (Bayar di Tempat)</strong>.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-linen-100">
              <span className="px-2 py-1 bg-forest-900 rounded border border-forest-800">BCA</span>
              <span className="px-2 py-1 bg-forest-900 rounded border border-forest-800">MANDIRI</span>
              <span className="px-2 py-1 bg-forest-900 rounded border border-forest-800">BRI</span>
              <span className="px-2 py-1 bg-forest-900 rounded border border-forest-800">QRIS</span>
              <span className="px-2 py-1 bg-amberGold-600/30 text-amberGold-300 rounded border border-amberGold-500/40">COD</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-linen-400 gap-4 text-center sm:text-left">
          <p>© 2026 Gaharu Plus Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="max-w-md">
            *Hasil pembaluran pada setiap individu dapat bervariasi tergantung kondisi fisik dan keteraturan penggunaan.
          </p>
        </div>

      </div>
    </footer>
  );
}

