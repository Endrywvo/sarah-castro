
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-card/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center min-w-0">
            <h1 className="text-lg md:text-2xl font-semibold truncate">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <span className="gradient-text">Sarah Castro</span>
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Quem Sou
            </button>
            <button 
              onClick={() => scrollToSection('guide')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Guias de Saúde
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex-shrink-0">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 slide-in-right">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground/80 hover:text-primary py-2 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground/80 hover:text-primary py-2 transition-colors"
            >
              Quem Sou
            </button>
            <button 
              onClick={() => scrollToSection('guide')}
              className="block w-full text-left text-foreground/80 hover:text-primary py-2 transition-colors"
            >
              Guias de Saúde
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
