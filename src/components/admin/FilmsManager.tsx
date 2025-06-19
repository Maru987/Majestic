import React, { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FilmDialog from "./FilmDialog";

interface Film {
  id: number;
  title: string;
  image: string;
  salles: string[];
  formats: string[];
  horaires: string[];
}

const FilmsManager: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<Film | undefined>();
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("add");
  const [searchQuery, setSearchQuery] = useState("");

  const films: Film[] = [
    {
      id: 1,
      title: "Dune: Part Two",
      image: "/images/dune.jpg",
      salles: ["Salle 1", "Salle 2"],
      formats: ["2D", "3D"],
      horaires: ["10:00", "13:00", "16:00"],
    },
    // ... autres films
  ];

  const handleAddClick = () => {
    setSelectedFilm(undefined);
    setDialogMode("add");
    setDialogOpen(true);
  };

  const handleEditClick = (film: Film) => {
    setSelectedFilm(film);
    setDialogMode("edit");
    setDialogOpen(true);
  };

  const handleDeleteClick = (film: Film) => {
    // Implémenter la logique de suppression
    console.log("Supprimer", film);
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Gestion des films</h2>
          <p className="text-sm text-zinc-500">
            {films.length} films actuellement à l'affiche
          </p>
        </div>
        <Button onClick={handleAddClick} className="bg-zinc-900 hover:bg-zinc-800">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un film
        </Button>
      </div>

      <Separator />

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Rechercher un film..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFilms.map((film) => (
          <Card key={film.id} className="bg-zinc-50 border-none shadow-md rounded-xl flex flex-col md:flex-row items-center p-4 gap-4 hover:shadow-lg transition-all">
            {/* Affiche */}
            <div className="w-full md:w-40 flex-shrink-0 flex justify-center">
              <img
                src={film.image}
                alt={film.title}
                className="rounded-lg object-cover w-32 h-44 shadow-md border border-zinc-200"
              />
            </div>
            {/* Infos */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-2 w-full">
              {/* Titre */}
              <h3 className="text-xl font-bold text-zinc-900 text-center md:text-left mb-2 tracking-tight">
                {film.title}
              </h3>
              {/* Salles */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {film.salles && film.salles.length > 0 ? film.salles.map((salle, idx) => (
                  <span key={idx} className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {salle}
                  </span>
                )) : <span className="text-xs text-zinc-400">Aucune salle</span>}
              </div>
              {/* Formats */}
              <div className="flex gap-2 mt-1">
                {film.formats && film.formats.length > 0 ? film.formats.map((format, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {format}
                  </span>
                )) : <span className="text-xs text-zinc-400">Aucun format</span>}
              </div>
              {/* Horaires */}
              <div className="flex flex-wrap gap-2 mt-2">
                {film.horaires && film.horaires.length > 0 ? film.horaires.map((horaire, idx) => (
                  <span key={idx} className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded text-xs font-medium">
                    {horaire}
                  </span>
                )) : <span className="text-xs text-zinc-400">Aucun horaire</span>}
              </div>
              {/* Boutons */}
              <div className="flex gap-2 mt-4 w-full justify-center md:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-4 border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900"
                  onClick={() => handleEditClick(film)}
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Modifier
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-4 border-zinc-300 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
                  onClick={() => handleDeleteClick(film)}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <FilmDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        film={selectedFilm}
        mode={dialogMode}
      />
    </div>
  );
};

export default FilmsManager; 