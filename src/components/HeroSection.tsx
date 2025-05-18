
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sorrisos Saudáveis, Vidas Felizes
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Tratamentos odontológicos com atendimento humanizado e tecnologia de ponta na Faculdade UniCrhistos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-dental-pastelPink hover:bg-dental-cream">
                Agendar Consulta
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Dentista sorridente" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
