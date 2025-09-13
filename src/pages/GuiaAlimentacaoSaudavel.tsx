import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Apple, Utensils, AlertCircle, Droplets, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuiaAlimentacaoSaudavel: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/guia-alimentacao-saudavel.pdf';
    link.download = 'guia-alimentacao-saudavel.pdf';
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
              <Apple className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-educational-text mb-4">
              Guia Alimentação Saudável
            </h1>
            <p className="text-lg text-educational-text/80 max-w-3xl mx-auto">
              A alimentação reflete diretamente na sua saúde! Uma boa alimentação ajuda a prolongar a vida com qualidade, 
              evitando o surgimento precoce de doenças e promovendo bem-estar físico e mental.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Apple className="w-6 h-6 mr-2 text-educational-primary" />
                  1. Importância
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  Alimentar-se bem hoje é investir em um futuro com mais saúde.
                </p>
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Benefícios:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Mais energia e disposição</li>
                    <li>Melhora a imunidade</li>
                    <li>Controle do peso</li>
                    <li>Melhor saúde intestinal</li>
                    <li>Melhora o humor</li>
                    <li>Previne quadros de depressão e ansiedade</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Utensils className="w-6 h-6 mr-2 text-educational-primary" />
                  2. Como Montar um Prato Saudável
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-educational-light p-4 rounded-lg">
                  <p className="text-educational-text font-semibold mb-2">
                    Regra do prato colorido: quanto mais cores no prato, mais variedades de nutrientes!
                  </p>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li><strong>50%</strong> vegetais e legumes crus ou cozidos</li>
                    <li><strong>25%</strong> carboidratos integrais: arroz, batata, macaxeira</li>
                    <li><strong>25%</strong> proteínas: frango, peixe, ovos, lentilha</li>
                  </ul>
                  <p className="text-educational-text/80 mt-2">
                    <strong>Inclua gorduras boas:</strong> azeite, abacate, castanhas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <AlertCircle className="w-6 h-6 mr-2 text-educational-primary" />
                  3. O Que Evitar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Para proteger os dentes:</h4>
                  <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                    <li>Doces em excesso</li>
                    <li>Refrigerantes e sucos açucarados</li>
                    <li>Bebidas ácidas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-educational-text mb-2">Para a saúde geral:</h4>
                  <ul className="list-disc list-inside text-educational-text/80 space-y-1">
                    <li>Excesso de sal</li>
                    <li>Fast-food e frituras em excesso</li>
                    <li>Alimentos com gordura trans</li>
                    <li>Refrigerante e sucos industrializados</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-educational-text">
                  <Droplets className="w-6 h-6 mr-2 text-educational-primary" />
                  4. Hidratação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-educational-text/80">
                  Beba pelo menos 1,5 a 2 litros de água por dia.
                </p>
                <p className="text-educational-text/80">
                  Evite bebidas açucaradas durante as refeições.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-educational-text">
                <Apple className="w-6 h-6 mr-2 text-educational-primary" />
                5. Alimentos que Fortalecem os Dentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-educational-text/80">
                A saúde bucal também começa pela alimentação, escolher os alimentos certos ajuda a fortalecer os dentes e a evitar problemas como cáries e gengivite.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Leite, queijo e iogurte</h4>
                  <p className="text-educational-text/80 text-sm">
                    Ricos em cálcio e fósforo, que ajudam na formação e manutenção do esmalte dos dentes.
                  </p>
                </div>
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Vegetais folhosos</h4>
                  <p className="text-educational-text/80 text-sm">
                    Couve, espinafre, brócolis são fontes de cálcio e fibras, estimulam a produção de saliva.
                  </p>
                </div>
                <div className="bg-educational-light p-4 rounded-lg">
                  <h4 className="font-semibold text-educational-text mb-2">Frutas fibrosas</h4>
                  <p className="text-educational-text/80 text-sm">
                    Maçã, pêra e cenoura crua fazem uma limpeza natural nos dentes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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

export default GuiaAlimentacaoSaudavel;