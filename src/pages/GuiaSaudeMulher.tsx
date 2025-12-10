import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Shield, AlertTriangle, Users, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuiaSaudeMulher: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/guia-saude-mulher.pdf';
    link.download = 'guia-saude-mulher.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-accent">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-6 text-foreground hover:bg-secondary hover:text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>

          <div className="text-center mb-12 fade-in-up">
            <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl float">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Guia Saúde da Mulher
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A prevenção na saúde da mulher salva vidas, reduz sofrimento e melhora a qualidade de vida em todas as fases. 
              Desde a adolescência até a terceira idade, a prevenção promove bem-estar físico e mental.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  1. Prevenção de Doenças
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Prevenção de ISTs (infecções sexualmente transmissíveis) com uso de preservativos femininos e masculinos.
                </p>
                <p className="text-muted-foreground">
                  Testes gratuitos para HIV, sífilis e hepatite pelo SUS.
                </p>
                <div className="bg-secondary p-4 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Sinais de alerta:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Corrimento vaginal com odor forte</li>
                    <li>Coceira em região íntima</li>
                    <li>Sangramento fora do período menstrual</li>
                    <li>Dor pélvica</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  2. Saúde Sexual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  É recomendado anualmente visitas ginecológicas para realizar exames preventivos para alterações ginecológicas.
                </p>
                <p className="text-muted-foreground">
                  Estabeleça diálogo aberto com os profissionais de saúde. Auto-cuidado não é sinônimo de vergonha, os profissionais de saúde estarão à disposição para ajudar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mr-3">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  3. Violência Contra a Mulher
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Tipos de violência:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Física:</strong> agressões, empurrões, socos</li>
                    <li><strong>Psicológica:</strong> humilhação, ameaças, controle, isolamento</li>
                    <li><strong>Sexual:</strong> estupro, assédio, impedir o uso de preservativos</li>
                    <li><strong>Patrimonial:</strong> destruição ou retenção de bens ou documentos</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Como buscar ajuda:</h4>
                  <p className="text-red-700 text-sm">
                    Ligue 180 (24h, sigilosa e gratuita)<br/>
                    Procure delegacias da mulher, serviços de saúde, defensorias públicas e CRAS/CREAS
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  4. Saúde em Diferentes Fases da Vida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-secondary rounded-xl">
                    <h4 className="font-semibold text-foreground">Adolescência:</h4>
                    <p className="text-muted-foreground text-sm">
                      Educação sexual, vacinação contra HPV, primeira consulta ginecológica.
                    </p>
                  </div>
                  <div className="p-3 bg-secondary rounded-xl">
                    <h4 className="font-semibold text-foreground">Idade fértil:</h4>
                    <p className="text-muted-foreground text-sm">
                      Planejamento familiar, saúde menstrual, prevenção de cânceres ginecológicos.
                    </p>
                  </div>
                  <div className="p-3 bg-secondary rounded-xl">
                    <h4 className="font-semibold text-foreground">Terceira idade:</h4>
                    <p className="text-muted-foreground text-sm">
                      Combate à osteoporose, atenção à saúde cardiovascular, alterações hormonais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center scale-in">
            <Card className="bg-gradient-to-br from-secondary to-accent max-w-md mx-auto border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Download className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Baixe o Guia Completo
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Tenha todas as informações sempre à mão com nosso PDF completo
                </p>
                <Button 
                  onClick={handleDownloadPDF}
                  className="hover:bg-primary/90 text-primary-foreground group/btn transition-all w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaSaudeMulher;
