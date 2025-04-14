import React from 'react';
import { Film, Popcorn, Clock } from 'lucide-react';

// Liste des informations à afficher dans le ticker
const cinemaInfo = [
  '4 Salles de cinéma: Salle 1 - 370 places',
  'Salle 2 - 240 places',
  'Salle 3 - 88 places', 
  'Salle 4 - 79 places',
  '1 point Snack / Confiserie',
  'Ouvert 364 jours par an, de 11h à 20h30'
];

const InfoTicker: React.FC = () => {
  return (
    <div className="relative bg-cinema-black border-y border-cinema-red/30 overflow-hidden h-10">
      {/* Bande d'information défilante */}
      <div className="absolute inset-0 flex items-center">
        <div className="ticker-animation whitespace-nowrap flex items-center">
          {/* Répéter deux fois les informations pour une boucle fluide */}
          {[...cinemaInfo, ...cinemaInfo].map((info, index) => (
            <div key={index} className="ticker-item inline-flex items-center text-white mx-12 opacity-80">
              {/* Icônes différentes selon le type d'information */}
              {info.includes('Salles') ? (
                <Film className="w-4 h-4 mr-2 text-cinema-red" />
              ) : info.includes('Snack') ? (
                <Popcorn className="w-4 h-4 mr-2 text-cinema-red" />
              ) : (
                <Clock className="w-4 h-4 mr-2 text-cinema-red" />
              )}
              <span className="text-sm font-medium">{info}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dégradés sur les côtés pour un effet de fondu */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-cinema-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-cinema-black to-transparent z-10"></div>
    </div>
  );
};

export default InfoTicker;

// Ajouter ces styles dans votre fichier CSS global (globals.css)
/*
@keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker-animation {
  animation: ticker 40s linear infinite;
}

.ticker-animation:hover {
  animation-play-state: paused;
}
*/ 