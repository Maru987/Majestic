import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UpcomingFilm {
  id?: number;
  title: string;
  image: string;
}

interface UpcomingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  film?: UpcomingFilm;
  mode: "add" | "edit";
  setFilms: React.Dispatch<React.SetStateAction<UpcomingFilm[]>>;
  films: UpcomingFilm[];
}

const UpcomingDialog: React.FC<UpcomingDialogProps> = ({ open, onOpenChange, film, mode, setFilms, films }) => {
  const [title, setTitle] = useState(film?.title || "");
  const [imagePreview, setImagePreview] = useState<string | undefined>(film?.image);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imagePreview) return;
    if (mode === "add") {
      setFilms([...films, { id: Date.now(), title, image: imagePreview }]);
    } else if (film) {
      setFilms(films.map(f => f.id === film.id ? { ...f, title, image: imagePreview } : f));
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight text-zinc-900">
            {mode === "add" ? "Ajouter un film prochainement" : "Modifier le film"}
          </DialogTitle>
        </DialogHeader>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {/* Affiche */}
          <div className="flex flex-col items-center gap-2">
            {imagePreview ? (
              <img src={imagePreview} alt="Aperçu" className="w-32 h-44 object-cover rounded-lg border" />
            ) : (
              <div className="w-32 h-44 flex items-center justify-center bg-zinc-100 rounded-lg border text-zinc-400 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                + Affiche
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    setImagePreview(ev.target?.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <Button type="button" variant="outline" size="sm" className="mt-1 text-zinc-900" onClick={() => fileInputRef.current?.click()}>
              {imagePreview ? "Changer l'affiche" : "Ajouter l'affiche"}
            </Button>
          </div>
          {/* Titre */}
          <Input
            placeholder="Titre du film"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="h-9 placeholder:text-zinc-600 text-zinc-900"
          />
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={() => onOpenChange(false)} type="button" className="text-black">
              Annuler
            </Button>
            <Button type="submit" className="bg-zinc-900 hover:bg-zinc-800 text-white">
              {mode === "add" ? "Ajouter" : "Enregistrer"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpcomingDialog; 