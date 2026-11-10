import React from 'react';

/**
 * LogoGaharu Component
 * 
 * Brand Identity for "Gaharu Plus" - The Royal Herbal Elixir.
 * Art Direction: Minimalist (#1) + Nature / Organic (#21) + Contemporary Modern.
 * 
 * Visual Concept:
 * An iconic, minimalist Pohon Beringin (Banyan Tree / Sacred Fig) silhouette.
 * Features:
 * - Expansive multi-domed canopy (representing shelter, vitality, and natural longevity)
 * - Distinctive aerial roots (akar gantung) descending gracefully to the earth
 * - A luminous amber gold resin core (the precious essence of Gaharu oil)
 * - Grounded horizontal base anchoring the tree in Indonesian botanical wisdom
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

  if (colorScheme === "light" || colorScheme === "reversed") {
    primaryStroke = "#FDFCF9";   // Pure Linen Alabaster
    goldStroke = "#E3B03E";      // Luminous Gold
    goldFill = "#E3B03E";
  } else if (colorScheme === "gold") {
    primaryStroke = "#D59B1E";
    goldStroke = "#B88216";
    goldFill = "#D59B1E";
  } else if (colorScheme === "monochrome") {
    primaryStroke = "currentColor";
    goldStroke = "currentColor";
    goldFill = "currentColor";
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${svgSize} ${className} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="Pohon Beringin Alami - Ikon Merek Gaharu Plus"
    >
      {/* 1. Beringin Crown Dome: 5 connected sheltering arches */}
      <path
        d="M12 3.2C10.2 3.2 8.8 4.3 8 5.8C6.6 5.8 5.2 6.8 4.6 8.2C3.3 9.2 2.5 10.8 2.5 12.5C2.5 14.8 4.3 16.5 6.6 16.5C7.5 16.5 8.4 16.1 9 15.5C9.8 16.2 10.8 16.6 12 16.6C13.2 16.6 14.2 16.2 15 15.5C15.6 16.1 16.5 16.5 17.4 16.5C19.7 16.5 21.5 14.8 21.5 12.5C21.5 10.8 20.7 9.2 19.4 8.2C18.8 6.8 17.4 5.8 16 5.8C15.2 4.3 13.8 3.2 12 3.2Z"
        stroke={primaryStroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 2. Inner Foliage / Branch Curve Arch */}
      <path
        d="M8 9.8C9.2 8.5 10.5 7.8 12 7.8C13.5 7.8 14.8 8.5 16 9.8"
        stroke={goldStroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* 3. Sacred Golden Essence Droplet / Core of Gaharu */}
      <circle
        cx="12"
        cy="11.6"
        r="1.4"
        fill={goldFill}
      />

      {/* 4. Central Solid Dual Trunk */}
      <path
        d="M11 16.4V21.5"
        stroke={primaryStroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 16.4V21.5"
        stroke={primaryStroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* 5. Left Outer Aerial Root (Akar Gantung Beringin) */}
      <path
        d="M6.5 15.8V19.8C6.5 20.8 5.8 21.5 4.8 21.5"
        stroke={primaryStroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Left Inner Golden Aerial Root */}
      <path
        d="M8.8 15.8V21.2"
        stroke={goldStroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* 6. Right Outer Aerial Root (Akar Gantung Beringin) */}
      <path
        d="M17.5 15.8V19.8C17.5 20.8 18.2 21.5 19.2 21.5"
        stroke={primaryStroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Right Inner Golden Aerial Root */}
      <path
        d="M15.2 15.8V21.2"
        stroke={goldStroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* 7. Ground Horizon Base Bar */}
      <path
        d="M3.5 21.5H20.5"
        stroke={primaryStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
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

  // 3. STACKED VARIANT (Centered Beringin Icon with Modern Wordmark Below)
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

  // 4. FULL HORIZONTAL VARIANT (DEFAULT: Modern Beringin Icon + Modern Sans Wordmark)
  return (
    <div className={`inline-flex items-center ${fonts.gap} group focus:outline-none select-none ${className}`}>
      {/* Minimalist Beringin Icon Badge */}
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
