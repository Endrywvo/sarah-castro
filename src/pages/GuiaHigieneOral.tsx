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
              <Smile className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-educational-text mb-4">
              Guia Prático de Higiene Oral
            </h1>
            <p className="text-lg text-educational-text/80 max-w-3xl mx-auto">
              O essencial para um sorriso saudável. Poucas pessoas sabem, mas o tipo de escova, 
              tipo de pasta de dente e técnica de escovação impactam diretamente na higienização oral.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Brush className="w-6 h-6 mr-2 text-educational-primary" />
                  1. Uso Correto do Fio Dental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  O objetivo do fio dental é limpar entre gengiva e dentes, não apenas entre os dentes.
                </p>
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Passo a passo:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Utilize cerca de 40cm de fio dental (tamanho do antebraço)</li>
                    <li>Ao posicionar o fio dental entre os dentes realize movimentos de vai e vem</li>
                    <li>Repita o processo em todos os dentes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Clock className="w-6 h-6 mr-2 text-educational-primary" />
                  2. Como Escovar os Dentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  A escovação deve ser feita no mínimo 3x ao dia: ao acordar, após as principais refeições e antes de dormir.
                </p>
                <div className="space-y-2">
                  <p className="text-educational-text/80">
                    <strong>Escova:</strong> deve ter cerdas macias e precisa ser trocada a cada três meses.
                  </p>
                  <p className="text-educational-text/80">
                    <strong>Pasta:</strong> deve conter flúor, fundamental para prevenir cáries.
                  </p>
                  <p className="text-educational-text/80">
                    <strong>Tempo:</strong> escovação deve durar 2min (você pode ouvir uma música!).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Brush className="w-6 h-6 mr-2 text-educational-primary" />
                  3. Técnica Correta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Movimentos:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Faça movimentos circulares com a escova levemente inclinada</li>
                    <li>Não esqueça da parte interna dos dentes</li>
                    <li>Escove as superfícies de mastigação</li>
                    <li>Todas as faces dos dentes devem ser escovadas</li>
                    <li>Escove a língua fazendo movimento de vassoura</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Droplets className="w-6 h-6 mr-2 text-educational-primary" />
                  4. Sobre o Enxaguante Bucal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800 font-semibold">
                    ⚠️ Enxaguante bucal NÃO substitui a escovação!
                  </p>
                  <p className="text-yellow-700 text-sm mt-2">
                    O enxaguante não remove a placa bacteriana nem os restos de alimentos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-educational-text mb-2">Para que serve:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Reduz temporariamente a carga bacteriana na boca</li>
                    <li>Refresca o hálito</li>
                    <li>Pode conter flúor ajudando na prevenção de cáries</li>
                  </ul>
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

export default GuiaHigieneOral;