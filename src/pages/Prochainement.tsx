import React from "react";
import Header from "@/components/Header";
import InfoTicker from "@/components/InfoTicker";
import Footer from "@/components/Footer";
import { Film } from "lucide-react";

// Structure similaire à MoviesSection mais pour les films à venir
const ComingSoonSection: React.FC = () => {
  // Placeholder pour 6 boîtes d'affichage vides
  const emptySlots = Array(6).fill(null);

  return (
    <section id="prochainement" className="relative min-h-screen py-16 px-4 md:px-6">
      {/* Arrière-plan avec la même image que MoviesSection */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cinema-black">
          <img
            src="/images/bg_boitefilm.png"
            alt="Fond cinéma texture"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <span className="text-cinema-red">Prochainement</span> au cinéma
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {emptySlots.map((_, index) => (
            <div 
              key={index} 
              className="relative group transition-transform duration-500 hover:scale-[1.03] h-[550px] md:h-[600px] hover:z-10"
            >
              {/* Ombre portée réaliste */}
              <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-yellow-500/20 via-transparent to-transparent blur-xl"></div>
              
              {/* Lueur des ampoules */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[6%] left-0 right-0 w-full h-4 bg-gradient-to-b from-yellow-500/40 to-transparent blur-md"></div>
                <div className="absolute bottom-[12%] left-0 right-0 w-full h-4 bg-gradient-to-t from-yellow-500/40 to-transparent blur-md"></div>
              </div>
              
              {/* Ombre projetée derrière la boîte */}
              <div className="absolute top-[5%] right-[5%] bottom-[5%] left-[5%] bg-black/70 rounded-lg blur-xl -z-10 transform scale-[0.95] translate-y-4"></div>
              
              {/* Cadre lumineux */}
              <div className="absolute inset-0 w-full h-full transform transition-transform duration-500 group-hover:scale-[1.01]">
                <img 
                  src="/images/boite_film.png" 
                  alt="Cadre film" 
                  className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]"
                />
              </div>
              
              {/* Placeholder au lieu d'image de film */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:scale-[1.02]">
                <div className="w-[65%] h-[65%] mt-2 flex flex-col items-center justify-center bg-cinema-black/60 rounded-lg" style={{ marginTop: '-10px' }}>
                  <Film className="w-16 h-16 text-cinema-red/70 mb-4" />
                  <p className="text-white/70 text-center px-4">Film à venir prochainement</p>
                </div>
              </div>
              
              {/* Titre placeholder du film placé sous le cadre */}
              <div className="absolute bottom-[18px] left-0 right-0 text-center">
                <p className="text-lg text-white font-medium drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                  Bientôt disponible
                </p>
              </div>
              
              {/* Reflet subtil */}
              <div className="absolute inset-x-[15%] top-[15%] h-[30%] bg-white/5 rounded-xl skew-y-12 blur-sm transform -rotate-6 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Prochainement: React.FC = () => {
  return (
    <div className="min-h-screen bg-cinema-black text-white">
      {/* Header Section - Même que sur la page principale */}
      <Header />
      
      {/* Information Ticker - Même que sur la page principale */}
      <InfoTicker />
      
      {/* Section des films à venir */}
      <ComingSoonSection />
      
      {/* Footer - Même que sur la page principale */}
      <Footer />
    </div>
  );
};

export default Prochainement; 