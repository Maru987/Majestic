import React from "react";
import { Film, CalendarDays, CalendarClock, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
  children: React.ReactNode;
  currentSection: "films" | "upcoming" | "events";
  setCurrentSection: (section: "films" | "upcoming" | "events") => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, currentSection, setCurrentSection }) => {
  const menuItems = [
    {
      id: "films",
      label: "Films à l'affiche",
      icon: Film,
    },
    {
      id: "upcoming",
      label: "Prochainement",
      icon: CalendarDays,
    },
    {
      id: "events",
      label: "Événements à venir",
      icon: CalendarClock,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 antialiased">
      <div className="flex h-screen">
        {/* Sidebar avec fond noir */}
        <aside className="w-64 bg-zinc-950 text-zinc-400 flex flex-col">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-white tracking-tight">
              Administration
            </h1>
            <p className="text-xs text-zinc-500 mt-0.5">
              Gestion du contenu cinéma
            </p>
          </div>
          
          <Separator className="bg-zinc-800" />
          
          <nav className="px-3 py-4 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 px-3 py-6 text-sm font-medium transition-colors mb-1",
                    currentSection === item.id
                      ? "bg-zinc-900 text-white hover:bg-zinc-900"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  )}
                  onClick={() => setCurrentSection(item.id as "films" | "upcoming" | "events")}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}

            <Separator className="my-4 bg-zinc-800" />

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 py-6 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </Button>
          </nav>
        </aside>

        {/* Main content avec fond blanc */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="h-16 border-b border-zinc-200 flex items-center px-8 bg-white sticky top-0 z-10">
            <h2 className="text-lg font-medium text-zinc-900">
              {menuItems.find((item) => item.id === currentSection)?.label}
            </h2>
          </div>
          
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 