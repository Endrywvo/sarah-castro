import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhoAmISection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Quem Sou?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="bg-card border-primary/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <GraduationCap className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Estudante de Odontologia
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sou aluna de odontologia da instituição de ensino Unichristus, e por meio dela atendo pacientes de forma supervisionada.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Minha Missão
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Através de folders juntamente com as devidas instruções realizadas presencialmente na clínica, tenho o objetivo de transmitir conhecimento e autocuidados para os pacientes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Instagram className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Onde Posso Saber Mais?
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      No meu Instagram você poderá obter informações adicionais sobre minha rotina acadêmica.
                    </p>
                    <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white shadow-lg hover-lift">
                      <Instagram className="mr-2 h-4 w-4" />
                      Seguir no Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2 scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-3xl text-primary-foreground text-center shadow-2xl">
                  <div className="text-6xl mb-4 float">👩‍⚕️</div>
                  <h3 className="text-2xl font-bold mb-2">Sarah Castro</h3>
                  <p className="text-lg mb-4 opacity-90">Estudante de Odontologia</p>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-medium">Unichristus</p>
                    <p className="text-sm opacity-80">Atendimento supervisionado</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl pulse-soft">
                <span className="text-2xl">📚</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-xl pulse-soft" style={{ animationDelay: '0.5s' }}>
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
