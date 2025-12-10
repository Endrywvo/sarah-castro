import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, X, Send, Sparkles } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

const dentalTips = [
  "🦷 Escove os dentes por pelo menos 2 minutos, 3 vezes ao dia - ao acordar, após as refeições e antes de dormir.",
  "🪥 Use escova de cerdas macias e troque a cada 3 meses ou quando as cerdas estiverem desgastadas.",
  "✨ Use sempre pasta de dente com flúor - é fundamental para prevenir cáries!",
  "🧵 O fio dental deve ser usado diariamente, passando entre a gengiva e os dentes, não apenas entre os dentes.",
  "💧 Beba bastante água! Ela ajuda a limpar os resíduos da boca e estimula a produção de saliva.",
  "🍎 Alimentos como maçã, cenoura e aipo ajudam na limpeza natural dos dentes.",
  "🥛 Laticínios são ricos em cálcio e fósforo, essenciais para dentes fortes.",
  "🚫 Evite alimentos muito açucarados e bebidas ácidas que podem danificar o esmalte.",
  "⚠️ O enxaguante bucal NÃO substitui a escovação - ele apenas complementa a higiene.",
  "👩‍⚕️ Visite o dentista a cada 6 meses para check-ups e limpeza profissional.",
  "🌙 Nunca durma sem escovar os dentes! Durante a noite, as bactérias se multiplicam.",
  "👅 Não esqueça de limpar a língua - ela acumula bactérias que causam mau hálito.",
  "⏰ Use 40cm de fio dental (tamanho do antebraço) para uma limpeza eficaz.",
  "🔄 Faça movimentos circulares com a escova, inclinada em direção à gengiva.",
  "🍬 Se comer doces, escove os dentes em seguida ou enxágue a boca com água."
];

