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
  
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  // Fonction pour scroller vers la section suivante
  const scrollToNextSection = () => {
    // Si on est sur la page d'accueil, faire défiler vers la section films
    if (location.pathname === '/') {
      const filmsSection = document.getElementById('films');
      if (filmsSection) {
        filmsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon rediriger vers la page d'accueil
      window.location.href = '/';
    }
  };

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
            <Link to="/#films" className="text-white hover:text-cinema-red transition">Films</Link>
            <Link to="/prochainement" className={`text-white hover:text-cinema-red transition ${location.pathname === '/prochainement' ? 'text-cinema-red' : ''}`}>Prochainement</Link>
            <Link to="/#horaires" className="text-white hover:text-cinema-red transition">Horaires</Link>
            <Link to="/evenements" className={`text-white hover:text-cinema-red transition ${location.pathname === '/evenements' ? 'text-cinema-red' : ''}`}>Événements spéciaux</Link>
            <Link to="/#newsletter" className="text-white hover:text-cinema-red transition">Newsletter</Link>
            <Search className="w-5 h-5 text-white cursor-pointer hover:text-cinema-red transition ml-4" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
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
        
        {/* Petits points lumineux aléatoires pour simuler les poussières dans le faisceau */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping" 
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Logo Majestic au centre de l'écran */}
      <div 
        className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-opacity duration-1000 flex flex-col items-center ${
          logoVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src="/images/logo.png" 
          alt="Logo Majestic Tahiti" 
          className="w-[350px] md:w-[500px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        />
        
        {/* Flèches rebondissantes sous le logo */}
        <div 
          className={`mt-2 flex flex-col items-center cursor-pointer transition-opacity duration-1000 ${
            arrowsVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollToNextSection}
        >
          <p className="text-white text-lg mb-1 font-medium">Découvrir</p>
          <div className="flex flex-col">
            <ChevronDown className="w-8 h-8 text-cinema-red animate-bounce" />
            <ChevronDown className="w-8 h-8 text-cinema-red -mt-4 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
