import React from "react";

/**
 * 1. Kotlet Schabowy on an Oval Plate (with fork marks and off-center lemon slice)
 * This sits in the Hero and has a subtle float animation.
 */
export const HeroKotletIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 240 160"
      className={`${className} animate-float-kotlet`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rysunek chrupiącego kotleta schabowego na talerzu"
    >
      {/* Oval Plate - 2px navy stroke, filled with crisp white */}
      <ellipse cx="120" cy="80" rx="100" ry="60" stroke="#1E3A5F" strokeWidth="2.5" fill="#FFFFFF" />
      {/* Plate Inner Ring */}
      <ellipse cx="120" cy="80" rx="80" ry="45" stroke="#1E3A5F" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* The Kotlet – organic, slightly asymmetric crispy shape */}
      <path
        d="M60 75 C 50 60, 90 40, 130 45 C 160 50, 175 60, 180 80 C 185 100, 155 115, 120 112 C 85 110, 70 90, 60 75 Z"
        stroke="#1E3A5F"
        strokeWidth="2.5"
        fill="#F5E4C0" // warm gold pale fill
      />

      {/* Crispy Texture Dots/Breading marks */}
      <path d="M 80 55 A 1 1 0 1 0 80 57" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 100 50 A 1 1 0 1 0 100 52" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 120 52 A 1 1 0 1 0 120 54" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 145 55 A 1 1 0 1 0 145 57" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 160 65 A 1 1 0 1 0 160 67" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 165 85 A 1 1 0 1 0 165 87" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 148 100 A 1 1 0 1 0 148 102" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 110 105 A 1 1 0 1 0 110 107" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 80 98 A 1 1 0 1 0 80 100" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M 70 82 A 1 1 0 1 0 70 84" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      {/* Fork Marks - hand carved lines across the surface */}
      <path d="M85 75 L105 70" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M87 79 L107 74" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M90 83 L110 78" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      <path d="M130 85 L150 82" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M131 89 L151 86" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <path d="M132 93 L152 90" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      {/* Off-Center Semicircle Lemon Slice */}
      <g transform="translate(45, 100) rotate(-15)">
        <path
          d="M 10 20 A 15 15 0 0 1 40 20 Z"
          stroke="#1E3A5F"
          strokeWidth="2.2"
          fill="#FAF6EE" // cream fill
        />
        {/* Lemon Radiating lines */}
        <path d="M25 20 L25 10" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M25 20 L17 14" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M25 20 L33 14" stroke="#1E3A5F" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

/**
 * 2. Steaming Soup Bowl (with herbs and 2 gentle steam swirls)
 * Used as an accent in the Menu section
 */
export const SoupBowlIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 140 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rysunek miski dymiącej zupy"
    >
      {/* S-curve steam lines above */}
      <path
        d="M55 25 C52 15, 60 10, 56 2"
        className="animate-steam-1"
        stroke="#1E3A5F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M85 24 C82 14, 90 9, 86 1"
        className="animate-steam-2"
        stroke="#1E3A5F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Soup Bowl Body (wider at top, tapered bottom) */}
      <path
        d="M20 35 L120 35 L108 80 C104 86, 95 88, 85 88 L55 88 C45 88, 36 86, 32 80 Z"
        stroke="#1E3A5F"
        strokeWidth="2.5"
        fill="#EAE0CC" // cream-deep fill
      />

      {/* Soup level line & Liquid surface */}
      <ellipse cx="70" cy="35" rx="50" ry="8" stroke="#1E3A5F" strokeWidth="2" fill="#FAF6EE" />

      {/* Small floating herb sprig on the soup surface */}
      <g transform="translate(62, 32)">
        <path d="M0 4 C4 0, 10 0, 12 3" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3 C10 6, 4 6, 0 4" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 1 C5 -3, 8 -3, 9 1" stroke="#1E3A5F" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Bowl Decorative horizontal stripe */}
      <path d="M25 55 L115 55" stroke="#1E3A5F" strokeWidth="1.2" strokeDasharray="4 2" />
      {/* Bowl Base Ring */}
      <path d="M48 88 L92 88" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

/**
 * 3. Three Pierogi (hand folded, pinched edge details, slightly asymmetrical)
 * Used as a Category Card decoration
 */
