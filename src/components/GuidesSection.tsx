import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Smile, Apple, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuidesSection: React.FC = () => {
  const navigate = useNavigate();

  const guides = [
    {
      id: 'saude-mulher',
      title: 'Guia Saúde da Mulher',
      description: 'A prevenção na saúde da mulher salva vidas, reduz sofrimento e melhora a qualidade de vida em todas as fases.',
      icon: Heart,
      path: '/guia-saude-mulher',
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 'higiene-oral',
      title: 'Guia Prático de Higiene Oral',
      description: 'O essencial para um sorriso saudável. Aprenda técnicas corretas de escovação e cuidados bucais.',
      icon: Smile,
      path: '/guia-higiene-oral',
      color: 'from-primary to-primary/80'
    },
    {
      id: 'alimentacao-saudavel',
      title: 'Guia Alimentação Saudável',
      description: 'A alimentação reflete diretamente na sua saúde! Descubra como montar um prato saudável.',
      icon: Apple,
      path: '/guia-alimentacao-saudavel',
      color: 'from-rose-400 to-pink-500'
    }
  ];

  return (
    <section id="guide" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Guias de Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse nossos guias completos sobre saúde e bem-estar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <Card 
                key={guide.id} 
                className="bg-card service-card border-border/50 overflow-hidden group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-20 h-20 bg-gradient-to-br ${guide.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button 
                    onClick={() => navigate(guide.path)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-all"
                  >
                    Acessar Guia
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
