
import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Mail, Map, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dental-softBlue py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-dental-pastelRed mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-dental-pastelPink shrink-0" />
                <span>(85) 9999-9999</span>
              </p>
              <p className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-dental-pastelPink shrink-0" />
                <span>contato@clinicaunicrhistos.com.br</span>
              </p>
              <p className="flex items-start">
                <Map className="mr-2 h-5 w-5 text-dental-pastelPink shrink-0" />
                <span>Av. Principal, 1000, Bairro Universitário, Fortaleza - CE</span>
              </p>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold text-dental-pastelRed mb-4">Horário</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-between">
                <span className="font-medium">Segunda - Sexta:</span>
                <span>08:00 - 18:00</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="font-medium">Sábado:</span>
                <span>08:00 - 12:00</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="font-medium">Domingo:</span>
                <span>Fechado</span>
              </p>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-dental-pastelRed mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-dental-pastelRed transition">Início</a>
              </li>
              <li>
                <a href="#services" className="hover:text-dental-pastelRed transition">Serviços</a>
              </li>
              <li>
                <a href="#about" className="hover:text-dental-pastelRed transition">Sobre</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-dental-pastelRed mb-4">Agende sua Consulta</h3>
            <p className="mb-4">Entre em contato pelo WhatsApp para agendar sua consulta ou tirar dúvidas.</p>
            <WhatsAppButton phoneNumber="5585999999999" />
          </div>
        </div>
        
        <div className="border-t border-gray-300/30 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} Clínica Odontológica UniCrhistos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
