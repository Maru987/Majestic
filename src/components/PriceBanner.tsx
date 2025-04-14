import React from 'react';
import { Ticket } from 'lucide-react';

const PriceBanner: React.FC = () => {
  return (
    <div className="relative bg-cinema-black overflow-hidden h-auto md:h-16 border-y border-cinema-red/30 flex items-center justify-center z-10 py-4 md:py-0">
      {/* Rangée d'ampoules décoratives du haut avec animation */}
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`top-${i}`} 
            className="w-2 h-2 rounded-full bg-yellow-400/70 shadow-[0_0_5px_#fbbf24] mt-0.5 animate-bulb-flicker" 
            style={{ animationDelay: `${(i * 0.1) % 2}s` }}
          ></div>
        ))}
      </div>
      
      {/* Version desktop */}
      <div className="hidden md:flex relative z-20 items-center justify-center space-x-4 px-4 md:space-x-8 lg:space-x-12 text-white font-bold tracking-wide">
        <div className="flex items-center">
          <Ticket className="w-6 h-6 mr-2 text-cinema-red" />
          <span className="text-cinema-red">TARIFS:</span>
        </div>
        <div className="flex items-center">
          <span>ADULTE 2D 1100F</span>
        </div>
        <div className="flex items-center text-cinema-red">
          <span>-</span>
        </div>
        <div className="flex items-center">
          <span>ADULTE 3D 1450F</span>
        </div>
        <div className="flex items-center text-cinema-red">
          <span>-</span>
        </div>
        <div className="flex items-center">
          <span>ENFANT 2D 750F</span>
        </div>
        <div className="flex items-center text-cinema-red">
          <span>-</span>
        </div>
        <div className="flex items-center">
          <span>ENFANT 3D 1100F</span>
        </div>
        <div className="flex items-center text-cinema-red">
          <span>-</span>
        </div>
        <div className="flex items-center">
          <span>LUNETTES 3D 200F</span>
        </div>
      </div>
      
      {/* Version mobile */}
      <div className="md:hidden relative z-20 flex flex-col items-center justify-center text-white font-bold tracking-wide text-center gap-2">
        <div className="flex items-center mb-1">
          <Ticket className="w-5 h-5 mr-2 text-cinema-red" />
          <span className="text-lg text-cinema-red">TARIFS</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>ADULTE 2D: 1100F</div>
          <div>ADULTE 3D: 1450F</div>
          <div>ENFANT 2D: 750F</div>
          <div>ENFANT 3D: 1100F</div>
          <div className="col-span-2 mt-1">LUNETTES 3D: 200F</div>
        </div>
      </div>
      
      {/* Effet de brillance subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-cinema-dark to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-cinema-dark to-transparent"></div>
      
      {/* Rangée d'ampoules décoratives du bas avec animation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`bottom-${i}`} 
            className="w-2 h-2 rounded-full bg-yellow-400/70 shadow-[0_0_5px_#fbbf24] mb-0.5 animate-bulb-flicker" 
            style={{ animationDelay: `${(i * 0.15) % 3}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PriceBanner; 