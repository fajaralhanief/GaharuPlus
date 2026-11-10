import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import TrustBadges from './components/TrustBadges';
import StoryComparison from './components/StoryComparison';
import BentoGrid from './components/BentoGrid';
import TitikBalur from './components/TitikBalur';
import BotanicalIngredients from './components/BotanicalIngredients';
import Testimonials from './components/Testimonials';
import PricingPackages from './components/PricingPackages';
import FAQAccordion from './components/FAQAccordion';
import CTASection from './components/CTASection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-linen-50 text-charcoal-800 font-sans selection:bg-amberGold-200 selection:text-forest-950">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Glassmorphism Sticky Navigation Header */}
      <Navbar />

      <main>
        {/* 3. Hero Carousel Section (3 Slides, Framer Motion) */}
        <HeroCarousel />

        {/* 4. Trust & Legal Certification Bar (BPOM, Halal MUI) */}
        <TrustBadges />

        {/* 5. Story of Agarwood & Head-to-Head Comparison */}
        <StoryComparison />

        {/* 6. Khasiat & Manfaat Bento Grid (Framer Motion Filter & Hover) */}
        <BentoGrid />

        {/* 7. Interactive Titik Balur Guide (Anatomical Reflexology SVG) */}
        <TitikBalur />

        {/* 8. 7 Mahakarya Rempah Nusantara (Gaharu & Botanicals) */}
        <BotanicalIngredients />

        {/* 9. Testimoni Konsumen & Endorsement Ahli Medis */}
        <Testimonials />

        {/* 10. Paket Kebugaran & Pemesanan Instan WhatsApp */}
        <PricingPackages />

        {/* 11. FAQ Accordion Interaktif */}
        <FAQAccordion />

        {/* 12. Final High-Trust Call To Action */}
        <CTASection />
      </main>

      {/* 13. Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 14. Comprehensive Footer */}
      <Footer />
    </div>
  );
}

