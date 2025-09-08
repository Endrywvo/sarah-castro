import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhoAmISection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-educational-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-educational-text">Quem Sou?</h2>
          <div className="w-20 h-1 bg-educational-green mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Card className="bg-educational-green/10 border-educational-green/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-educational-green rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-educational-text mb-2">
                      Estudante de Odontologia
                    </h3>
                    <p className="text-educational-text/80">
                      Sou aluna de odontologia da instituição de ensino Unichristus, e por meio dela atendo pacientes de forma supervisionada.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-educational-blue rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-educational-text mb-2">
                      Minha Missão
                    </h3>
                    <p className="text-educational-text/80">
                      Através de folders juntamente com as devidas instruções realizadas presencialmente na clínica, tenho o objetivo de transmitir conhecimento e autocuidados para os pacientes, facilitando e transmitindo conhecimentos sobre as necessidades de cada um.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-educational-text mb-2">
                      Onde Posso Saber Mais?
                    </h3>
                    <p className="text-educational-text/80 mb-4">
                      No meu Instagram você poderá obter informações adicionais sobre minha rotina acadêmica e acompanhar posts interativos.
                    </p>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                      <Instagram className="mr-2 h-4 w-4" />
                      Seguir no Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gradient-to-br from-educational-green to-educational-blue p-8 rounded-2xl text-white text-center">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <h3 className="text-2xl font-bold mb-2">Sarah Castro</h3>
                  <p className="text-lg mb-4">Estudante de Odontologia</p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">Unichristus</p>
                    <p className="text-xs opacity-80">Atendimento supervisionado</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">📚</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-educational-light rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">🦷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmISection;