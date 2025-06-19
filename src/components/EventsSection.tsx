import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

// Interface pour les événements
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  price: string;
  ageRestriction?: string;
  language?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "KAIJU No. 8",
    date: "VENDREDI 18 AVRIL",
    time: "18H",
    description: "Projection unique en VOSTFR du film d'animation japonais KAIJU No. 8 - Mission Recon. Une expérience cinématographique à ne pas manquer !",
    image: "/images/Kaiju.png",
    price: "1600F",
    ageRestriction: "-12ans",
    language: "VOSTFR"
  },
  {
    id: 2,
    title: "Festival du Film Polynésien",
    date: "SAMEDI 25 AVRIL",
    time: "17H",
    description: "Une soirée dédiée aux talents locaux avec la projection de courts-métrages polynésiens suivie d'une rencontre avec les réalisateurs.",
    image: "/images/bg_header_red.png",
    price: "1200F"
  },
  {
    id: 3,
    title: "Nuit Marvel Marathon",
    date: "SAMEDI 4 MAI",
    time: "20H",
    description: "Marathon exceptionnel de 3 films Marvel. Venez costumés ! Animations et surprises tout au long de la soirée.",
    image: "/images/bg_header_red.png",
    price: "2500F"
  }
];

const EventsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background avec effet de parallaxe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: "url('/images/cinema-background.jpg')",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Événements Spéciaux</h2>
          <p className="text-gray-400">Ne manquez pas nos projections exceptionnelles</p>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Kaiju Event Card */}
          <Card className="bg-black border-2 border-[#8B4513] overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 max-h-[500px] flex items-center justify-start bg-black">
                  <img 
                    src="/images/Kaiju.png" 
                    alt="Kaiju No. 8"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-r from-black to-[#1a0f0f]">
                  <div className="text-[#FFD700] text-3xl font-bold text-center mb-6">
                    PROJECTION UNIQUE
                  </div>
                  <h3 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">KAIJU No. 8</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/90 justify-center text-xl">
                      <Calendar className="w-6 h-6 text-[#FFD700]" />
                      <span>VENDREDI 18 AVRIL • 18H</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-white/90 justify-center text-xl">
                      <Clock className="w-6 h-6 text-[#FFD700]" />
                      <span>Durée: 2h30</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center mt-6 mb-6">
                    <span className="px-4 py-2 bg-[#FFD700]/20 text-[#FFD700] rounded-md text-lg font-bold">
                      SÉANCE VOSTFR
                    </span>
                    <span className="px-4 py-2 bg-[#FFD700]/20 text-[#FFD700] rounded-md text-lg font-bold">
                      1600F
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-[#FFD700] text-xl font-bold mb-2">
                      COLLATION OFFERTE
                    </div>
                    <div className="text-red-500 text-lg font-medium">
                      FILM INTERDIT AUX -12ANS
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Oeuf Possible Event Card */}
          <Card className="bg-black border-2 border-[#8B4513] overflow-hidden group relative">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 max-h-[500px] flex items-center justify-start bg-black">
                  <img 
                    src="/images/oeuf.png" 
                    alt="Mission Oeuf Possible"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-r from-black to-[#1a0f0f]">
                  <div className="text-[#FFD700] text-3xl font-bold text-center mb-6">
                    MISSION : OEUF POSSIBLE
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/90 justify-center text-xl mb-6">
                    <Calendar className="w-6 h-6 text-[#FFD700]" />
                    <span>DIMANCHE 20 et LUNDI 21 AVRIL</span>
                  </div>

                  <div className="text-center space-y-4 mb-6">
                    <p className="text-white/90 text-lg">Votre mission, si vous l'acceptez...</p>
                    <p className="text-white/90 text-lg">Retrouver dans nos salles 1 œuf en toute discrétion et sans vous faire repérer !</p>
                  </div>

                  <div className="flex flex-col gap-3 items-center mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                      <span className="text-white/90">Œufs gourmands</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="text-white/90">Œufs cinéphiles (séance offerte)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      <span className="text-white/90">Œufs surprises</span>
                    </div>
                  </div>
                </div>

                {/* Overlay avec informations détaillées */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                  <div className="p-8 text-white space-y-6">
                    <h3 className="text-3xl font-bold text-center text-[#FFD700] mb-8">MISSION: OEUF POSSIBLE</h3>
                    
                    <div className="space-y-4 text-lg">
                      <p>Un lapin d'élite dissimulera une cargaison d'œufs mystérieux dans nos salles.</p>
                      
                      <p>Votre mission, si vous l'acceptez: retrouver les œufs sans bruit, sans gêner… et sans vous faire griller par les autres.</p>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-[#FFD700] mb-4">RÈGLES :</h4>
                        <ul className="space-y-4">
                          <li>1. Les œufs sont cachés uniquement dans nos 4 salles durant les séances.</li>
                          <li>2. Chasse aux œufs : Dimanche et lundi de Pâques.</li>
                          <li className="mb-6">3. Types d'œufs :</li>
                          <ul className="space-y-3 ml-4">
                            <li className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                              Œufs gourmands : pour les chasseurs affamés
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                              Œufs cinéphiles : ta prochaine séance offerte (classique ou événement)
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-green-400"></span>
                              Œufs piégés : attention aux surprises du lapin farceur !
                            </li>
                          </ul>
                          <li>4. Ouvrez l'œil, fouillez en silence et restez discret.</li>
                          <li>5. 1 œuf par personne ! Laissez une chance aux autres agents.</li>
                          <li>6. Partagez votre trouvaille sur nos réseaux sociaux Facebook et Instagram !</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 