const initialBotMessages = [
  "Olá! 👋 Sou o assistente de higiene bucal da Sarah Castro. Como posso te ajudar hoje?",
  "Posso dar dicas de higiene oral, informações sobre horários e agendamentos. Digite 'dica' para receber uma dica especial! ✨",
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initialBotMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: msg, isBot: true }]);
        }, 600 * (index + 1));
      });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getRandomTip = () => {
    return dentalTips[Math.floor(Math.random() * dentalTips.length)];
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Desculpe, não entendi. Tente perguntar sobre: higiene bucal, escovação, fio dental, dicas ou horários de atendimento. 😊";

      const userMessage = inputText.toLowerCase();
      
      if (userMessage.includes("dica") || userMessage.includes("conselho") || userMessage.includes("sugestão")) {
        botResponse = getRandomTip();
      } else if (userMessage.includes("horário") || userMessage.includes("atendimento") || userMessage.includes("funciona")) {
        botResponse = "🕐 Horários de atendimento:\n\n• Quartas-feiras: 7:20 às 10:30 (atendimentos gerais)\n• Sextas-feiras: 7:20 às 10:30 (radiografias)\n\nO atendimento é realizado na clínica-escola da Unichristus!";
      } else if (userMessage.includes("consulta") || userMessage.includes("agendar") || userMessage.includes("marcar")) {
        botResponse = "📅 Para agendar uma consulta, entre em contato pelo WhatsApp! A Sarah atende de forma supervisionada na clínica-escola da Unichristus. Será um prazer atendê-lo!";
      } else if (userMessage.includes("fio dental") || userMessage.includes("fio")) {
        botResponse = "🧵 Dicas de fio dental:\n\n• Use 40cm de fio (tamanho do antebraço)\n• Passe entre a gengiva e os dentes, não apenas entre os dentes\n• Faça movimentos de vai e vem suaves\n• Use diariamente, preferencialmente à noite\n• O fio limpa onde a escova não alcança!";
      } else if (userMessage.includes("escovar") || userMessage.includes("escovação") || userMessage.includes("escova")) {
        botResponse = "🪥 Escovação correta:\n\n• Escove por 2 minutos, 3x ao dia\n• Use escova de cerdas macias\n• Movimentos circulares, escova inclinada à gengiva\n• Escove todas as faces dos dentes\n• Troque a escova a cada 3 meses\n• Não esqueça de limpar a língua!";
      } else if (userMessage.includes("pasta") || userMessage.includes("flúor") || userMessage.includes("creme")) {
        botResponse = "✨ Sobre a pasta de dente:\n\n• Sempre use pasta COM FLÚOR\n• O flúor é essencial para prevenir cáries\n• Use quantidade do tamanho de uma ervilha\n• Para crianças, use pasta específica infantil\n• Não engula a pasta, cuspa após escovar!";
      } else if (userMessage.includes("enxaguante") || userMessage.includes("bochechar") || userMessage.includes("antisséptico")) {
        botResponse = "⚠️ Importante sobre enxaguante:\n\n• NÃO substitui escovação nem fio dental!\n• Apenas complementa a higiene\n• Reduz temporariamente bactérias\n• Refresca o hálito\n• Alguns contêm flúor para proteção extra\n• Use após a escovação completa.";
      } else if (userMessage.includes("sarah") || userMessage.includes("quem")) {
        botResponse = "👩‍⚕️ Sarah Castro é estudante de odontologia da Unichristus. Ela atende pacientes de forma supervisionada e tem como missão transmitir conhecimento sobre autocuidado e higiene oral através de orientações educativas!";
      } else if (userMessage.includes("cárie") || userMessage.includes("caries") || userMessage.includes("dor")) {
        botResponse = "🦷 Prevenção de cáries:\n\n• Escove os dentes após cada refeição\n• Use fio dental diariamente\n• Evite açúcar em excesso\n• Visite o dentista regularmente\n• Pasta com flúor é essencial\n\nSe sentir dor, procure um dentista o mais rápido possível!";
      } else if (userMessage.includes("mau hálito") || userMessage.includes("halitose") || userMessage.includes("hálito")) {
        botResponse = "💨 Combater mau hálito:\n\n• Escove a língua sempre\n• Use fio dental (restos de comida causam odor)\n• Beba água regularmente\n• Evite ficar muito tempo sem comer\n• Se persistir, consulte um dentista\n• Pode indicar problemas bucais ou digestivos.";
      } else if (userMessage.includes("alimentação") || userMessage.includes("comida") || userMessage.includes("alimento") || userMessage.includes("comer")) {
        botResponse = "🥗 Alimentação para dentes saudáveis:\n\n✅ Bom: leite, queijo, iogurte, vegetais, frutas fibrosas (maçã, cenoura)\n\n❌ Evitar: doces em excesso, refrigerantes, bebidas ácidas, fast-food\n\n💡 Quanto mais colorido o prato, mais nutrientes!";
      } else if (userMessage.includes("obrigad") || userMessage.includes("valeu") || userMessage.includes("agradeço")) {
        botResponse = "De nada! 😊 Fico feliz em ajudar! Lembre-se: a prevenção é o melhor remédio. Cuide bem dos seus dentes! Se tiver mais dúvidas, é só perguntar! 🦷✨";
      } else if (userMessage.includes("olá") || userMessage.includes("oi") || userMessage.includes("hey") || userMessage.includes("bom dia") || userMessage.includes("boa tarde") || userMessage.includes("boa noite")) {
        botResponse = "Olá! 😊 Que bom te ver por aqui! Posso te ajudar com:\n\n• Dicas de higiene bucal\n• Informações sobre escovação\n• Como usar fio dental\n• Horários de atendimento\n\nDigite 'dica' para receber uma dica especial!";
      } else if (userMessage.includes("gengiva") || userMessage.includes("sangr")) {
        botResponse = "🩸 Sobre gengivas:\n\n• Sangramento pode indicar gengivite\n• Escove suavemente, mas não evite a área\n• Use fio dental com cuidado\n• Melhore a higiene bucal\n• Se persistir, consulte um dentista\n\nGengivas saudáveis são rosas e firmes!";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1200);
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
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-primary hover:bg-primary/90 flex items-center justify-center shadow-xl hover-lift z-40 pulse-soft"
        aria-label="Abrir chat"
      >
        <Bot size={28} className="text-primary-foreground" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 h-[28rem] shadow-2xl flex flex-col overflow-hidden z-50 border-2 border-primary/20 scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/20 p-2 rounded-full">
                <Sparkles size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold">Assistente Bucal</h3>
                <p className="text-primary-foreground/80 text-xs">Dicas de higiene oral</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 p-2 h-auto rounded-full transition-all"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-accent/50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 chat-bubble ${
                  message.isBot 
                    ? "bg-card border border-border shadow-sm" 
                    : "bg-primary text-primary-foreground ml-auto"
                } rounded-2xl p-3 max-w-[85%] ${message.isBot ? "mr-auto rounded-bl-sm" : "ml-auto rounded-br-sm"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="mb-3 bg-card border border-border rounded-2xl rounded-bl-sm p-3 max-w-[85%] mr-auto chat-bubble">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pergunte sobre higiene bucal..."
                className="flex-1 rounded-full border-primary/30 focus:border-primary"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-10 h-10 p-0 transition-all hover:scale-105"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
