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
      <main className="flex-1 bg-educational-dynamic">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-6 text-educational-text hover:bg-educational-light"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>

          <div className="text-center mb-12">
            <div className="mx-auto mb-6 w-20 h-20 bg-educational-primary rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-educational-text mb-4">
              Guia Saúde da Mulher
            </h1>
            <p className="text-lg text-educational-text/80 max-w-3xl mx-auto">
              A prevenção na saúde da mulher salva vidas, reduz sofrimento e melhora a qualidade de vida em todas as fases. 
              Desde a adolescência até a terceira idade, a prevenção promove bem-estar físico e mental.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Shield className="w-6 h-6 mr-2 text-educational-primary" />
                  1. Prevenção de Doenças
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  Prevenção de ISTs (infecções sexualmente transmissíveis) com uso de preservativos femininos e masculinos.
                </p>
                <p className="text-educational-text/80">
                  Testes gratuitos para HIV, sífilis e hepatite pelo SUS.
                </p>
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Sinais de alerta:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Corrimento vaginal com odor forte</li>
                    <li>Coceira em região íntima</li>
                    <li>Sangramento fora do período menstrual</li>
                    <li>Dor pélvica</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Heart className="w-6 h-6 mr-2 text-educational-primary" />
                  2. Saúde Sexual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  É recomendado anualmente visitas ginecológicas para realizar exames preventivos para alterações ginecológicas.
                </p>
                <p className="text-educational-text/80">
                  Estabeleça diálogo aberto com os profissionais de saúde. Auto-cuidado não é sinônimo de vergonha, os profissionais de saúde estarão à disposição para ajudar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <AlertTriangle className="w-6 h-6 mr-2 text-educational-primary" />
                  3. Violência Contra a Mulher
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-educational-text">Tipos de violência:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li><strong>Física:</strong> agressões, empurrões, socos</li>
                    <li><strong>Psicológica:</strong> humilhação, ameaças, controle, isolamento</li>
                    <li><strong>Sexual:</strong> estupro, assédio, impedir o uso de preservativos</li>
                    <li><strong>Patrimonial:</strong> destruição ou retenção de bens ou documentos</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Como buscar ajuda:</h4>
                  <p className="text-red-700 text-sm">
                    Ligue 180 (24h, sigilosa e gratuita)<br/>
                    Procure delegacias da mulher, serviços de saúde, defensorias públicas e CRAS/CREAS
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Users className="w-6 h-6 mr-2 text-educational-primary" />
                  4. Saúde em Diferentes Fases da Vida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-educational-text">Adolescência:</h4>
                    <p className="text-educational-text/80 text-sm">
                      Educação sexual, vacinação contra HPV, primeira consulta ginecológica.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-educational-text">Idade fértil:</h4>
                    <p className="text-educational-text/80 text-sm">
                      Planejamento familiar, saúde menstrual, prevenção de cânceres ginecológicos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-educational-text">Terceira idade:</h4>
                    <p className="text-educational-text/80 text-sm">
                      Combate à osteoporose, atenção à saúde cardiovascular, alterações hormonais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-educational-light max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-educational-text mb-4">
                  Baixe o Guia Completo
                </h3>
                <p className="text-educational-text/80 mb-6 text-sm">
                  Tenha todas as informações sempre à mão com nosso PDF completo
                </p>
                <Button 
                  onClick={handleDownloadPDF}
                  className="w-full bg-educational-primary hover:bg-educational-primary/90"
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