import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, X } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

const initialBotMessages = [
  "Olá! Sou o assistente virtual da Clínica Odontológica UniCrhistos. Como posso te ajudar hoje?",
  "Posso te ajudar com: horários de atendimento, serviços disponíveis, marcar consulta, valores ou outras informações.",
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When chat window is opened, add initial bot message
    if (isOpen && messages.length === 0) {
      initialBotMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: msg, isBot: true }]);
        }, 500 * (index + 1));
      });
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom of chat whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    setInputText("");

    // Simulate bot response based on keywords
    setTimeout(() => {
      let botResponse = "Desculpe, não entendi sua pergunta. Pode reformular?";

      const userMessage = inputText.toLowerCase();
      
      if (userMessage.includes("horário") || userMessage.includes("atendimento")) {
        botResponse = "Nosso horário de atendimento é nas quartas-feiras das 7:20 às 10:30 para atendimentos gerais, e nas sextas-feiras no mesmo horário para radiografias. A Radiografia 1 está disponível às sextas-feiras.";
      } else if (userMessage.includes("consulta") || userMessage.includes("agendar") || userMessage.includes("marcar")) {
        botResponse = "Para agendar uma consulta, você pode nos ligar no (85) 8793-7718 ou clicar no botão do WhatsApp abaixo do site para falar diretamente com nossa equipe.";
      } else if (userMessage.includes("preço") || userMessage.includes("valor") || userMessage.includes("custo")) {
        botResponse = "Os valores variam de acordo com o procedimento. Como somos uma clínica-escola, nossos preços são mais acessíveis. Entre em contato para um orçamento personalizado.";
      } else if (userMessage.includes("serviços") || userMessage.includes("procedimento") || userMessage.includes("tratamento")) {
        botResponse = "Oferecemos serviços como limpeza e profilaxia, tratamento de cáries, canal (endodontia), restaurações e extrações. Veja mais detalhes na seção de Serviços do nosso site.";
      } else if (userMessage.includes("endereço") || userMessage.includes("localização") || userMessage.includes("onde fica")) {
        botResponse = "Estamos localizados no campus da Faculdade UniCrhistus, na Av. Principal, 1000, Bairro Universitário.";
      } else if (userMessage.includes("quarta") || userMessage.includes("radiografia") || userMessage.includes("sexta")) {
        botResponse = "Atendimentos gerais ocorrem nas quartas-feiras das 7:20 às 10:30, e radiografias são realizadas nas sextas-feiras no mesmo horário. A Radiografia 1 está disponível às sextas-feiras.";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-dental-pastelPink hover:bg-dental-pastelRed flex items-center justify-center shadow-lg"
        aria-label="Abrir chat"
      >
        <Bot size={24} className="text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 w-80 md:w-96 h-96 shadow-xl flex flex-col overflow-hidden z-50 border-dental-pastelPink">
          {/* Chat Header */}
          <div className="bg-dental-pastelPink px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="text-white mr-2" />
              <h3 className="text-white font-medium">Assistente Dental</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-dental-pastelRed/20 p-1 h-auto"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 chat-bubble ${
                  message.isBot 
                    ? "bg-white border border-gray-200" 
                    : "bg-dental-pastelPink/20 ml-auto"
                } rounded-lg p-3 max-w-[80%] ${message.isBot ? "mr-auto" : "ml-auto"}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <Input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 mr-2"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-dental-pastelPink hover:bg-dental-pastelRed text-white"
              >
                Enviar
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
