import React from "react";

export const OpeningHoursAndMap: React.FC = () => {
  const schedule = [
    { day: "Poniedziałek", hours: "10:00 - 18:00", isClosed: false },
    { day: "Wtorek", hours: "10:00 - 18:00", isClosed: false },
    { day: "Środa", hours: "10:00 - 18:00", isClosed: false },
    { day: "Czwartek", hours: "10:00 - 18:00", isClosed: false },
    { day: "Piątek", hours: "10:00 - 18:00", isClosed: false },
    { day: "Sobota", hours: "ZAMKNIĘTE", isClosed: true },
    { day: "Niedziela", hours: "ZAMKNIĘTE", isClosed: true },
  ];

  return (
    <section id="kontakt-i-godziny" className="py-24 px-4 md:px-8 bg-cream/20 linen-bg text-text border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Opening Hours and Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">Kiedy gotujemy</span>
              <h2 className="font-display font-bold text-navy text-3xl md:text-4xl tracking-tight">
                Godziny Otwarcia
              </h2>
              <p className="text-text-muted text-sm mt-2 font-display italic">
                Zapraszamy chętnych po pyszne, świeże, domowe przysmaki
              </p>
            </div>

            {/* List Schedule style */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {schedule.map((item, index) => (
                  <li 
                    key={index}
                    className="flex justify-between items-center py-2.5 border-b border-gold/5 last:border-b-0"
                  >
                    <span className="font-display font-medium text-navy text-base">{item.day}</span>
                    <span 
                      className={`font-mono text-sm tracking-tight ${
                        item.isClosed 
                          ? "text-[#E82C2C] font-semibold bg-[#E82C2C]/5 px-2.5 py-0.5 rounded-full" 
                          : "text-text font-medium"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Panel */}
            <div className="space-y-4 pt-4 border-t border-gold/15">
              <h3 className="font-display font-bold text-navy text-xl">Szybki Kontakt</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <a 
                  href="tel:+48455448003"
                  className="bg-white border border-border hover:border-gold/30 p-5 rounded-xl block text-left transition-colors group"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">Zadzwoń do nas</span>
                    <span className="font-mono text-navy font-semibold text-sm">+48 455 448 003</span>
                  </div>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:pan.kotlecik108@gmail.com"
                  className="bg-white border border-border hover:border-gold/30 p-5 rounded-xl block text-left transition-colors group"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">Napisz e-mail</span>
                    <span className="font-sans text-navy font-semibold text-xs truncate block">pan.kotlecik108@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Map and Address Location (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-border p-5 rounded-2xl shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold/5 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold block">Lokalizacja stacjonarna</span>
                  <p className="font-display font-bold text-navy text-lg mt-0.5">Skarbka z Gór 108, Warszawa 03-278</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Skarbka+z+Gór+108,+Warzsawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center bg-gold hover:bg-gold-light text-cream font-sans font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Otwórz w nawigacji
                </a>
              </div>

              {/* Secure responsive Map IFrame embed */}
              <div className="w-full h-[320px] md:h-[390px] rounded-xl overflow-hidden border border-border relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.033459194879!2d21.057900177110152!3d52.31539535135721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eced847b62fa1%3A0x3bdfa98ee25449ec!2sSkarbka%20z%20G%C3%B3r%20108%2C%2003-287%20Warszawa!5e0!3m2!1spl!2spl!4v1779350339230!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wskazówki dojazdu do Pan Kotlecik Skarbka z Gór 108"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
