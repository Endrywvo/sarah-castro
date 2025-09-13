import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Smile, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuidesSection: React.FC = () => {
  const navigate = useNavigate();

  const guides = [
    {
      id: 'saude-mulher',
      title: 'Guia Saúde da Mulher',
      description: 'A prevenção na saúde da mulher salva vidas, reduz sofrimento e melhora a qualidade de vida em todas as fases.',
      icon: Heart,
      path: '/guia-saude-mulher'
    },
    {
      id: 'higiene-oral',
      title: 'Guia Prático de Higiene Oral',
      description: 'O essencial para um sorriso saudável. Aprenda técnicas corretas de escovação e cuidados bucais.',
      icon: Smile,
      path: '/guia-higiene-oral'
    },
    {
      id: 'alimentacao-saudavel',
      title: 'Guia Alimentação Saudável',
      description: 'A alimentação reflete diretamente na sua saúde! Descubra como montar um prato saudável.',
      icon: Apple,
      path: '/guia-alimentacao-saudavel'
    }
  ];

  return (
    <section className="py-16 bg-educational-dynamic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-educational-text mb-4">
            Guias de Saúde
          </h2>
          <p className="text-lg text-educational-text/80 max-w-2xl mx-auto">
            Acesse nossos guias completos sobre saúde e bem-estar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => {
            const IconComponent = guide.icon;
            return (
              <Card key={guide.id} className="bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-educational-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-educational-text">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-educational-text/70">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={() => navigate(guide.path)}
                    className="w-full bg-educational-primary hover:bg-educational-primary/90"
                  >
                    Acessar Guia
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