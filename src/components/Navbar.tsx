
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-educational-green">
              <Link to="/">
                <span className="text-educational-text">Sarah Castro</span> - Atendimentos
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/#home" className="text-gray-700 hover:text-educational-green transition">Início</Link>
            <Link to="/#about" className="text-gray-700 hover:text-educational-green transition">Quem Sou</Link>
            <Link to="/#guide" className="text-gray-700 hover:text-educational-green transition">Guia de Higiene</Link>
            <Link to="/#schedule" className="text-gray-700 hover:text-educational-green transition">Horários</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-educational-green transition">Avaliações</Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/#home" className="block text-gray-700 hover:text-educational-green py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/#about" className="block text-gray-700 hover:text-educational-green py-2" onClick={() => setIsMenuOpen(false)}>Quem Sou</Link>
            <Link to="/#guide" className="block text-gray-700 hover:text-educational-green py-2" onClick={() => setIsMenuOpen(false)}>Guia de Higiene</Link>
            <Link to="/#schedule" className="block text-gray-700 hover:text-educational-green py-2" onClick={() => setIsMenuOpen(false)}>Horários</Link>
            <Link to="/reviews" className="block text-gray-700 hover:text-educational-green py-2" onClick={() => setIsMenuOpen(false)}>Avaliações</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
