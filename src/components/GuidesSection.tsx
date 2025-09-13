import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import saudeMulther from '@/assets/saude-mulher.png';
import higieneOral from '@/assets/higiene-oral.png';
import alimentacaoSaudavel from '@/assets/alimentacao-saudavel.png';

const guides = [
  {
    title: 'Guia Saúde da Mulher',
    image: saudeMulther,
    pdfPath: '/pdfs/guia-saude-mulher.pdf',
    description: 'Prevenção e cuidados essenciais para a saúde feminina em todas as fases da vida.'
  },
  {
    title: 'Guia Prático de Higiene Oral',
    image: higieneOral,
    pdfPath: '/pdfs/guia-higiene-oral.pdf',
    description: 'Técnicas corretas de escovação e uso do fio dental para um sorriso saudável.'
  },
  {
    title: 'Guia Alimentação Saudável',
    image: alimentacaoSaudavel,
    pdfPath: '/pdfs/guia-alimentacao-saudavel.pdf',
    description: 'Alimentos que fortalecem os dentes e promovem a saúde bucal.'
  }
];

const GuidesSection: React.FC = () => {
  const handleDownload = (pdfPath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <section className="py-16 bg-educational-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-educational-text">
          Guias de Saúde
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="bg-white border-educational-rose/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden bg-educational-pink p-4">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-educational-rose">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-educational-text mb-6">
                  {guide.description}
                </p>
                
                <Button 
                  onClick={() => handleDownload(guide.pdfPath, `${guide.title.toLowerCase().replace(/\s+/g, '-')}.pdf`)}
                  className="bg-educational-rose hover:bg-educational-rose/90 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;