import React, { useState, useEffect } from "react";
import { 
  HeroKotletIllustration, 
  PotatoIllustration, 
  CrossedCutleryIllustration 
} from "./components/FoodIllustrations";
import { ChalkboardSection } from "./components/ChalkboardSection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { OpeningHoursAndMap } from "./components/OpeningHoursAndMap";
import { ReviewSection } from "./components/ReviewSection";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event observer to trigger soft bottom border on nav bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-text selection:bg-gold/20 flex flex-col font-sans">
      
      {/* Editorial Top Accent Bar - Signature Navy Accent */}
      <div className="h-[5px] bg-[#1E3A5F] w-full sticky top-0 z-50" />

      {/* Navigation Header */}
      <header 
        className={`sticky top-[5px] z-40 transition-all duration-300 w-full ${
          scrolled 
            ? "bg-[#FAF6EE]/95 backdrop-blur-md border-b border-navy/10 py-3 shadow-[0_2px_15px_rgba(30,58,95,0.04)]" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo - First Handwritten place allowed */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <span className="font-handwritten text-3xl md:text-4xl text-navy font-bold leading-none tracking-wide hover:text-gold transition-colors block">
              Pan Kotlecik
            </span>
            <div className="hidden sm:block text-[10px] font-mono uppercase tracking-widest text-text-muted border-l border-gold/30 pl-2.5 mt-1.5 font-semibold">
              Smak Domu
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 font-sans text-sm font-semibold tracking-wide text-navy-mid">
            <a href="#filozofia" className="hover:text-gold transition-colors duration-200">
              Nasza Filozofia
            </a>
            <a href="#menu-dnia" className="hover:text-gold transition-colors duration-200">
              Danie Dnia
            </a>
            <a href="#cennik" className="hover:text-gold transition-colors duration-200">
              Cennik
            </a>
            <a href="#galeria" className="hover:text-gold transition-colors duration-200">
              Galeria
            </a>
            <a href="#kontakt-i-godziny" className="hover:text-gold transition-colors duration-200">
              Kontakt
            </a>
          </nav>

          {/* Call CTA Button / Mobil toggle */}
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+48455448003"
              className="hidden lg:inline-flex items-center space-x-2 bg-navy hover:bg-navy-mid text-cream font-sans text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22.5 18a1.5 1.5 0 010 3h-2.25a15 15 0 01-15-15v-2.25a1.5 1.5 0 013 0v2.25c0 6.627 5.373 12 12 12H22.5z" />
              </svg>
              <span className="font-mono">+48 455 448 003</span>
            </a>

            {/* Mobile Nav Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-navy focus:outline-none focus:ring-1 focus:ring-gold/30 rounded"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6EE] border-b border-navy/10 px-4 py-6 space-y-4 shadow-inner">
            <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-wide text-navy-mid">
              <a 
                href="#filozofia" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold transition-colors py-1"
              >
                Nasza Filozofia
              </a>
              <a 
                href="#menu-dnia" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold transition-colors py-1"
              >
                Danie Dnia
              </a>
              <a 
                href="#cennik" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold transition-colors py-1"
              >
                Cennik
              </a>
              <a 
                href="#galeria" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold transition-colors py-1"
              >
                Galeria
              </a>
              <a 
                href="#kontakt-i-godziny" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold transition-colors py-1"
              >
                Kontakt i Godziny
              </a>
            </nav>
            <div className="pt-4 border-t border-navy/5">
              <a 
                href="tel:+48455448003"
                className="w-full flex items-center justify-center space-x-2 bg-navy hover:bg-navy-mid text-cream font-sans font-bold py-3 px-4 rounded-xl shadow-md transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.5 18a1.5 1.5 0 010 3h-2.25a15 15 0 01-15-15v-2.25a1.5 1.5 0 013 0v2.25c0 6.627 5.373 12 12 12H22.5z" />
                </svg>
                <span className="font-mono text-sm">+48 455 448 003</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pb-32 px-4 md:px-8 bg-cream linen-bg overflow-hidden flex items-center min-h-[75vh]">
          <div className="max-w-4xl mx-auto w-full text-left z-10 space-y-8">
            
            {/* Asymmetrical 50px Accent Line */}
            <div className="w-[50px] h-[3px] bg-navy" />

            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold block">Adres: Skarbka z Gór 108, Warszawa</span>
              <h1 className="font-display font-black text-navy tracking-tight leading-[1.08]" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.2rem)" }}>
                Zapraszamy na PRAWDZIWE JEDZENIE.
              </h1>
            </div>

            <p className="font-sans text-lg md:text-xl text-text/85 leading-relaxed max-w-2xl font-light">
              Naszą specjalnością są pyszne i zdrowe kotlety w różnych wariantach oraz sycące zupy, gotowane z miłości do polskiej kuchni. 
            </p>

            {/* pricing badges breaking grid with playfair inline tags */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              
              {/* Obiad badge */}
              <div className="bg-[#FAF6EE] border border-gold/35 rounded-xl px-5 py-3 shadow-[3px_3px_0px_rgba(196,146,42,0.15)] flex flex-col">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">DOMOWY OBIAD</span>
                <span className="font-display italic text-lg text-navy font-semibold">
                  Zestaw za <strong className="font-mono text-gold text-xl font-medium not-italic ml-1">19 zł</strong>
                </span>
              </div>

              {/* Zupa badge */}
              <div className="bg-[#FAF6EE] border border-gold/35 rounded-xl px-5 py-3 shadow-[3px_3px_0px_rgba(196,146,42,0.15)] flex flex-col">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">KLASYCZNA ZUPA</span>
                <span className="font-display italic text-lg text-navy font-semibold">
                  Zupa dnia za <strong className="font-mono text-gold text-xl font-medium not-italic ml-1">6 zł</strong>
                </span>
              </div>

            </div>

            {/* Action row with Facebook reference */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#menu-dnia"
                className="inline-flex justify-center items-center bg-navy hover:bg-navy-mid text-cream font-sans font-semibold px-7 py-3.5 rounded-xl shadow-md transition-colors duration-200"
              >
                Zobacz menu na dziś
              </a>
              <a 
                href="#kontakt-i-godziny"
                className="inline-flex justify-center items-center border border-navy/20 hover:border-navy/40 text-navy font-sans font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 bg-white/30"
              >
                Godziny & Dojazd
              </a>
            </div>
          </div>
        </section>

        {/* Prose Section - 3 columns, tight padding, NO icons (as requested by layout guidelines) */}
        <section id="filozofia" className="py-16 px-4 md:px-8 bg-bg-section relative overflow-hidden">
          {/* Subtle decoration: faint potato background drawing */}
          <div className="absolute right-8 bottom-4 opacity-10 w-28 h-24 pointer-events-none">
            <PotatoIllustration className="w-full h-full text-navy" />
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Soft italic heading breaks alignment schema */}
            <div className="mb-12 text-center">
              <h2 className="font-display font-medium italic text-gold text-2xl md:text-3xl tracking-normal">
                U nas zjesz tak, jak powinno się jadać w prawdziwym domu.
              </h2>
            </div>

            {/* 3 columns content format */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
              
              <div className="space-y-3">
                <h3 className="font-display font-bold text-navy text-lg md:text-xl border-b border-navy/15 pb-2">
                  1. Sekrety Zdrowego Pieczenia
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Zrywamy z tradycją ociekających smalcem, ciężkostrawnych dań barowych. Wszystkie nasze kotlety są <strong>PIECZONE</strong> w piecu konwekcyjnym. To sprawia, że są wyjątkowo lekkostrawne, pachnące i bezpieczne również dla osób z wrażliwym układem pokarmowym.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-navy text-lg md:text-xl border-b border-navy/15 pb-2">
                  2. Śląski Mix i Dobór Wyrobów
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Każdy oferowany zestaw obiadowy za jedyne 19 zł pozwala Ci wybrać aż <strong>dwa różne kotlety</strong> z dzisiejszego jadłospisu, podawane z pysznymi ziemniaczkami gotowanymi lub pieczonymi oraz codziennie świeżymi, pełnymi witamin surówkami.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-navy text-lg md:text-xl border-b border-navy/15 pb-2">
                  3. Kuchnia dla Każdego Brzuszka
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Pieczenie pozwala nam dbać o wszystkich klientów. Oferowane posiłki są idealne dla osób borykających się z zaburzeniami metabolicznymi (uchyłki), insulinoopornością, nadwagą czy diabetyków. To prawdziwe polskie jedzenie ugotowane z medyczną dbałością o detale.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Today's Special Chalkboard Component */}
        <ChalkboardSection />

        {/* Gallery of photos customized for Pan Kotlecik with lightbox */}
        <GallerySection />

        {/* Menu core structured price board */}
        <MenuSection />

        {/* Testimonials from Facebook */}
        <ReviewSection />

        {/* Location and Opening Hours component */}
        <OpeningHoursAndMap />

      </main>

      {/* Footer System - Warm, Compact and Human */}
      <footer className="bg-navy-dark text-white border-t-2 border-[#1E3A5F] pt-16 pb-12 px-4 md:px-8 relative overflow-hidden apron-bg">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          
          {/* Crossed cutlery elegant drawing */}
          <div className="w-16 h-16 flex items-center justify-center text-gold-light">
            <CrossedCutleryIllustration className="w-full h-full text-gold-light" />
          </div>

          {/* Slogan details and handwritten logo - slightly larger offset */}
          <div className="space-y-3">
            <span className="font-handwritten text-4xl sm:text-5xl text-cream-deep inline-block mb-1 font-bold">
              Pan Kotlecik
            </span>
            <p className="font-display italic text-sm text-[#FAF6EE]/80 max-w-md mx-auto">
              "Prawdziwe obiady domowe pachnące tradycją i pieczone ze szczerą pasją bezpośrednio na warszawskim Targówku."
            </p>
          </div>

          {/* Quick links footer */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-sans text-xs uppercase tracking-widest text-text-pale/70 border-t border-b border-white/5 py-4 w-full max-w-xl">
            <a href="#filozofia" className="hover:text-[#FAF6EE] transition-colors font-medium">Filozofia</a>
            <a href="#menu-dnia" className="hover:text-[#FAF6EE] transition-colors font-medium">Menu Dnia</a>
            <a href="#cennik" className="hover:text-[#FAF6EE] transition-colors font-medium">Cennik</a>
            <a href="#galeria" className="hover:text-[#FAF6EE] transition-colors font-medium">Zdjęcia</a>
            <a href="#kontakt-i-godziny" className="hover:text-[#FAF6EE] transition-colors font-medium">Godziny</a>
          </div>

          {/* Core location contact summaries */}
          <div className="space-y-1.5 text-xs text-[#FAF6EE]/55 font-mono">
            <p>Skarbka z Gór 108, Warszawa • Telefon: +48 455 448 003</p>
            <p>E-mail: pan.kotlecik108@gmail.com</p>
          </div>

          {/* Handcraft signature */}
          <div className="pt-4 text-[10px] text-cream/40 font-mono tracking-wider">
            © {new Date().getFullYear()} Pan Kotlecik. Przyrządzono z dumą w Warszawie. 
          </div>

        </div>
      </footer>

    </div>
  );
}
