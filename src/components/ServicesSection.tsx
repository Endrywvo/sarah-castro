
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <Card className="service-card transition-all duration-300">
      <CardHeader>
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-dental-pastelPink/20 mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
        <CardTitle className="text-xl text-dental-pastelRed">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Limpeza e Profilaxia",
      description: "Procedimentos de limpeza profunda para remover tártaro e prevenir problemas bucais.",
      icon: "🦷"
    },
    {
      title: "Tratamento de Cáries",
      description: "Diagnóstico e tratamento de cáries para prevenir danos maiores aos dentes.",
      icon: "🔍"
    },
    {
      title: "Canal (Endodontia)",
      description: "Tratamento de canal para salvar dentes com infecção ou danos na polpa dental.",
      icon: "💉"
    },
    {
      title: "Restaurações",
      description: "Restaurações com materiais de alta durabilidade para dentes danificados.",
      icon: "🔧"
    },
    {
      title: "Extrações",
      description: "Extração de dentes comprometidos que não podem ser salvos por outros tratamentos.",
      icon: "🔄"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dental-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos procedimentos odontológicos focados no tratamento e na saúde bucal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
