
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Olá! Gostaria de agendar uma consulta."
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
        <span>Agende pelo WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