export const PierogiIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Trzy tradycyjne pierogi"
    >
      {/* Pieróg 1 - Left, tilted, gold pale fill */}
      <g transform="translate(10, 20) rotate(-15)">
        <path
          d="M 5 35 C 5 5, 55 5, 55 35 C 30 40, 15 40, 5 35 Z"
          stroke="#1E3A5F"
          strokeWidth="2"
          fill="#FAF6EE"
        />
        {/* Pinched edge short curves */}
        <path d="M 8 18 C 11 20, 13 18, 14 15" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 16 11 C 19 13, 21 11, 22 8" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 27 8 C 30 10, 32 8, 33 5" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 39 12 C 41 14, 43 12, 45 9" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 46 22 C 48 24, 51 22, 52 19" stroke="#1E3A5F" strokeWidth="1.5" />
      </g>

      {/* Pieróg 2 - Center-back, slightly lower, cream-deep fill, slightly scaled */}
      <g transform="translate(60, 30) scale(1.1) rotate(5)">
        <path
          d="M 5 35 C 5 5, 55 5, 55 35 C 30 40, 15 40, 5 35 Z"
          stroke="#1E3A5F"
          strokeWidth="2"
          fill="#F5E4C0"
        />
        <path d="M 8 18 C 11 20, 13 18, 14 15" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 16 11 C 19 13, 21 11, 22 8" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 27 8 C 30 10, 32 8, 33 5" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 39 12 C 41 14, 43 12, 45 9" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 46 22 C 48 24, 51 22, 52 19" stroke="#1E3A5F" strokeWidth="1.5" />
      </g>

      {/* Pieróg 3 - Right, overlapping, slightly off-angle */}
      <g transform="translate(100, 25) rotate(15)">
        <path
          d="M 5 35 C 5 5, 55 5, 55 35 C 30 40, 15 40, 5 35 Z"
          stroke="#1E3A5F"
          strokeWidth="2"
          fill="#FAF6EE"
        />
        <path d="M 8 18 C 11 20, 13 18, 14 15" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 16 11 C 19 13, 21 11, 22 8" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 27 8 C 30 10, 32 8, 33 5" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 39 12 C 41 14, 43 12, 45 9" stroke="#1E3A5F" strokeWidth="1.5" />
        <path d="M 46 22 C 48 24, 51 22, 52 19" stroke="#1E3A5F" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

/**
 * 4. Potato with Small Dot Pattern (faint, round, cozy hand-drawn potato)
 * Used as a background decoration or side graphic in the About section.
 */
export const PotatoIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Przyjazny ziemniaczek"
    >
      {/* Slightly lumpy potato outline */}
      <path
        d="M15 40 C 10 20, 35 12, 65 15 C 85 18, 92 35, 88 55 C 84 70, 55 75, 35 72 C 20 70, 18 55, 15 40 Z"
        stroke="#1E3A5F"
        strokeWidth="2"
        fill="#FAF6EE"
      />
      {/* Skin Speckles */}
      <circle cx="30" cy="30" r="1.2" fill="#1E3A5F" />
      <circle cx="34" cy="34" r="1" fill="#1E3A5F" />
      <circle cx="50" cy="25" r="1.2" fill="#1E3A5F" />
      <circle cx="65" cy="35" r="1" fill="#1E3A5F" />
      <circle cx="72" cy="50" r="1.2" fill="#1E3A5F" />
      <circle cx="48" cy="58" r="1" fill="#1E3A5F" />
      <circle cx="32" cy="50" r="1.3" fill="#1E3A5F" />
      <circle cx="55" cy="45" r="0.8" fill="#1E3A5F" />
    </svg>
  );
};

/**
 * 5. Small crossed Fork and Knife
 * Elegant and extremely subtle, used in the Footer.
 */
export const CrossedCutleryIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Przekrzyżowane sztućce"
    >
      {/* Knife (slightly tilted) */}
      <g transform="translate(40,40) rotate(-45)">
        <path d="M-4 -30 L4 -30 L4 0 L-4 0 Z" stroke="#1E3A5F" strokeWidth="2" fill="#FAF6EE" strokeLinejoin="round" />
        <path d="M0 0 L0 30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Fork (crossed the other way) */}
      <g transform="translate(40,40) rotate(45)">
        {/* Handle */}
        <path d="M0 5 L0 30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
        {/* Head */}
        <path d="M-8 -15 L8 -15 L6 5 L-6 5 Z" stroke="#1E3A5F" strokeWidth="2" fill="#FAF6EE" strokeLinejoin="round" />
        {/* Prongs */}
        <path d="M-5 -15 L-5 -30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
        <path d="M-1.5 -15 L-1.5 -30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
        <path d="M1.5 -15 L1.5 -30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 -15 L5 -30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * 6. Steam Wisps only (with active animation CSS classes)
 * Renders two gentle organic steam wisps above the chalkboard heading
 */
export const SteamWispsIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 60 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Para wodna"
    >
      <path
        d="M20 40 C14 20, 26 15, 20 2"
        className="animate-steam-1"
        stroke="#E8B86A" // Warm Gold steam
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M40 38 C34 18, 46 13, 40 1"
        className="animate-steam-2"
        stroke="#E8B86A" // Warm Gold steam
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
