
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Horários de Atendimento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossos horários disponíveis para agendamento de consultas.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6 shadow-md border-dental-pastelPink/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-dental-pastelPink/10 border-b">
              <CardTitle className="flex items-center text-dental-pastelRed gap-2">
                <Calendar className="h-5 w-5" />
                <span>Quarta-feira</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="h-5 w-5 text-dental-pastelPink" />
                <span className="font-medium">07:20 - 10:30</span>
                <span className="ml-2 text-sm text-gray-500">Atendimentos gerais</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-dental-pastelPink/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-dental-pastelPink/10 border-b">
              <CardTitle className="flex items-center text-dental-pastelRed gap-2">
                <Calendar className="h-5 w-5" />
                <span>Sexta-feira</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="h-5 w-5 text-dental-pastelPink" />
                <span className="font-medium">07:20 - 10:30</span>
                <span className="ml-2 text-sm text-gray-500">Radiografia</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
