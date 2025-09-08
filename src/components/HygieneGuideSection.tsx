import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Sparkles, Shield, RefreshCw } from 'lucide-react';

const HygieneGuideSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "USO CORRETO DO FIO DENTAL",
      icon: "🧵",
      description: "O objetivo do fio dental é limpar entre gengiva e dentes, não apenas entre os dentes.",
      tips: [
        "Utilize cerca de 40cm de fio dental (tamanho do antebraço)",
        "Ao posicionar o fio dental entre os dentes realize movimentos de vai e vem",
        "Repita o processo em todos os dentes"
      ]
    },
    {
      number: "2", 
      title: "COMO ESCOVAR OS DENTES?",
      icon: "🪥",
      description: "Poucas pessoas sabem, mas o tipo de escova, tipo de pasta de dente e técnica de escovação impactam diretamente na higienização oral.",
      tips: [
        "A escovação deve ser feita no mínimo 3x ao dia: ao acordar, após as principais refeições e antes de dormir",
        "A escova de dente deve ter cerdas macias e precisa ser trocada a cada três meses",
        "A pasta de dentes deve conter flúor, fundamental para prevenir cáries",
        "A escovação deve durar 2min, você pode ouvir uma música enquanto escova os dentes para poder se guiar!"
      ]
    },
    {
      number: "3",
      title: "PASSO A PASSO",
      icon: "↻",
      description: "Técnica correta de escovação para máxima eficácia.",
      tips: [
        "Faça movimentos circulares com a escova levemente inclinada em direção à gengiva para que as cerdas da escova possam entrar em todos os dentes",
        "Não esqueça da parte interna dos dentes e das superfícies de mastigação, todas as faces dos dentes devem ser escovadas",
        "Escove a língua fazendo movimentos de vassoura com a escova de dentes ou utilize um raspador de língua"
      ]
    },
    {
      number: "4",
      title: "ENXAGUANTE BUCAL NÃO SUBSTITUI A ESCOVAÇÃO!",
      icon: "🚫",
      description: "O enxaguante bucal não remove a placa bacteriana nem os restos de alimentos acumulados nos dentes. Esses resíduos só são removidos com o uso da escova de dentes e do fio dental.",
      tips: []
    },
    {
      number: "5",
      title: "PARA QUE SERVE O ENXAGUANTE?",
      icon: "💧",
      description: "Benefícios do enxaguante bucal quando usado corretamente.",
      tips: [
        "Reduz temporariamente a carga bacteriana na boca",
        "Refresca o hálito",
        "Pode conter flúor ajudando na prevenção de cáries"
      ]
    }
  ];

  return (
    <section id="guide" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-educational-blue rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-educational-text">
              Guia Prático de Higiene Oral
            </h2>
          </div>
          <p className="text-lg text-educational-text/80 max-w-2xl mx-auto">
            O essencial para um sorriso saudável!
          </p>
          <div className="w-20 h-1 bg-educational-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-educational-green/20 hover:border-educational-green/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-educational-green/10 to-educational-blue/10">
                <CardTitle className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-educational-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{step.icon}</span>
                    <span className="text-lg md:text-xl text-educational-text">{step.title}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-educational-text/80 mb-4 font-medium">
                  {step.description}
                </p>
                {step.tips.length > 0 && (
                  <ul className="space-y-3">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-educational-green mt-0.5 flex-shrink-0" />
                        <span className="text-educational-text/80 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-educational-green/10 to-educational-blue/10 border-2 border-educational-green/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-educational-green" />
                <h3 className="text-2xl font-bold text-educational-text">Lembre-se!</h3>
              </div>
              <p className="text-educational-text/80 text-lg">
                A prevenção é sempre o melhor tratamento. Mantenha uma rotina de higiene oral consistente e visite regularmente um profissional de odontologia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HygieneGuideSection;