import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinema-black text-white pt-12 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-cinema-red text-2xl font-extrabold tracking-wider">MAJESTIC</span>
              <span className="text-white text-xs ml-1 font-light">TAHITI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Le cinéma Majestic Tahiti vous accueille tous les jours pour vous faire 
              découvrir les derniers films à l'affiche dans un cadre confortable et moderne.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cinema-red">Films à l'affiche</a></li>
              <li><a href="#" className="hover:text-cinema-red">Prochainement</a></li>
              <li><a href="#" className="hover:text-cinema-red">Événements spéciaux</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic space-y-2 text-sm">
              <p>Avenue du Prince Hinoi, Papeete</p>
              <p>98713 Tahiti, Polynésie française</p>
              <p className="pt-2">Téléphone: +689 40 54 32 10</p>
              <p>Email: contact@majestic-tahiti.com</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Cinéma Majestic Tahiti. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cinema-red">Politique de confidentialité</a>
            <a href="#" className="hover:text-cinema-red">Mentions légales</a>
            <a href="#" className="hover:text-cinema-red">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
