
import React from "react";
import { Badge } from "@/components/ui/badge";

export interface FilmProps {
  id: number;
  title: string;
  director: string;
  duration: string;
  genre: string[];
  rating: string;
  image: string;
}

const FilmCard: React.FC<FilmProps> = ({
  title,
  director,
  duration,
  genre,
  rating,
  image
}) => {
  return (
    <div className="film-card relative overflow-hidden rounded-lg group cursor-pointer">
      {/* Film Image */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-[2/3] object-cover transition-transform duration-300"
      />
      
      {/* Rating Badge */}
      <Badge className="absolute top-3 right-3 bg-cinema-red text-white">{rating}</Badge>
      
      {/* Film Info Overlay */}
      <div className="film-overlay absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/90 to-transparent opacity-0 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300">De {director}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-400">{duration}</p>
          <div className="flex flex-wrap gap-1 justify-end">
            {genre.map((g, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-cinema-darkgray rounded-full">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
