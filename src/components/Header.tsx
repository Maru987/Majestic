import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [curtainsClosing, setCurtainsClosing] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projectorEffect, setProjectorEffect] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Fonction pour gérer le défilement vers les sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Ferme le menu mobile après la sélection
    }
  };

  useEffect(() => {
    // Déclencher l'animation des rideaux après un court délai
    const curtainsTimer = setTimeout(() => {
      setCurtainsOpen(true);
    }, 800);

    // Afficher le contenu avec un délai supplémentaire
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 2000);

    // Afficher le logo après un délai supplémentaire
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 3000);
    
    // Activer l'effet de projecteur juste avant le logo
    const projectorTimer = setTimeout(() => {
      setProjectorEffect(true);
    }, 2800);

    // Afficher les flèches après l'apparition du logo
    const arrowsTimer = setTimeout(() => {
      setArrowsVisible(true);
    }, 4000);

    // Gestion de l'effet au défilement (seulement pour les rideaux)
    const handleScroll = () => {
      if (!headerRef.current) return;
      
      const headerHeight = headerRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // Calcul du pourcentage de défilement pour les animations
      const scrollPercentage = Math.min(scrollPosition / (headerHeight * 0.5), 1);
      setScrollProgress(scrollPercentage);
      
      // Déclencher la fermeture des rideaux lorsque le défilement commence
      if (scrollPosition > headerHeight * 0.1 && !curtainsClosing) {
        setCurtainsClosing(true);
      } else if (scrollPosition <= headerHeight * 0.05 && curtainsClosing) {
        // Réinitialiser l'état si l'utilisateur remonte en haut de la page
        setCurtainsClosing(false);
      }
    };

    // Ajout de l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(curtainsTimer);
      clearTimeout(contentTimer);
      clearTimeout(logoTimer);
      clearTimeout(projectorTimer);
      clearTimeout(arrowsTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [curtainsClosing]);

  return (
    <header ref={headerRef} className="h-screen relative bg-cinema-black overflow-hidden">
      {/* Background Image with Overlay - Nouvelle image avec écran et fauteuils intégrés */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgroundv4.png"
          alt="Cinéma Majestic Tahiti - Salle de cinéma"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Curtains Animation */}
      <div className="absolute inset-0 z-30 pointer-events-none flex">
        {/* Left Curtain */}
        <div 
          className={`w-1/2 h-full bg-right bg-no-repeat bg-cover ${
            curtainsOpen && !curtainsClosing 
              ? 'animate-curtain-left'
              : curtainsClosing
                ? 'animate-curtain-close-left'
                : ''
          }`}
          style={{ 
            backgroundImage: `url('/images/rideauxv2.png')`,
            transform: curtainsClosing && !curtainsOpen 
              ? `translateX(${-80 * (1 - scrollProgress)}%)` 
              : undefined
          }}
        />
        
        {/* Right Curtain */}
        <div 
          className={`w-1/2 h-full bg-left bg-no-repeat bg-cover ${
            curtainsOpen && !curtainsClosing 
              ? 'animate-curtain-right'
              : curtainsClosing
                ? 'animate-curtain-close-right'
                : ''
          }`}
          style={{ 
            backgroundImage: `url('/images/rideauxv2.png')`,
            transform: curtainsClosing && !curtainsOpen
              ? `translateX(${80 * (1 - scrollProgress)}%)` 
              : undefined
          }}
        />
      </div>

      {/* Navigation Bar with opacity transition - Centered */}
      <div className="absolute top-0 left-0 right-0 z-40 w-full flex justify-center transition-opacity duration-1000">
        <nav className={`relative max-w-5xl w-[80%] flex justify-between items-center px-6 py-6 mt-2 transition-opacity duration-1000 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/images/logo.png" 
                alt="Majestic Tahiti" 
                className="h-14 md:h-16 object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => scrollToSection('films')} 
              className="text-white hover:text-cinema-red transition cursor-pointer"
            >
              Films
            </button>
            <Link 
              to="/prochainement" 
              className={`text-white hover:text-cinema-red transition ${location.pathname === '/prochainement' ? 'text-cinema-red' : ''}`}
            >
              Prochainement
            </Link>
            <button 
              onClick={() => scrollToSection('horaires')} 
              className="text-white hover:text-cinema-red transition cursor-pointer"
            >
              Horaires
            </button>
            <button 
              onClick={() => scrollToSection('evenements')} 
              className="text-white hover:text-cinema-red transition cursor-pointer"
            >
              Événements spéciaux
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')} 
              className="text-white hover:text-cinema-red transition cursor-pointer"
            >
              Newsletter
            </button>
            <Search className="w-5 h-5 text-white cursor-pointer hover:text-cinema-red transition ml-4" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu 
              className="w-6 h-6 text-white cursor-pointer hover:text-cinema-red transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </nav>
      </div>

      {/* Effet de projecteur de cinéma */}
      <div 
        className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-1000 ${
          projectorEffect ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Halo principal du projecteur avec animation - opacité réduite */}
        <div className="w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-white/5 rounded-full animate-projector-flicker"></div>
      </div>

      {/* Logo et Bouton centrés */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div className={`transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="/images/logo.png"
            alt="Majestic Tahiti Cinema"
            className="w-[300px] md:w-[400px] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </div>
        
        {/* Bouton "Voir les films à l'affiche" */}
        <div className={`mt-2 transition-opacity duration-1000 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => scrollToSection('films')}
            className="group flex flex-col items-center"
          >
            <span className="text-white text-lg mb-1">Voir les films à l'affiche</span>
            <div className="flex flex-col">
              <ChevronDown className="w-8 h-8 text-cinema-red animate-bounce" />
              <ChevronDown className="w-8 h-8 text-cinema-red -mt-4 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden absolute top-[80px] right-4 z-50 bg-black/90 rounded-lg p-4 transform transition-transform duration-300 origin-top-right ${
        isMobileMenuOpen ? 'scale-100' : 'scale-0'
      }`}>
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('films')} 
            className="text-white hover:text-cinema-red transition text-left"
          >
            Films
          </button>
          <Link 
            to="/prochainement" 
            className={`text-white hover:text-cinema-red transition ${location.pathname === '/prochainement' ? 'text-cinema-red' : ''}`}
          >
            Prochainement
          </Link>
          <button 
            onClick={() => scrollToSection('horaires')} 
            className="text-white hover:text-cinema-red transition text-left"
          >
            Horaires
          </button>
          <button 
            onClick={() => scrollToSection('evenements')} 
            className="text-white hover:text-cinema-red transition text-left"
          >
            Événements spéciaux
          </button>
          <button 
            onClick={() => scrollToSection('newsletter')} 
            className="text-white hover:text-cinema-red transition text-left"
          >
            Newsletter
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
