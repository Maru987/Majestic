
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-16 px-6 lg:px-16 bg-gradient-to-r from-cinema-black to-cinema-darkgray">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="bg-cinema-red rounded-full p-3 mb-6">
            <Mail className="h-6 w-6 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-white">Restez informé</h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
            les sorties de films à venir et nos offres exclusives.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-white/10 border-0 text-white placeholder:text-gray-400"
            />
            <Button className="bg-cinema-red hover:bg-cinema-red/90 text-white whitespace-nowrap">
              S'abonner
            </Button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité. 
            Nous ne partagerons jamais vos informations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
