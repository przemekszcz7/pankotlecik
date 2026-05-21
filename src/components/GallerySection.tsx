import React, { useState } from "react";

export const GallerySection: React.FC = () => {
  const photos = [
    {
      url: "https://i.ibb.co/NdQgG6bm/656963282-122117417535211809-5655700158090186626-n.jpg",
      alt: "Prawdziwy tradycyjny obiad domowy Pan Kotlecik"
    },
    {
      url: "https://i.ibb.co/N22ssg8W/660471903-122117855511211809-306096292715360579-n.jpg",
      alt: "Złocisty, pieczony kotlet schabowy z dodatkami"
    },
    {
      url: "https://i.ibb.co/5hgfCsrL/672684727-122120219529211809-8804619221082243283-n.jpg",
      alt: "Nasza uśmiechnięta załoga kucharek"
    },
    {
      url: "https://i.ibb.co/XffVS7jJ/677206581-122120477925211809-4173957722882321062-n.jpg",
      alt: "Aromatyczna i sycąca zupa ogórkowa"
    },
    {
      url: "https://i.ibb.co/WWSXkb7h/698347322-122122898019211809-3237580470494341523-n.jpg",
      alt: "Tradycyjny domowy obiad ze świeżą surówką"
    },
    {
      url: "https://i.ibb.co/1Gzpn9sL/699072160-122123002839211809-6689016286937548574-n.jpg",
      alt: "Chrupiące i zdrowe surówki domowe"
    },
    {
      url: "https://i.ibb.co/rGRKKvvj/699355317-122123005083211809-5289193664653246700-n.jpg",
      alt: "Złociste ziemniaczki prosto z pieca"
    },
    {
      url: "https://i.ibb.co/n8gsxHR6/702250571-122123476839211809-8025208164014707773-n.jpg",
      alt: "Smaczne, pieczone kotlety przygotowywane codziennie"
    },
    {
      url: "https://i.ibb.co/GmYY5yw/704626773-122123584767211809-6321943467969971620-n.jpg",
      alt: "Świeże porcje dań gotowych do podania"
    }
  ];

  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhoto(index);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="galeria" className="py-24 px-4 md:px-8 bg-cream linen-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Gallery Title Block - Asymmetric Left Align */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">Galeria z naszej kuchni</span>
            <h2 className="font-display font-extrabold text-[#1E3A5F] text-3xl md:text-5xl tracking-tight">
              Nasze Prawdziwe Dania
            </h2>
            <p className="text-text-muted text-sm mt-3 font-display italic">
              Kliknij dowolne zdjęcie, by przyjrzeć się z bliska naszym domowym specjałom
            </p>
          </div>
          <div className="w-24 h-[1px] bg-gold/50 hidden md:block mb-4" />
        </div>

        {/* Masonry-inspired Asymmetric Multi-column System to preserve original proportions */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] space-y-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative group overflow-hidden rounded-xl border border-border/80 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gold/30 bg-[#F3EDE0] mb-6"
            >
              {/* Image with referrerPolicy preserving original ratio */}
              <img
                src={photo.url}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-navy font-mono text-xs px-3.5 py-2 rounded-full font-bold shadow-md">
                  POWIĘKSZ
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Component */}
        {activePhoto !== null && (
          <div 
            className="fixed inset-0 z-50 bg-[#132640]/95 backdrop-blur-sm flex flex-col justify-center items-center p-4 md:p-8 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close btn */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-cream hover:text-gold-light p-2 transition-colors duration-200 z-50 focus:outline-none"
              aria-label="Zamknij podgląd"
            >
              <svg className="w-8 h-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Picture Presentation */}
            <div className="relative max-w-4xl max-h-[75vh] md:max-h-[80vh] flex items-center justify-center">
              {/* Prev photo */}
              <button 
                onClick={prevPhoto}
                className="absolute left-2 md:-left-16 text-cream hover:text-gold-light bg-navy/60 hover:bg-navy p-3 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Poprzednie zdjęcie"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <img
                src={photos[activePhoto].url}
                alt={photos[activePhoto].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[72vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next photo */}
              <button 
                onClick={nextPhoto}
                className="absolute right-2 md:-right-16 text-cream hover:text-gold-light bg-navy/60 hover:bg-navy p-3 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Następne zdjęcie"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Counter Section */}
            <div 
              className="mt-6 text-center text-cream px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono text-xs text-gold font-medium uppercase tracking-widest">
                Zdjęcie {activePhoto + 1} z {photos.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
