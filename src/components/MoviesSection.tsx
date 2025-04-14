import React from "react";
import { Button } from "@/components/ui/button";
import { Info, Clock, Calendar } from "lucide-react";

// Structure pour représenter un film
interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string;
  duration: string;
  releaseDate: string;
}

const MoviesSection: React.FC = () => {
  // Données des films à l'affiche (à remplacer par des données réelles)
  const movies: Movie[] = [
    {
      id: 1,
      title: "Dune: Part Two",
      image: "/images/dune.jpg",
      genre: "Science Fiction",
      duration: "2h 46min",
      releaseDate: "Mars 2024"
    },
    {
      id: 2,
      title: "Kung Fu Panda 4",
      image: "/images/kung fu panda.jpg",
      genre: "Animation",
      duration: "1h 34min",
      releaseDate: "Mars 2024"
    },
    {
      id: 3,
      title: "Ghostbusters: Frozen Empire",
      image: "/images/ghostbuster.jpg",
      genre: "Comédie/Fantastique",
      duration: "1h 55min",
      releaseDate: "Avril 2024"
    },
    {
      id: 4,
      title: "Godzilla x Kong",
      image: "/images/Godzilla.jpg",
      genre: "Action/Aventure",
      duration: "1h 52min",
      releaseDate: "Avril 2024"
    },
    {
      id: 5,
      title: "The Fall Guy",
      image: "/images/fallguys.jpg",
      genre: "Action/Comédie",
      duration: "2h 06min",
      releaseDate: "Mai 2024"
    },
    {
      id: 6,
      title: "Furiosa",
      image: "/images/furiosa.jpg",
      genre: "Action/Aventure",
      duration: "2h 30min",
      releaseDate: "Mai 2024"
    }
  ];

  return (
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
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <span className="text-cinema-red">Films</span> à l'affiche
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
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
              
              {/* Image du film positionnée dans le cadre avec profondeur */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:scale-[1.02]">
                <div className="w-[65%] h-[65%] mt-2 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" style={{ marginTop: '-10px' }}>
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay au survol avec informations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">{movie.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-0.5 bg-cinema-red text-white text-xs rounded-sm font-medium">
                        {movie.genre}
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-xs text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{movie.duration}</span>
                    </div>
                    <div className="flex items-center mt-1 text-xs text-white">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Sortie: {movie.releaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Titre du film placé sous le cadre de manière élégante */}
              <div className="absolute bottom-[18px] left-0 right-0 text-center">
                <p className="text-lg text-white font-medium drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                  {movie.title}
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

export default MoviesSection; 