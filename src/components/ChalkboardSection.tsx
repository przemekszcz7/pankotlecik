import React from "react";
import { SteamWispsIllustration } from "./FoodIllustrations";

export const ChalkboardSection: React.FC = () => {
  const customMenu = [
    { name: "Wegetariańskie naleśniki z twarogiem, szpinakiem i porem", emoji: "🥞", highlight: true },
    { name: "Schab pieczony z kością", emoji: "🍖" },
    { name: "Kotlet mielony z nogi kurczaka, z warzywami", emoji: "🍗" },
    { name: "Pierś z kurczaka zawijana z twarogiem i zielonym pesto", emoji: "🍖" },
    { name: "Pierś z kurczaka zawijana z warzywami", emoji: "🐥" },
    { name: "Pierś z kurczaka zawijana na maśle, z serem żółtym", emoji: "🍗" },
    { name: "Schab zawijany w serze", emoji: "🥩" },
    { name: "Rosolaki", emoji: "👍", isSpecial: true },
    { name: "ZUPA DNIA: OGÓRKOWA 🥒", emoji: "🍲", isSoup: true },
  ];

  return (
    <section id="menu-dnia" className="py-20 px-4 md:px-8 bg-cream/35 linen-bg border-t border-b border-gold/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-1">
          <SteamWispsIllustration className="w-14 h-14 md:w-16 md:h-16" />
        </div>
        
        <div className="text-center mb-10">
          <span className="font-display italic text-gold text-lg md:text-xl block mb-2">Tradycyjny smak ubiegłego stulecia</span>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-5xl tracking-tight">
            Dziś w Menu u Pana Kotlecika
          </h2>
          <div className="w-20 h-[2px] bg-gold/60 mx-auto mt-4" />
        </div>

        {/* Chalkboard Slate Container */}
        <div 
          className="bg-navy-mid text-cream rounded-2xl p-6 md:p-12 border-4 border-[#3D6E9A] relative shadow-[4px_4px_0px_#C4922A] max-w-2xl mx-auto"
          style={{
            backgroundImage: "linear-gradient(rgba(26, 51, 86, 0.95), rgba(19, 38, 64, 0.98))",
          }}
        >
          {/* Wooden Board Frame Inner Accent */}
          <div className="absolute inset-2 border border-cream/10 pointer-events-none rounded-lg" />

          {/* Top header on Board */}
          <div className="relative text-center mb-8 border-b border-cream/10 pb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-[#E8B86A] mb-1">
              Świeża Dostawa • Gotowane z Pasją
            </p>
            <p className="font-handwritten text-4xl md:text-5xl text-cream-deep select-none">
              Danie Dnia
            </p>
          </div>

          {/* Chalkboard Content Listings */}
          <ul className="space-y-5 relative">
            {customMenu.map((item, index) => {
              const itemStyles = item.isSoup 
                ? "text-gold-light border-t border-cream/10 pt-4 mt-6" 
                : item.highlight 
                ? "text-[#E82C2C] font-semibold" 
                : "";

              return (
                <li 
                  key={index} 
                  className={`flex items-start space-x-3 transition-colors duration-200 hover:bg-cream/5 p-1 rounded ${itemStyles}`}
                >
                  <span className="text-xl shrink-0 mt-1 select-none" role="img" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div className="flex-1">
                    <span className="font-handwritten text-2xl md:text-3xl tracking-wide block leading-tight text-white/95">
                      {item.name}
                    </span>
                    {item.isSoup && (
                      <span className="font-mono text-[11px] uppercase tracking-wider text-cream/60 block mt-1">
                        Wyrazista i głęboka w smaku
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Bottom Notes on Chalkboard */}
          <div className="mt-8 pt-6 border-t border-cream/10 text-center relative">
            <p className="font-handwritten text-xl text-[#E8B86A]">
              * Ziemniaczki opiekane lub gotowane i świeże surówki w cenie każdego zestawu!
            </p>
          </div>
        </div>

        {/* Nutritional Disclaimer card that breaks layout slightly */}
        <div className="mt-12 bg-[#F3EDE0] border-l-4 border-gold rounded-r-xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm relative md:-rotate-[0.5deg]">
          <h3 className="font-display font-semibold text-navy text-lg md:text-xl mb-2 flex items-center">
            <span className="mr-2" role="img" aria-label="ważna informacja">💡</span> Zdrowe & Lekkie Pieczenie
          </h3>
          <p className="text-text/90 text-sm md:text-base leading-relaxed">
            Wszystkie nasze kotlety są <strong>PIECZONE</strong> i zdrowe. Obiady "Pana Kotlecika" są też idealne dla diabetyków oraz osób chorych metabolicznie (m.in. uchyłki), a także osób z insulinoopornością i nadwagą!
          </p>
        </div>
      </div>
    </section>
  );
};
