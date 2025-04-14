import React from "react";
import Header from "@/components/Header";
import InfoTicker from "@/components/InfoTicker";
import Footer from "@/components/Footer";
import { CalendarClock, Star } from "lucide-react";

// Structure pour les événements spéciaux
const EventsSection: React.FC = () => {
  // Placeholder pour 3 événements spéciaux
  const emptyEvents = Array(3).fill(null);

  return (
    <section id="evenements" className="relative min-h-screen py-16 px-4 md:px-6">
      {/* Arrière-plan avec la même image que les autres sections */}
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
          <span className="text-cinema-red">Événements</span> spéciaux
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {emptyEvents.map((_, index) => (
            <div 
              key={index} 
              className="relative mb-12 group bg-cinema-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-cinema-red/30 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(225,53,53,0.2)]"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <Star className="text-cinema-red w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Événement spécial à venir</h3>
                </div>
                
                <div className="ml-9">
                  <p className="text-gray-300 mb-4">
                    Restez à l'affût de nos événements spéciaux. Nous organisons régulièrement des avant-premières, 
                    des festivals thématiques, des rencontres avec des réalisateurs et bien plus encore !
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <CalendarClock className="w-4 h-4 mr-2 text-cinema-red" />
                    <span>Date à venir</span>
                  </div>
                  
                  <button className="mt-2 bg-cinema-red/80 hover:bg-cinema-red transition-colors px-6 py-2 rounded text-white font-medium">
                    Être notifié
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-white/80 max-w-2xl mx-auto">
            Vous souhaitez être informé de nos prochains événements spéciaux ? 
            Inscrivez-vous à notre newsletter pour ne rien manquer !
          </p>
          <a href="#newsletter" className="inline-block mt-6 bg-gradient-to-r from-cinema-red to-red-700 px-8 py-3 rounded-md text-white font-medium hover:shadow-lg transition-shadow">
            S'inscrire à la newsletter
          </a>
        </div>
      </div>
    </section>
  );
};

const Evenements: React.FC = () => {
  return (
    <div className="min-h-screen bg-cinema-black text-white">
      {/* Header Section */}
      <Header />
      
      {/* Information Ticker */}
      <InfoTicker />
      
      {/* Section des événements spéciaux */}
      <EventsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Evenements; 