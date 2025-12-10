
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-semibold">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <span className="gradient-text">Sarah Castro</span>
                <span className="text-muted-foreground"> - Atendimentos</span>
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link to="/#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Quem Sou
            </Link>
            <Link to="/#guide" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Guias de Saúde
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
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
            <Link 
              to="/#home" 
              className="block text-foreground/80 hover:text-primary py-2 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/#about" 
              className="block text-foreground/80 hover:text-primary py-2 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Sou
            </Link>
            <Link 
              to="/#guide" 
              className="block text-foreground/80 hover:text-primary py-2 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Guias de Saúde
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
