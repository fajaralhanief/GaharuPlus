import React from 'react';

/**
 * LogoGaharu Component
 * 
 * Brand Identity for "Gaharu Plus" - The Royal Herbal Elixir.
 * Art Direction: Minimalist (#1) + Nature / Organic (#21) + Contemporary Modern.
 * 
 * Visual Concept:
 * An unmistakable, majestic Sacred Tree (Pohon Gaharu / Beringin) silhouette.
 * Features:
 * - Lush, scalloped canopy crown (tajuk pohon rimbun yang menaungi)
 * - Solid central trunk rising from the earth and branching into elegant boughs
 * - Natural spreading root base anchoring into the ground line
 * - Radiant amber gold resin core at the apex (sari pati getah gaharu murni)
 * 
 * Typography:
 * Modern high-end geometric sans-serif pairing (Plus Jakarta Sans):
 * - "Gaharu": Confident, architectural bold weight with sleek tight tracking
 * - "Plus": Refined, airy light weight in Radiant Amber Gold
 * - Tagline: "THE ROYAL HERBAL ELIXIR" with expansive letter-spacing (tracking-[0.24em])
 * 
 * Props:
 * - variant: "full" | "stacked" | "icon" | "wordmark" (default: "full")
 * - colorScheme: "default" (light bg) | "light" / "reversed" (dark bg) | "gold" | "monochrome" (default: "default")
 * - size: "sm" | "md" | "lg" | "xl" (default: "md")
 * - showTagline: boolean (default: true)
 * - taglineText: string (default: "The Royal Herbal Elixir")
 * - className: string
 */

