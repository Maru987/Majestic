import React from "react";
import Header from "@/components/Header";
import InfoTicker from "@/components/InfoTicker";
import MoviesSection from "@/components/MoviesSection";
import PriceBanner from "@/components/PriceBanner";
import FilmSchedule from "@/components/FilmSchedule";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Sample film data
const films = [
  {
    id: 1,
    title: "Dune: Partie 2",
    director: "Denis Villeneuve",
    duration: "2h 46min",
    genre: ["Science-fiction", "Aventure"],
    rating: "Tous publics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    director: "Mike Mitchell",
    duration: "1h 34min",
    genre: ["Animation", "Comédie"],
    rating: "Tous publics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 3,
    title: "Dune: Partie 2",
    director: "Denis Villeneuve",
    duration: "2h 46min",
    genre: ["Science-fiction", "Aventure"],
    rating: "Tous publics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 4,
    title: "Kung Fu Panda 4",
    director: "Mike Mitchell",
    duration: "1h 34min",
    genre: ["Animation", "Comédie"],
    rating: "Tous publics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cinema-black text-white">
      {/* Header Section */}
      <Header />
      
      {/* Information Ticker */}
      <InfoTicker />
      
      {/* Films Section */}
      <MoviesSection />
      
      {/* Bannière des tarifs */}
      <PriceBanner />
      
      {/* Schedule Section */}
      <FilmSchedule />
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
