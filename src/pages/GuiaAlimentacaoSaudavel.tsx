import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Apple, Utensils, AlertCircle, Droplets, Download, ArrowLeft, Sparkles } from 'lucide-react';
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
            <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl float">
              <Apple className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Guia Alimentação Saudável
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A alimentação reflete diretamente na sua saúde! Uma boa alimentação ajuda a prolongar a vida com qualidade, 
              evitando o surgimento precoce de doenças e promovendo bem-estar físico e mental.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mr-3">
                    <Apple className="w-5 h-5 text-white" />
                  </div>
                  1. Importância
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Alimentar-se bem hoje é investir em um futuro com mais saúde.
                </p>
                <div className="bg-secondary p-4 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Benefícios:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
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

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  2. Como Montar um Prato Saudável
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary p-4 rounded-xl">
                  <p className="text-foreground font-semibold mb-2">
                    🌈 Regra do prato colorido: quanto mais cores, mais nutrientes!
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>50%</strong> vegetais e legumes crus ou cozidos</li>
                    <li><strong>25%</strong> carboidratos integrais: arroz, batata, macaxeira</li>
                    <li><strong>25%</strong> proteínas: frango, peixe, ovos, lentilha</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">Inclua gorduras boas:</strong> azeite, abacate, castanhas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card service-card border-border/50" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mr-3">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  3. O Que Evitar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">🦷 Para proteger os dentes:</h4>
                  <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                    <li>Doces em excesso</li>
                    <li>Refrigerantes e sucos açucarados</li>
                    <li>Bebidas ácidas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Para a saúde geral:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Excesso de sal</li>
                    <li>Fast-food e frituras em excesso</li>
                    <li>Alimentos com gordura trans</li>
                    <li>Refrigerante e sucos industrializados</li>
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
                  4. Hidratação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary p-4 rounded-xl">
                  <p className="text-foreground font-semibold mb-2">💧 Beba pelo menos 1,5 a 2 litros de água por dia</p>
                  <p className="text-muted-foreground">
                    Evite bebidas açucaradas durante as refeições.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card service-card mb-8 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-3">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                5. Alimentos que Fortalecem os Dentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A saúde bucal também começa pela alimentação, escolher os alimentos certos ajuda a fortalecer os dentes e a evitar problemas como cáries e gengivite.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary p-4 rounded-xl hover-lift">
                  <h4 className="font-semibold text-foreground mb-2">🥛 Leite, queijo e iogurte</h4>
                  <p className="text-muted-foreground text-sm">
                    Ricos em cálcio e fósforo, que ajudam na formação e manutenção do esmalte dos dentes.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-xl hover-lift">
                  <h4 className="font-semibold text-foreground mb-2">🥬 Vegetais folhosos</h4>
                  <p className="text-muted-foreground text-sm">
                    Couve, espinafre, brócolis são fontes de cálcio e fibras, estimulam a produção de saliva.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-xl hover-lift">
                  <h4 className="font-semibold text-foreground mb-2">🍎 Frutas fibrosas</h4>
                  <p className="text-muted-foreground text-sm">
                    Maçã, pêra e cenoura crua fazem uma limpeza natural nos dentes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift"
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
