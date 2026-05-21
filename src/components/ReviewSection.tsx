import React from "react";

export const ReviewSection: React.FC = () => {
  return (
    <section id="opinie" className="py-24 px-4 md:px-8 bg-cream linen-bg relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial-style header, not centered but left-aligned for asymmetry */}
        <div className="mb-14 text-left max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">Opinie naszych gości</span>
          <h2 className="font-display font-medium text-[#1E3A5F] text-2xl md:text-4xl tracking-tight leading-tight">
            Słyszymy wiele miłych słów od odwiedzających nas mieszkańców Warszawy...
          </h2>
        </div>

        {/* Selected Facebook Testimonial - Styled with deliberate asymmetry and rotation */}
        <div className="relative">
          {/* Decorative background shape offset */}
          <div className="absolute -inset-2 bg-gold/10 rounded-2xl transform rotate-[1.2deg] pointer-events-none" />
          
          <div 
            className="relative bg-white border border-border rounded-xl p-8 md:p-12 shadow-[4px_4px_0_rgba(196,146,42,0.15)] transform md:-rotate-[0.8deg] transition-transform duration-300 hover:rotate-0"
          >
            {/* Giant Elegant Quote Marks */}
            <span className="absolute top-4 left-6 text-7xl md:text-8xl text-gold/15 font-display select-none pointer-events-none">
              “
            </span>

            <blockquote className="relative z-10">
              <p className="font-display italic text-lg md:text-xl text-[#2F3E3F] leading-relaxed mb-6">
                "Bardzo profesjonalna obsługa fachowe doradztwo odnośnie wyboru dań. U Pań można wybrać różne dania tzw. (mix kucharski zupy, wyroby mięsne oraz dodatków skrobiowych) co jest naprawdę dobrą opcją do spróbowania różnych smaków. Porcje są duże oraz cena jest bardzo dobra jak za obiad dwudaniowy 🙃🤘 Bardzo Polecam na pewno tutaj wrócę 👊"
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gold/10 pt-6">
                <div>
                  <div className="font-sans font-bold text-navy text-base">Zadowolona Klientka</div>
                  <div className="text-xs text-text-muted font-mono mt-0.5">Opinia zweryfikowana z Facebooka</div>
                </div>
                
                {/* Facebook Badge Button */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61586354286998&sk=reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-[#1877F2] hover:text-[#145dbf] transition-colors border border-[#1877F2]/20 hover:border-[#1877F2]/40 px-3.5 py-2 rounded-lg bg-[#1877F2]/5"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>ZOBACZ ORYGINAŁ NA FACEBOOKU</span>
                </a>
              </div>
            </blockquote>

          </div>
        </div>

        {/* Secondary review summaries/Facebook interaction callout */}
        <div className="mt-16 text-center">
          <p className="font-display italic text-[#6A5E48] text-base md:text-lg max-w-lg mx-auto mb-6">
            Dołącz do grona setek zadowolonych smakoszy. Śledź nas we wpisach, aby dowiadywać się o nowościach ze spiżarni w pierwszej kolejności!
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61586354286998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-navy hover:bg-navy-mid text-cream font-sans font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Odwiedź nasz profil na Facebooku</span>
          </a>
        </div>

      </div>
    </section>
  );
};
