import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, Clock, Calendar, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Structure pour représenter un film
interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string;
  duration: string;
  releaseDate: string;
  salle: string;
  seances: string[];
  is3D?: boolean;
  isNew?: boolean;
}

const MoviesSection: React.FC = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Données des films à l'affiche (à remplacer par des données réelles)
  const movies: Movie[] = [
    {
      id: 1,
      title: "DUNE: PART TWO",
      image: "/images/dune.jpg",
      genre: "Science Fiction",
      duration: "2h 46min",
      releaseDate: "Mars 2024",
      salle: "12",
      seances: ["12H", "14H", "18H", "22H"],
      is3D: false,
      isNew: true
    },
    {
      id: 2,
      title: "Kung Fu Panda 4",
      image: "/images/kung fu panda.jpg",
      genre: "Animation",
      duration: "1h 34min",
      releaseDate: "Mars 2024",
      salle: "1",
      seances: ["14h", "16h", "20h"]
    },
    {
      id: 3,
      title: "Ghostbusters: Frozen Empire",
      image: "/images/ghostbuster.jpg",
      genre: "Comédie/Fantastique",
      duration: "1h 55min",
      releaseDate: "Avril 2024",
      salle: "3",
      seances: ["12h", "14h", "18h", "22h"]
    },
    {
      id: 4,
      title: "Godzilla x Kong",
      image: "/images/Godzilla.jpg",
      genre: "Action/Aventure",
      duration: "1h 52min",
      releaseDate: "Avril 2024",
      salle: "4",
      seances: ["12h", "14h", "18h", "22h"],
      is3D: true
    },
    {
      id: 5,
      title: "The Fall Guy",
      image: "/images/fallguys.jpg",
      genre: "Action/Comédie",
      duration: "2h 06min",
      releaseDate: "Mai 2024",
      salle: "5",
      seances: ["12h", "14h", "18h", "22h"]
    },
    {
      id: 6,
      title: "Furiosa",
      image: "/images/furiosa.jpg",
      genre: "Action/Aventure",
      duration: "2h 30min",
      releaseDate: "Mai 2024",
      salle: "6",
      seances: ["12h", "14h", "18h", "22h"],
      is3D: true
    }
  ];

  return (
    <>
      <section id="films" className="relative min-h-screen py-16 px-4 md:px-6">
        {/* Arrière-plan avec l'image bg_boitefilm.png */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cinema-black">
            <img
              src="/images/bg_boitefilm.png"
              alt="Fond cinéma texture"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
        
        {/* Curseur personnalisé */}
        {isHovering && (
          <div 
            className="fixed z-50 pointer-events-none text-amber-400 bg-black/80 px-3 py-1 rounded-full text-sm font-medium border border-amber-400/30"
            style={{ 
              left: `${cursorPosition.x + 20}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translateY(-50%)'
            }}
          >
            voir le trailer
          </div>
        )}
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-cinema-red">Films</span> à l'affiche
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className="relative group transition-transform duration-300 hover:scale-[1.02] h-[450px] md:h-[600px]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                {/* Nouveau tag */}
                {movie.isNew && (
                  <div className="absolute -top-2 -left-2 z-30">
                    <div className="bg-[#8B0000] text-amber-400 text-sm font-bold py-1 px-3 transform -rotate-12 shadow-lg">
                      NOUVEAU
                    </div>
                  </div>
                )}

                {/* Salle indicator */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-32">
                  <div className="bg-[#4A0404] text-amber-400 text-center py-1 px-4 rounded-md border-2 border-amber-500 shadow-lg font-semibold">
                    Salle {movie.salle}
                  </div>
                </div>

                {/* Cadre lumineux */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="/images/boite_film.png" 
                    alt="Cadre film" 
                    className="w-full h-full object-contain"
                  />
                  {/* Effet de lumière */}
                  <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Effet d'ombre intérieure */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" />
                  {/* Effet de brillance sur les bords */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-r from-amber-400/40 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-l from-amber-400/40 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-b from-amber-400/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-t from-amber-400/40 to-transparent" />
                  </div>
                </div>
                
                {/* Image du film positionnée dans le cadre */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-[65%] h-[65%] mt-2 relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] cursor-pointer" 
                    style={{ marginTop: '-10px' }}
                    onClick={() => setShowTrailer(true)}
                  >
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay avec titre et informations */}
                    <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                        <h3 className="text-amber-400 text-4xl font-bold tracking-wider mb-8 px-4">
                          {movie.title}
                        </h3>
                        
                        {/* Trait de séparation */}
                        <div className="w-2/3 h-[2px] bg-amber-400/60 mb-8" />
                        
                        {/* Horaires */}
                        <div className="flex items-center justify-center gap-2 mb-8">
                          {movie.seances.map((seance, index) => (
                            <span key={index} className="text-amber-400 text-2xl font-bold">
                              {seance}
                            </span>
                          ))}
                        </div>

                        {/* Trait de séparation */}
                        <div className="w-2/3 h-[2px] bg-amber-400/60 mb-8" />
                        
                        {/* Salle et format */}
                        <div className="text-amber-400 text-2xl font-bold mb-2">
                          SALLE {movie.salle}
                        </div>
                        <div className="text-amber-400 text-2xl font-bold">
                          {movie.is3D ? "3D" : "2D"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horaires box en dessous de l'affiche */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 w-full max-w-[80%]">
                  <div className="bg-[#4A0404] p-2 rounded-md border-2 border-amber-500 shadow-lg">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {movie.seances.map((seance, index) => (
                        <span key={index} className="text-amber-400 font-semibold">
                          {seance}
                          {index < movie.seances.length - 1 && <span className="mx-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Trailer */}
      <Dialog open={showTrailer} onOpenChange={setShowTrailer}>
        <DialogContent className="max-w-4xl p-0 bg-black border-amber-500">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              src="https://www.youtube.com/embed/THhjjnsgFlE?autoplay=1"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setShowTrailer(false)}
            className="absolute top-2 right-2 text-white hover:text-amber-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MoviesSection; 