export function LogoIcon({ 
  size = "md", 
  colorScheme = "default", 
  className = "" 
}) {
  // Responsive sizing map
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const svgSize = sizeMap[size] || sizeMap.md;

  // Color mappings
  let primaryStroke = "#112519"; // Deep Botanical Green
  let goldStroke = "#C5901D";    // Warm Radiant Amber Gold
  let goldFill = "#D59B1E";
  let canopyFill = "rgba(17, 37, 25, 0.05)";

  if (colorScheme === "light" || colorScheme === "reversed") {
    primaryStroke = "#FDFCF9";   // Pure Linen Alabaster
    goldStroke = "#E3B03E";      // Luminous Gold
    goldFill = "#E3B03E";
    canopyFill = "rgba(253, 252, 249, 0.08)";
  } else if (colorScheme === "gold") {
    primaryStroke = "#D59B1E";
    goldStroke = "#B88216";
    goldFill = "#D59B1E";
    canopyFill = "rgba(213, 155, 30, 0.08)";
  } else if (colorScheme === "monochrome") {
    primaryStroke = "currentColor";
    goldStroke = "currentColor";
    goldFill = "currentColor";
    canopyFill = "currentColor";
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${svgSize} ${className} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="Pohon Alami - Ikon Merek Gaharu Plus"
    >
      {/* 1. Lush Scalloped Tree Canopy (Tajuk / Daun Rimbun Mahkota Pohon) */}
      <path
        d="M12 2.5C9.8 2.5 8 3.8 7.2 5.5C5.8 5.5 4.3 6.8 3.8 8.5C3 10.2 3.2 11.8 4.2 13C5 14.2 6.5 15 8 15C8.8 15 9.5 14.7 10 14.2C10.6 15 11.2 15.3 12 15.3C12.8 15.3 13.4 15 14 14.2C14.5 14.7 15.2 15 16 15C17.5 15 19 14.2 19.8 13C20.8 11.8 21 10.2 20.2 8.5C19.7 6.8 18.2 5.5 16.8 5.5C16 3.8 14.2 2.5 12 2.5Z"
        stroke={primaryStroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={canopyFill}
      />

      {/* 2. Main Sturdy Tree Trunk (Batang Utama Pohon) */}
      <path
        d="M12 21.5V13"
        stroke={primaryStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* 3. Left Branch Reaching into Foliage (Dahan Cabang Kiri) */}
      <path
        d="M12 14.5C10.2 13 8.8 11.2 7.8 8.5"
        stroke={goldStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 4. Right Branch Reaching into Foliage (Dahan Cabang Kanan) */}
      <path
        d="M12 14.5C13.8 13 15.2 11.2 16.2 8.5"
        stroke={goldStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 5. Center Crown Stem (Ranting Tengah ke Puncak) */}
      <path
        d="M12 13V6.5"
        stroke={goldStroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* 6. Ground Horizon & Root Flares (Akar & Garis Tanah) */}
      <path
        d="M4.5 21.5H19.5"
        stroke={primaryStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 21.5C9.5 20 8.5 18.5 7 17.5"
        stroke={primaryStroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 21.5C14.5 20 15.5 18.5 17 17.5"
        stroke={primaryStroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* 7. Sacred Golden Essence Droplet (Getah Emas Murni Gaharu) */}
      <circle
        cx="12"
        cy="5"
        r="1.3"
        fill={goldFill}
      />
    </svg>
  );
}

export default function LogoGaharu({
  variant = "full",
  colorScheme = "default",
  size = "md",
  showTagline = true,
  taglineText = "The Royal Herbal Elixir",
  className = ""
}) {
  // Modern Responsive Typography Scale (Plus Jakarta Sans)
  const fontSizes = {
    sm: {
      brand: "text-lg",
      plus: "text-lg",
      tagline: "text-[8.5px] tracking-[0.2em]",
      gap: "gap-2.5",
    },
    md: {
      brand: "text-2xl",
      plus: "text-2xl",
      tagline: "text-[9.5px] tracking-[0.22em]",
      gap: "gap-3",
    },
    lg: {
      brand: "text-3xl",
      plus: "text-3xl",
      tagline: "text-[11px] tracking-[0.24em]",
      gap: "gap-3.5",
    },
    xl: {
      brand: "text-4xl",
      plus: "text-4xl",
      tagline: "text-xs tracking-[0.26em]",
      gap: "gap-4",
    },
  };

  const fonts = fontSizes[size] || fontSizes.md;

  // Text color based on colorScheme
  const isDarkBg = colorScheme === "light" || colorScheme === "reversed";
  const brandTextColor = isDarkBg ? "text-linen-50" : "text-forest-950";
  const plusTextColor = isDarkBg ? "text-amberGold-400" : "text-amberGold-600";
  const taglineTextColor = isDarkBg ? "text-linen-300" : "text-charcoal-500";

  // 1. ICON ONLY VARIANT
  if (variant === "icon") {
    return <LogoIcon size={size} colorScheme={colorScheme} className={className} />;
  }

  // 2. WORDMARK ONLY VARIANT (Modern Clean Sans Contrast)
  if (variant === "wordmark") {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="flex items-baseline gap-1.5">
          <span className={`font-sans font-extrabold tracking-[-0.03em] ${fonts.brand} ${brandTextColor} leading-none`}>
            Gaharu
          </span>
          <span className={`font-sans font-light tracking-normal ${fonts.plus} ${plusTextColor} leading-none`}>
            Plus
          </span>
        </div>
        {showTagline && (
          <span className={`font-sans font-semibold uppercase ${fonts.tagline} ${taglineTextColor} mt-1.5`}>
            {taglineText}
          </span>
        )}
      </div>
    );
  }

  // 3. STACKED VARIANT (Centered Tree Icon with Modern Wordmark Below)
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="p-2.5 rounded-2xl bg-forest-900/5 border border-amberGold-400/30 mb-2.5 transition-transform duration-300 hover:scale-105">
          <LogoIcon size={size} colorScheme={colorScheme} />
        </div>
        <div className="flex items-baseline justify-center gap-1.5">
          <span className={`font-sans font-extrabold tracking-[-0.03em] ${fonts.brand} ${brandTextColor} leading-none`}>
            Gaharu
          </span>
          <span className={`font-sans font-light tracking-normal ${fonts.plus} ${plusTextColor} leading-none`}>
            Plus
          </span>
        </div>
        {showTagline && (
          <span className={`font-sans font-semibold uppercase ${fonts.tagline} ${taglineTextColor} mt-1.5`}>
            {taglineText}
          </span>
        )}
      </div>
    );
  }

  // 4. FULL HORIZONTAL VARIANT (DEFAULT: Tree Icon + Modern Sans Wordmark)
  return (
    <div className={`inline-flex items-center ${fonts.gap} group focus:outline-none select-none ${className}`}>
      {/* Tree Icon Badge with subtle glass/organic border */}
      <div className={`p-1.5 sm:p-2 rounded-2xl flex items-center justify-center transition-all duration-300 ${
        isDarkBg 
          ? "bg-forest-900/90 border border-amberGold-400/30 group-hover:border-amberGold-400 group-hover:bg-forest-900 shadow-sm" 
          : "bg-forest-50/80 border border-forest-200/80 group-hover:border-amberGold-500/50 group-hover:bg-forest-50 shadow-sm"
      }`}>
        <LogoIcon size={size} colorScheme={colorScheme} />
      </div>

      {/* Modern Typography Unit */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-sans font-extrabold tracking-[-0.03em] ${fonts.brand} ${brandTextColor} leading-none transition-colors group-hover:text-forest-800`}>
            Gaharu
          </span>
          <span className={`font-sans font-light tracking-normal ${fonts.plus} ${plusTextColor} leading-none transition-colors group-hover:text-amberGold-500`}>
            Plus
          </span>
        </div>
        {showTagline && (
          <span className={`font-sans font-semibold uppercase ${fonts.tagline} ${taglineTextColor} mt-1.5 transition-colors`}>
            {taglineText}
          </span>
        )}
      </div>
    </div>
  );
}
