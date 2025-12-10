
import React from 'react';
import { Button } from "@/components/ui/button";
import { Stethoscope, BookOpen, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="hero-gradient py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Sarah Castro
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-medium text-foreground">
              Atendimentos Odontológicos
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Educação e cuidado para um sorriso saudável
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="hover:bg-primary/90 text-primary-foreground group/btn transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover-lift shadow-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="mr-2 h-5 w-5" />
                Quem Sou
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
                onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Guia de Higiene
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center px-4">
            <div className="relative scale-in">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm float">
                <Stethoscope size={100} className="text-primary/70 md:w-[120px] md:h-[120px]" />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg pulse-soft">
                <span className="text-3xl md:text-4xl">🦷</span>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-card rounded-full flex items-center justify-center shadow-lg pulse-soft" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl md:text-3xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
