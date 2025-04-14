import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Film } from "lucide-react";

interface Screening {
  time: string;
  room: string;
  language: string;
  is3D: boolean;
}

interface ScheduleFilm {
  id: number;
  title: string;
  image: string;
  duration: string;
  screenings: {
    [day: string]: Screening[];
  };
}

const weekdays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

// Données des films avec horaires - à connecter avec une vraie API
const scheduleData: ScheduleFilm[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "/images/dune.jpg",
    duration: "2h 46min",
    screenings: {
      Lundi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
        { time: "21:15", room: "Salle 1", language: "VF", is3D: true },
      ],
      Mardi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
      ],
      Mercredi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
        { time: "21:15", room: "Salle 1", language: "VF", is3D: true },
      ],
      Jeudi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
      ],
      Vendredi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
        { time: "21:15", room: "Salle 1", language: "VF", is3D: true },
      ],
      Samedi: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
        { time: "21:15", room: "Salle 1", language: "VF", is3D: true },
      ],
      Dimanche: [
        { time: "14:30", room: "Salle 1", language: "VF", is3D: false },
        { time: "18:00", room: "Salle 1", language: "VOST", is3D: false },
        { time: "21:15", room: "Salle 1", language: "VF", is3D: true },
      ],
    },
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    image: "/images/kung fu panda.jpg",
    duration: "1h 34min",
    screenings: {
      Lundi: [
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Mardi: [
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Mercredi: [
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Jeudi: [
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Vendredi: [
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Samedi: [
        { time: "11:00", room: "Salle 2", language: "VF", is3D: false },
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
      Dimanche: [
        { time: "11:00", room: "Salle 2", language: "VF", is3D: false },
        { time: "13:45", room: "Salle 2", language: "VF", is3D: false },
        { time: "16:00", room: "Salle 2", language: "VF", is3D: true },
      ],
    },
  },
  {
    id: 3,
    title: "Ghostbusters: Frozen Empire",
    image: "/images/ghostbuster.jpg",
    duration: "1h 55min",
    screenings: {
      Lundi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Mardi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Mercredi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Jeudi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Vendredi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
        { time: "22:00", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Samedi: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
        { time: "22:00", room: "Salle 3", language: "VOST", is3D: false },
      ],
      Dimanche: [
        { time: "15:30", room: "Salle 3", language: "VF", is3D: false },
        { time: "19:15", room: "Salle 3", language: "VOST", is3D: false },
      ],
    },
  },
  {
    id: 4,
    title: "Godzilla x Kong",
    image: "/images/Godzilla.jpg",
    duration: "1h 52min",
    screenings: {
      Lundi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Mardi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Mercredi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Jeudi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Vendredi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
        { time: "23:15", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Samedi: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
        { time: "23:15", room: "Salle 4", language: "VOST", is3D: true },
      ],
      Dimanche: [
        { time: "14:00", room: "Salle 4", language: "VF", is3D: true },
        { time: "17:30", room: "Salle 4", language: "VOST", is3D: false },
        { time: "20:45", room: "Salle 4", language: "VOST", is3D: true },
      ],
    },
  },
  {
    id: 5,
    title: "The Fall Guy",
    image: "/images/fallguys.jpg",
    duration: "2h 06min",
    screenings: {
      Vendredi: [
        { time: "14:15", room: "Salle 2", language: "VF", is3D: false },
        { time: "17:45", room: "Salle 2", language: "VOST", is3D: false },
        { time: "21:00", room: "Salle 2", language: "VOST", is3D: false },
      ],
      Samedi: [
        { time: "14:15", room: "Salle 2", language: "VF", is3D: false },
        { time: "17:45", room: "Salle 2", language: "VOST", is3D: false },
        { time: "21:00", room: "Salle 2", language: "VOST", is3D: false },
      ],
      Dimanche: [
        { time: "14:15", room: "Salle 2", language: "VF", is3D: false },
        { time: "17:45", room: "Salle 2", language: "VOST", is3D: false },
        { time: "21:00", room: "Salle 2", language: "VOST", is3D: false },
      ],
    },
  },
  {
    id: 6,
    title: "Furiosa",
    image: "/images/furiosa.jpg",
    duration: "2h 30min",
    screenings: {
      Vendredi: [
        { time: "16:30", room: "Salle 5", language: "VF", is3D: false },
        { time: "20:00", room: "Salle 5", language: "VOST", is3D: false },
        { time: "23:00", room: "Salle 5", language: "VOST", is3D: false },
      ],
      Samedi: [
        { time: "16:30", room: "Salle 5", language: "VF", is3D: false },
        { time: "20:00", room: "Salle 5", language: "VOST", is3D: false },
        { time: "23:00", room: "Salle 5", language: "VOST", is3D: false },
      ],
      Dimanche: [
        { time: "16:30", room: "Salle 5", language: "VF", is3D: false },
        { time: "20:00", room: "Salle 5", language: "VOST", is3D: false },
      ],
    },
  },
];

const FilmSchedule: React.FC = () => {
  // Obtenir le jour courant de la semaine
  const today = new Date().getDay();
  const currentDay = weekdays[today === 0 ? 6 : today - 1];

  return (
    <section id="horaires" className="py-16 px-4 md:px-8 bg-gradient-to-b from-cinema-black to-cinema-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-cinema-red">Horaires</span> des séances
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Consultez les horaires des films à l'affiche cette semaine et planifiez votre visite au cinéma.
          </p>
        </div>
        
        <Tabs defaultValue={currentDay} className="w-full">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-cinema-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-cinema-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-x-auto pb-4 mask-fade-edges">
              <TabsList className="mb-8 flex space-x-2 bg-transparent border-b border-gray-800 w-max min-w-full justify-center">
                {weekdays.map((day) => (
                  <TabsTrigger
                    key={day}
                    value={day}
                    className="text-white bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-cinema-red data-[state=active]:border-b-2 data-[state=active]:border-cinema-red rounded-none py-3 px-4"
                  >
                    {day}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          
          {weekdays.map((day) => (
            <TabsContent key={day} value={day} className="space-y-8">
              {scheduleData
                .filter(film => film.screenings[day] && film.screenings[day].length > 0)
                .map((film) => (
                <div 
                  key={film.id} 
                  className="bg-cinema-darkgray/60 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-800"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 lg:w-1/5 relative group">
                      <img 
                        src={film.image} 
                        alt={film.title}
                        className="w-full h-full object-cover md:aspect-[3/4]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white font-medium flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{film.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 md:p-6 flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{film.title}</h3>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center mb-4 text-gray-300">
                          <Calendar className="w-4 h-4 mr-2 text-cinema-red" />
                          <span className="font-medium">{day}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                          {film.screenings[day]?.map((screening, index) => (
                            <div 
                              key={index} 
                              className="bg-cinema-black/60 rounded-lg p-3 text-center cursor-pointer hover:bg-cinema-black transition-colors border border-gray-800 hover:border-cinema-red/50"
                            >
                              <div className="font-bold text-white text-lg">{screening.time}</div>
                              <div className="text-sm text-gray-400 mb-1">{screening.room}</div>
                              <div className="flex justify-center gap-1 mt-2">
                                <Badge 
                                  variant={screening.language === "VOST" ? "secondary" : "outline"} 
                                  className={`text-xs ${
                                    screening.language === "VOST" 
                                      ? "bg-gray-700 text-white hover:bg-gray-700" 
                                      : "bg-transparent border-gray-600 text-gray-300"
                                  }`}
                                >
                                  {screening.language}
                                </Badge>
                                {screening.is3D && (
                                  <Badge variant="outline" className="text-xs bg-transparent border-cinema-red text-cinema-red hover:bg-transparent">
                                    3D
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {scheduleData.filter(film => film.screenings[day] && film.screenings[day].length > 0).length === 0 && (
                <div className="bg-cinema-darkgray/40 rounded-lg p-8 text-center">
                  <Film className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <h3 className="text-white text-xl font-medium mb-2">Pas de séances ce jour</h3>
                  <p className="text-gray-400">Il n'y a pas de séances programmées pour {day.toLowerCase()}. Veuillez consulter un autre jour.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FilmSchedule;
