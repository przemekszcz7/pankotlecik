import React from "react";
import { SoupBowlIllustration, PierogiIllustration } from "./FoodIllustrations";

export const MenuSection: React.FC = () => {
  return (
    <section id="cennik" className="py-24 px-4 md:px-8 bg-navy text-cream apron-bg relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Soup Bowl illustration */}
        <div className="flex flex-col items-center text-center mb-16">
          <SoupBowlIllustration className="w-20 h-20 mb-3 text-gold-light" />
          <span className="font-mono text-xs uppercase tracking-widest text-gold-light/80 block mb-2">Prawdziwe Polskie Smaki</span>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-5xl tracking-tight">
            Cennik & Kompozycje Dań
          </h2>
          {/* Subtle gold divider line with scale transition effect */}
          <div className="w-16 h-[2.5px] bg-gold mt-4" />
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Box 1: Core Dinner Meal (Obiad) */}
          <div className="bg-bg-card-dark border border-white/5 rounded-xl p-8 hover:border-white/20 transition-colors duration-300 flex flex-col justify-between border-l-2 border-[#3D6E9A]">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-2xl text-white">Domowy Zestaw Obiadowy</h3>
                <span className="font-mono text-2xl text-gold font-semibold tracking-tight whitespace-nowrap">
                  19 PLN
                </span>
              </div>
              <p className="text-sm font-display italic text-gold-pale mb-6">Syta porcja stworzona, by cieszyć podniebienie</p>
              
              <ul className="space-y-4 text-sm leading-relaxed text-text-pale">
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span><strong>2 dowolnie wybrane kotlety</strong> z dzisiejszej tablicy menu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span>Podawane z ziemniaczkami gotowanymi lub chrupiącymi pieczonymi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span>W zestawie zdrowa, świeżo cięta surówka domowa</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-cream/45 italic font-sans">Idealna opcja na pełnowartościowy obiad</span>
              <span className="font-mono text-xs text-gold-light font-medium tracking-wider">KOMPLETNY TALERZ</span>
            </div>
          </div>

          {/* Box 2: Soups and Additions */}
          <div className="bg-bg-card-dark border border-white/5 rounded-xl p-8 hover:border-white/20 transition-colors duration-300 flex flex-col justify-between border-l-2 border-[#3D6E9A]">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-2xl text-white">Tradycyjna Zupa Dnia</h3>
                <span className="font-mono text-2xl text-gold font-semibold tracking-tight whitespace-nowrap">
                  6 PLN
                </span>
              </div>
              <p className="text-sm font-display italic text-gold-pale mb-6">Gorący, aromatyczny wywar na bazie naturalnych składników</p>

              <ul className="space-y-4 text-sm leading-relaxed text-text-pale">
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span>Każdego dnia inna, sycąca wegetariańska lub mięsna zupa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span>Gotowana według tradycyjnych, wielopokoleniowych receptur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2" aria-hidden="true">✔</span>
                  <span>Prawdziwy rosół, bogata ogórkowa, kapuśniak czy krupnik</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-cream/45 italic font-sans">Możliwość zakupu samej zupy lub w komplecie</span>
              <span className="font-mono text-xs text-gold-light font-medium tracking-wider">DOMOWY GARNEK</span>
            </div>
          </div>

        </div>

        {/* Extra specialties / Pierogi / Naleśniki block featuring Pierogi Illustration */}
        <div className="bg-[#1A3356] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl max-w-4xl mx-auto">
          <div className="shrink-0 w-36 h-28 flex items-center justify-center">
            <PierogiIllustration className="w-full h-full text-gold-light" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">
              Dlaczego "Pan Kotlecik" wyróżnia się w Warszawie?
            </h3>
            <p className="text-text-pale text-sm md:text-base leading-relaxed mb-4">
              U nas nie pójdziesz na jeden kompromis! Możesz zdecydować się na tzw. <strong>mix kucharski</strong> – pomieszać zupy, wyroby mięsne oraz dodatki skrobiowe na jednym talerzu, żeby spróbować różnych niesamowitych smaków w bezkonkurencyjnej cenie. Nasz zespół doradzi Ci przy każdym zamówieniu!
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gold-light">
              <span>#PrawdziweJedzenie</span>
              <span>•</span>
              <span>#PieczoneBezGłębokiegoTłuszczu</span>
              <span>•</span>
              <span>#MixKucharski</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
