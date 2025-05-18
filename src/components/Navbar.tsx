
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-dental-pastelPink">
              <span className="text-dental-pastelRed">Sorriso</span> Clínica
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-dental-pastelPink transition">Início</a>
            <a href="#services" className="text-gray-700 hover:text-dental-pastelPink transition">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-dental-pastelPink transition">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-dental-pastelPink transition">Contato</a>
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
            <a href="#home" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#services" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#about" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#contact" className="block text-gray-700 hover:text-dental-pastelPink py-2" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
