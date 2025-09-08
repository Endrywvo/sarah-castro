
import React from 'react';
import { Button } from "@/components/ui/button";
import { Stethoscope, BookOpen, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="bg-gradient-to-br from-educational-green to-educational-blue py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sarah Castro
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-medium text-white">
              Atendimentos Odontológicos
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Educação e cuidado para um sorriso saudável
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-educational-text hover:bg-gray-100"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="mr-2 h-5 w-5" />
                Quem Sou
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-educational-text"
                onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Guia de Higiene
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Stethoscope size={120} className="text-white/80" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-educational-light rounded-full flex items-center justify-center">
                <span className="text-4xl">🦷</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
