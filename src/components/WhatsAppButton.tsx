
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = "558587937718",
  message = "Olá! Gostaria de agendar uma consulta.",
  children
}) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-2">
        <Phone />
        <span>{children || "Fale conosco no WhatsApp"}</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
