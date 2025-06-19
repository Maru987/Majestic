import React, { useState } from "react";
import { Upload, Clock, Calendar, Film, Languages, Plus, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Seance {
  time: string;
  format: "2D" | "3D";
  salle: string;
}

interface Film {
  id?: number;
  title: string;
  image: string;
  isNew?: boolean;
  salles: string[];
  formats: string[];
  horaires: string[];
}

interface FilmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  film?: Film;
  mode: "add" | "edit";
}

const FilmDialog: React.FC<FilmDialogProps> = ({
  open,
  onOpenChange,
  film,
  mode,
}) => {
  const [salles, setSalles] = useState<string[]>(film?.salles || []);
  const [formats, setFormats] = useState<string[]>(film?.formats || []);
  const [horaires, setHoraires] = useState<string[]>(film?.horaires || [""]);
  const [isNew, setIsNew] = useState(film?.isNew || false);
  const [imagePreview, setImagePreview] = useState<string | undefined>(film?.image);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const genres = [
    "Action",
    "Animation",
    "Aventure",
    "Comédie",
    "Drame",
    "Fantastique",
    "Horreur",
    "Science Fiction",
    "Thriller",
  ];

  // Gestion des salles (max 4)
  const handleSalleChange = (salle: string) => {
    if (salles.includes(salle)) {
      setSalles(salles.filter(s => s !== salle));
    } else if (salles.length < 4) {
      setSalles([...salles, salle]);
    }
  };

  // Gestion des formats (2D, 3D)
  const handleFormatChange = (format: string) => {
    if (formats.includes(format)) {
      setFormats(formats.filter(f => f !== format));
    } else {
      setFormats([...formats, format]);
    }
  };

  // Gestion des horaires
  const addHoraire = () => {
    setHoraires([...horaires, ""]);
  };
  const removeHoraire = (index: number) => {
    setHoraires(horaires.filter((_, i) => i !== index));
  };
  const updateHoraire = (index: number, value: string) => {
    const newHoraires = [...horaires];
    newHoraires[index] = value;
    setHoraires(newHoraires);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-4">
        <DialogHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold tracking-tight flex items-center gap-2 text-zinc-900">
              <Film className="w-5 h-5" />
              Gestion des films
            </DialogTitle>
            {mode === "add" && (
              <Badge variant="outline" className="bg-zinc-100 text-zinc-500 text-sm px-3 py-1">
                Nouveau film
              </Badge>
            )}
          </div>
          <DialogDescription className="text-sm text-zinc-600">
            {mode === "add"
              ? "Ajoutez un nouveau film à l'affiche en remplissant les informations ci-dessous"
              : "Modifiez les informations et les horaires du film sélectionné"}
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4">
          <div className="grid grid-cols-[250px,1fr] gap-6">
            {/* Colonne de gauche : Image et Horaires */}
            <div className="space-y-4">
              {/* Salle */}
              <div className="relative w-full">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-32">
                  <div className="bg-[#4A0404] text-amber-400 text-center py-1 px-4 rounded-md border-2 border-amber-500 shadow-lg font-semibold">
                    Salle {salles.join(", ")}
                  </div>
                </div>
              </div>

              {/* Affiche */}
              <Card className="overflow-hidden border-2 border-amber-600 shadow-xl">
                <CardContent className="p-0 aspect-[2/3] relative group">
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt={film?.title || "Aperçu affiche"}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="text-white"
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Changer l'affiche
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors">
                      <Button
                        variant="ghost"
                        className="flex-col h-auto py-4"
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-6 h-6 mb-2 text-zinc-400" />
                        <span className="text-sm text-zinc-600">Ajouter l'affiche</span>
                      </Button>
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
                </CardContent>
              </Card>

              {/* Horaires */}
              <div className="bg-[#4A0404] p-3 rounded-md border-2 border-amber-500 shadow-lg">
                <div className="flex flex-wrap gap-2 justify-center">
                  {horaires.map((horaire, index) => (
                    <div key={index} className="text-amber-400 font-semibold text-lg">
                      {horaire && (
                        <>
                          {horaire}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  checked={isNew}
                  onCheckedChange={setIsNew}
                  className="data-[state=checked]:bg-green-600"
                />
                <Label className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  Nouveau film
                </Label>
              </div>
            </div>

            {/* Colonne de droite : Informations */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Titre uniquement */}
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="title" className="text-sm font-semibold text-zinc-900">
                    Titre du film
                  </Label>
                  <Input
                    id="title"
                    placeholder="Entrez le titre complet du film"
                    defaultValue={film?.title}
                    className="h-9 placeholder:text-zinc-600 text-zinc-900"
                  />
                </div>
                {/* Sélection des salles */}
                <div className="col-span-2 space-y-2">
                  <Label className="text-sm font-semibold text-zinc-900">Salle(s)</Label>
                  <div className="flex gap-4">
                    {["1", "2", "3", "4"].map((salle) => (
                      <label key={salle} className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          checked={salles.includes(salle)}
                          onChange={() => handleSalleChange(salle)}
                          disabled={!salles.includes(salle) && salles.length >= 4}
                        />
                        <span className="text-zinc-900">Salle {salle}</span>
                      </label>
                    ))}
                  </div>
                  <div className="text-xs text-zinc-500">(Vous pouvez sélectionner jusqu'à 4 salles)</div>
                </div>
                {/* Sélection des formats */}
                <div className="col-span-2 space-y-2">
                  <Label className="text-sm font-semibold text-zinc-900">Format</Label>
                  <div className="flex gap-4">
                    {["2D", "3D"].map((format) => (
                      <label key={format} className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          checked={formats.includes(format)}
                          onChange={() => handleFormatChange(format)}
                        />
                        <span className="text-zinc-900">{format}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section horaires */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Horaires des séances
                  </Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addHoraire}
                    className="h-8 border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-400"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter un horaire
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-3 space-y-2">
                    {horaires.map((horaire, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Input
                          type="time"
                          value={horaire}
                          onChange={(e) => updateHoraire(index, e.target.value)}
                          className="h-8 text-zinc-900 placeholder:text-zinc-600 cursor-pointer w-full"
                          placeholder="Sélectionnez l'heure"
                        />
                        {horaires.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeHoraire(index)}
                            className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 text-zinc-900"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              type="button"
              className="text-black"
            >
              Annuler
            </Button>
            <Button type="submit" className="bg-zinc-900 hover:bg-zinc-800">
              {mode === "add" ? "Ajouter le film" : "Enregistrer les modifications"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FilmDialog; 