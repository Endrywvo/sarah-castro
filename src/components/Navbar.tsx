
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
            <h1 className="text-2xl font-semibold text-dental-pastelPink">
              <Link to="/">
                <span className="text-dental-pastelRed">Odonto</span> Unichristus
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/#home" className="text-gray-700 hover:text-dental-pastelPink transition">Início</Link>
            <Link to="/#services" className="text-gray-700 hover:text-dental-pastelPink transition">Serviços</Link>
            <Link to="/#about" className="text-gray-700 hover:text-dental-pastelPink transition">Sobre</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-dental-pastelPink transition">Avaliações</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-dental-pastelPink transition">Contato</Link>
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
            <Link to="/#home" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/#services" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
            <Link to="/#about" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            <Link to="/reviews" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Avaliações</Link>
            <Link to="/#contact" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
