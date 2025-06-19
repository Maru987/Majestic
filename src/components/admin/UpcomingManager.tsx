import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import UpcomingDialog from "./UpcomingDialog";

interface UpcomingFilm {
  id: number;
  title: string;
  image: string;
}

const UpcomingManager: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<UpcomingFilm | undefined>();
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("add");
  const [films, setFilms] = useState<UpcomingFilm[]>([
    {
      id: 1,
      title: "Exemple Film",
      image: "/images/dune.jpg",
    },
  ]);

  const handleAddClick = () => {
    setSelectedFilm(undefined);
    setDialogMode("add");
    setDialogOpen(true);
  };

  const handleEditClick = (film: UpcomingFilm) => {
    setSelectedFilm(film);
    setDialogMode("edit");
    setDialogOpen(true);
  };

  const handleDeleteClick = (film: UpcomingFilm) => {
    setFilms(films.filter(f => f.id !== film.id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Prochainement</h2>
          <p className="text-sm text-zinc-500">{films.length} films à venir</p>
        </div>
        <Button onClick={handleAddClick} className="bg-zinc-900 hover:bg-zinc-800">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un film
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {films.map((film) => (
          <Card key={film.id} className="bg-zinc-50 border-none shadow-md rounded-xl flex flex-col md:flex-row items-center p-6 gap-6 hover:shadow-lg transition-all">
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-36">
              <img
                src={film.image}
                alt={film.title}
                className="rounded-lg object-cover w-28 h-40 shadow-md border border-zinc-200"
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full gap-4">
              <h3 className="text-xl font-bold text-zinc-900 text-center md:text-left tracking-tight">{film.title}</h3>
              <div className="flex gap-2 mt-2 w-full justify-center md:justify-start">
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
      <UpcomingDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        film={selectedFilm}
        mode={dialogMode}
        setFilms={setFilms}
        films={films}
      />
    </div>
  );
};

export default UpcomingManager; 