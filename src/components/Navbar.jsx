import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import LogoGaharu from './LogoGaharu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Khasiat & Manfaat', href: '#manfaat' },
    { name: '7 Bahan Alami', href: '#komposisi' },
    { name: 'Titik Balur', href: '#panduan-balur' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Pilihan Paket', href: '#paket' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`sticky top-0 z-40 glass-nav transition-all duration-300 ${scrolled ? 'shadow-md py-1' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity Logo */}
        <a href="#" className="focus:outline-none">
          <LogoGaharu variant="full" size="md" colorScheme="default" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-charcoal-700">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-forest-800 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amberGold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/6287888000551?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20ingin%20konsultasi%20dan%20memesan%20minyak%20balur%20Gaharu%20Plus." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-850 text-linen-50 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 border border-forest-700"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Pesan via WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button" 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 rounded-lg text-charcoal-700 hover:text-forest-900 hover:bg-linen-200 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-linen-300 bg-linen-100 px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3 font-medium text-charcoal-800 text-base">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 border-b border-linen-200 hover:text-forest-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <a 
                href="https://wa.me/6287888000551?text=Halo%20Admin%20Gaharu%20Plus,%20saya%20ingin%20konsultasi%20dan%20memesan%20Gaharu%20Plus." 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-forest-900 text-linen-50 font-semibold shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

