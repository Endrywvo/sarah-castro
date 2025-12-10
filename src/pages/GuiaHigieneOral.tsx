import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Brush, Clock, Droplets, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuiaHigieneOral: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/guia-higiene-oral.pdf';
    link.download = 'guia-higiene-oral.pdf';
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
            <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl float">
              <Smile className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Guia Prático de Higiene Oral
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O essencial para um sorriso saudável. Poucas pessoas sabem, mas o tipo de escova, 
              tipo de pasta de dente e técnica de escovação impactam diretamente na higienização oral.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-3">
                    <Brush className="w-5 h-5 text-primary-foreground" />
                  </div>
                  1. Uso Correto do Fio Dental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O objetivo do fio dental é limpar entre gengiva e dentes, não apenas entre os dentes.
                </p>
                <div className="bg-secondary p-4 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Passo a passo:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Utilize cerca de 40cm de fio dental (tamanho do antebraço)</li>
                    <li>Ao posicionar o fio dental entre os dentes realize movimentos de vai e vem</li>
                    <li>Repita o processo em todos os dentes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  2. Como Escovar os Dentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A escovação deve ser feita no mínimo 3x ao dia: ao acordar, após as principais refeições e antes de dormir.
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Escova:</strong> deve ter cerdas macias e precisa ser trocada a cada três meses.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Pasta:</strong> deve conter flúor, fundamental para prevenir cáries.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Tempo:</strong> escovação deve durar 2min (você pode ouvir uma música!).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                    <Brush className="w-5 h-5 text-white" />
                  </div>
                  3. Técnica Correta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary p-4 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Movimentos:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Faça movimentos circulares com a escova levemente inclinada</li>
                    <li>Não esqueça da parte interna dos dentes</li>
                    <li>Escove as superfícies de mastigação</li>
                    <li>Todas as faces dos dentes devem ser escovadas</li>
                    <li>Escove a língua fazendo movimento de vassoura</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  4. Sobre o Enxaguante Bucal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400">
                  <p className="text-amber-800 font-semibold">
                    ⚠️ Enxaguante bucal NÃO substitui a escovação!
                  </p>
                  <p className="text-amber-700 text-sm mt-2">
                    O enxaguante não remove a placa bacteriana nem os restos de alimentos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Para que serve:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Reduz temporariamente a carga bacteriana na boca</li>
                    <li>Refresca o hálito</li>
                    <li>Pode conter flúor ajudando na prevenção de cáries</li>
                  </ul>
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

export default GuiaHigieneOral;
