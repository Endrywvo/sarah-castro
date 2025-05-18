
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nossa Clínica</h2>
            <p className="text-gray-600 mb-4">
              A Clínica Odontológica da Faculdade UniCrhistos oferece tratamentos de excelência aliando conhecimento acadêmico 
              e tecnologia de ponta. Nosso compromisso é proporcionar saúde bucal de qualidade com atendimento humanizado.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa equipe é formada por professores experientes e alunos em formação, sempre supervisionados para garantir 
              o melhor atendimento. Utilizamos materiais e técnicas modernas para garantir procedimentos seguros e eficazes.
            </p>
            <p className="text-gray-600">
              Localizada no campus da UniCrhistos, nossa clínica é equipada com consultórios modernos, equipamentos de última 
              geração e segue todos os protocolos de biossegurança.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
                    alt="Consultório odontológico"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                    alt="Equipe de profissionais"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Paciente sendo atendido"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1605564211913-69a3b110c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Equipamento odontológico"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
