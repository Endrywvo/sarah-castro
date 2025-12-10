import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, X, Send, Sparkles } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

// Base de conhecimento expandida sobre saúde bucal
const knowledgeBase = {
  escovacao: {
    keywords: ["escovar", "escovação", "escova", "escovas", "escovando"],
    response: "🪥 **Escovação Correta:**\n\n• Escove por **2-3 minutos**, 3x ao dia\n• Use escova de **cerdas macias**\n• Faça **movimentos circulares** suaves\n• Incline a escova 45° em direção à gengiva\n• Escove todas as faces: externa, interna e mastigação\n• **Troque a escova** a cada 3 meses\n• Não aplique força excessiva!"
  },
  fioDental: {
    keywords: ["fio dental", "fio", "dental", "interdental", "limpeza entre"],
    response: "🧵 **Uso Correto do Fio Dental:**\n\n• Use **40cm** de fio (tamanho do antebraço)\n• Enrole nas pontas dos dedos médios\n• Deslize suavemente entre os dentes\n• Forme um **'C'** ao redor de cada dente\n• Passe pela **linha da gengiva** gentilmente\n• Use uma parte limpa para cada dente\n• Faça **1x ao dia**, preferencialmente à noite"
  },
  pasta: {
    keywords: ["pasta", "creme dental", "flúor", "fluoreto", "dentifrício"],
    response: "✨ **Pasta de Dente Ideal:**\n\n• Sempre escolha pasta com **flúor** (1000-1500 ppm)\n• Use quantidade do **tamanho de uma ervilha**\n• Para crianças até 3 anos: grão de arroz\n• **Não engula** - cuspa após escovar\n• Evite enxaguar muito após escovar\n• O flúor fortalece o esmalte e previne cáries"
  },
  enxaguante: {
    keywords: ["enxaguante", "bochechar", "antisséptico", "colutório", "bochecho"],
    response: "💧 **Enxaguante Bucal:**\n\n⚠️ **NÃO substitui** escovação nem fio dental!\n\n• Use como **complemento** da higiene\n• Bocheche por **30 segundos**\n• Não coma/beba por 30 min após\n• Prefira os **sem álcool**\n• Com flúor oferece proteção extra\n• Ideal para áreas de difícil acesso"
  },
  carie: {
    keywords: ["cárie", "caries", "cavidade", "buraco", "dente furado", "dente estragado"],
    response: "🦷 **Prevenção de Cáries:**\n\n**O que causa:**\n• Bactérias + açúcar = ácido que destrói o esmalte\n\n**Como prevenir:**\n• Escove após cada refeição\n• Use fio dental diariamente\n• Reduza açúcar e carboidratos refinados\n• Pasta com flúor é essencial\n• Visite o dentista regularmente\n• Beba água com frequência"
  },
  gengiva: {
    keywords: ["gengiva", "gengivas", "sangramento", "sangra", "gengivite", "periodontite", "inflamação"],
    response: "🩸 **Saúde da Gengiva:**\n\n**Sinais de alerta:**\n• Sangramento ao escovar\n• Vermelhidão ou inchaço\n• Retração gengival\n• Mau hálito persistente\n\n**O que fazer:**\n• **Não pare** de escovar a área\n• Escove suavemente com cerdas macias\n• Use fio dental com cuidado\n• Melhore a técnica de higiene\n• Gengivas saudáveis são **rosas e firmes**"
  },
  halito: {
    keywords: ["hálito", "halitose", "mau cheiro", "bafo", "cheiro ruim"],
    response: "💨 **Combate ao Mau Hálito:**\n\n**Causas comuns:**\n• Higiene bucal inadequada\n• Língua suja\n• Boca seca\n• Restos de comida\n\n**Soluções:**\n• **Limpe a língua** sempre (90% das bactérias)\n• Use fio dental diariamente\n• Beba água regularmente\n• Evite ficar muito tempo em jejum\n• Consulte dentista se persistir"
  },
  lingua: {
    keywords: ["língua", "limpar língua", "raspador", "saburra"],
    response: "👅 **Limpeza da Língua:**\n\n• A língua acumula **90% das bactérias** da boca\n• Use **raspador de língua** ou a própria escova\n• Limpe de trás para frente\n• Faça movimentos suaves\n• Limpe **toda vez** que escovar os dentes\n• Reduz mau hálito significativamente\n• A língua saudável é rosa e lisa"
  },
  alimentacao: {
    keywords: ["alimentação", "comida", "alimento", "comer", "dieta", "nutrição", "açúcar"],
    response: "🥗 **Alimentação para Dentes Saudáveis:**\n\n✅ **Bons para os dentes:**\n• Queijo, leite, iogurte (cálcio)\n• Maçã, cenoura, aipo (limpeza natural)\n• Água (hidratação e limpeza)\n• Verduras verde-escuras\n\n❌ **Evitar/moderar:**\n• Açúcar e doces\n• Refrigerantes e sucos ácidos\n• Carboidratos refinados\n• Frutas cítricas em excesso"
  },
  sensibilidade: {
    keywords: ["sensibilidade", "sensível", "dói", "gelado", "quente", "doer"],
    response: "❄️ **Sensibilidade Dentária:**\n\n**Causas:**\n• Retração gengival\n• Esmalte desgastado\n• Escovação agressiva\n• Clareamento recente\n\n**Cuidados:**\n• Use pasta para **dentes sensíveis**\n• Escova de cerdas **extra macias**\n• Evite alimentos muito ácidos\n• Não escove com força\n• Consulte um dentista para diagnóstico"
  },
  clareamento: {
    keywords: ["clareamento", "clarear", "branquear", "branco", "amarelo", "manchas"],
    response: "✨ **Clareamento Dental:**\n\n**Tipos:**\n• Profissional (consultório) - mais seguro\n• Caseiro supervisionado\n• Pastas clareadoras (efeito leve)\n\n**Cuidados:**\n• Faça sempre com **orientação profissional**\n• Pode causar sensibilidade temporária\n• Evite alimentos pigmentados após\n• Resultados variam por pessoa\n• Mantenha boa higiene para durar"
  },
  crianca: {
    keywords: ["criança", "bebê", "infantil", "filho", "filha", "dente de leite"],
    response: "👶 **Saúde Bucal Infantil:**\n\n**Bebês:**\n• Limpe a gengiva com gaze úmida\n• Primeiro dente = primeira visita ao dentista\n\n**Crianças:**\n• Supervisione a escovação até 7-8 anos\n• Use pasta infantil com flúor adequado\n• Quantidade: grão de arroz até 3 anos\n• Ensine técnica correta desde cedo\n• Dentes de leite também precisam de cuidado!"
  },
  bruxismo: {
    keywords: ["bruxismo", "ranger", "apertar", "dentes apertados", "morder"],
    response: "😬 **Bruxismo (Ranger os Dentes):**\n\n**Sintomas:**\n• Dor na mandíbula ao acordar\n• Dentes desgastados\n• Dor de cabeça frequente\n• Sensibilidade aumentada\n\n**O que fazer:**\n• Consulte um dentista\n• Pode precisar de **placa de bruxismo**\n• Reduza estresse\n• Evite mascar chicletes\n• Relaxe a mandíbula durante o dia"
  },
  afta: {
    keywords: ["afta", "aftas", "ferida", "úlcera", "machucado boca"],
    response: "🔴 **Aftas (Úlceras Bucais):**\n\n**Causas comuns:**\n• Estresse e ansiedade\n• Baixa imunidade\n• Deficiência de vitaminas\n• Trauma local\n\n**Alívio:**\n• Geralmente cicatrizam em 7-14 dias\n• Evite alimentos ácidos/condimentados\n• Bochechos com água e sal\n• Gel anestésico para dor\n• Se não melhorar, consulte um profissional"
  },
  aparelho: {
    keywords: ["aparelho", "ortodontia", "brackets", "alinhador", "dentes tortos"],
    response: "⚙️ **Cuidados com Aparelho Ortodôntico:**\n\n**Higiene:**\n• Escove após **toda refeição**\n• Use escova interdental\n• Fio dental com passa-fio\n• Enxaguante pode ajudar\n\n**Alimentação:**\n• Evite alimentos duros e pegajosos\n• Corte frutas em pedaços\n• Cuidado com pipoca e nozes\n\n**Consultas regulares** são essenciais!"
  },
  implante: {
    keywords: ["implante", "prótese", "dentadura", "dente artificial"],
    response: "🔩 **Implantes e Próteses:**\n\n**Implantes:**\n• Substitui raiz do dente perdido\n• Processo leva alguns meses\n• Requer boa saúde óssea\n• Higiene é fundamental\n\n**Cuidados:**\n• Escove normalmente ao redor\n• Use escova interdental\n• Visite o dentista regularmente\n• Evite fumar"
  },
  emergencia: {
    keywords: ["emergência", "urgente", "quebrou", "caiu", "trauma", "bateu", "acidente"],
    response: "🚨 **Emergências Dentárias:**\n\n**Dente quebrado/lascado:**\n• Guarde o fragmento em leite\n• Procure dentista imediatamente\n\n**Dente avulsionado (caiu):**\n• Segure pela coroa, não pela raiz\n• Lave suavemente, não esfregue\n• Tente reposicionar ou guarde em leite\n• **Procure dentista em até 1 hora**\n\n**Dor intensa:** busque atendimento profissional"
  },
  prevencao: {
    keywords: ["prevenção", "prevenir", "evitar", "cuidar", "manter", "rotina"],
    response: "🛡️ **Prevenção - Rotina Ideal:**\n\n**Diariamente:**\n• Escove 3x ao dia por 2-3 min\n• Use fio dental 1x ao dia\n• Limpe a língua\n• Beba água\n\n**Periodicamente:**\n• Visite o dentista a cada **6 meses**\n• Limpeza profissional\n• Avaliação preventiva\n\n**Lembre-se:** Prevenir é muito mais fácil e barato que tratar!"
  }
};

// Dicas aleatórias para quando não há match específico
const randomTips = [
  "💡 Você sabia? A saliva é uma proteção natural dos dentes! Beba água para mantê-la fluindo.",
  "💡 Dica: Espere 30 minutos após refeições ácidas para escovar - o ácido amolece o esmalte temporariamente.",
  "💡 Importante: A escova elétrica pode ser mais eficiente que a manual se usada corretamente.",
  "💡 Curiosidade: O esmalte dentário é o tecido mais duro do corpo humano!",
  "💡 Sabia que mastigar chiclete sem açúcar após refeições estimula a saliva e ajuda na limpeza?",
  "💡 Os dentes começam a se formar ainda na gestação! Nutrição da mãe afeta a saúde bucal do bebê.",
  "💡 Dormir de boca aberta resseca a boca e aumenta o risco de cáries e mau hálito.",
  "💡 Evite escovar os dentes horizontalmente - movimentos circulares são mais eficazes!",
  "💡 O consumo frequente de açúcar é pior que a quantidade total consumida.",
  "💡 Água é a melhor bebida para os dentes - sem açúcar e ajuda a limpar a boca!"
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        "Olá! 👋 Sou o assistente de saúde bucal!",
        "Posso te ajudar com informações sobre:\n\n• Escovação correta\n• Uso do fio dental\n• Prevenção de cáries\n• Cuidados com a gengiva\n• Alimentação saudável\n• E muito mais!\n\nDigite sua dúvida ou peça uma **dica**! 🦷"
      ];
      
      initialMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: msg, isBot: true }]);
        }, 500 * (index + 1));
      });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findBestMatch = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos para matching

    // Verifica saudações
    if (/^(oi|olá|ola|hey|bom dia|boa tarde|boa noite|e ai|eai|hello|hi)/.test(normalizedMessage)) {
      return "Olá! 😊 Como posso ajudar com sua saúde bucal hoje?\n\nVocê pode perguntar sobre:\n• Escovação\n• Fio dental\n• Cáries\n• Gengiva\n• Alimentação\n• E muito mais!";
    }

    // Verifica agradecimentos
    if (/obrigad|valeu|agradeç|thanks|obg/.test(normalizedMessage)) {
      return "Por nada! 😊 Fico feliz em ajudar!\n\nLembre-se: **prevenção é o melhor remédio**. Cuide bem dos seus dentes!\n\nSe tiver mais dúvidas, é só perguntar! 🦷✨";
    }

    // Verifica pedido de dica
    if (/dica|conselho|sugestão|sugira|recomend/.test(normalizedMessage)) {
      return randomTips[Math.floor(Math.random() * randomTips.length)];
    }

    // Verifica perguntas sobre Sarah
    if (/sarah|quem (é|e) você|sobre voce|criador/.test(normalizedMessage)) {
      return "👩‍⚕️ Este assistente foi criado para o site da **Sarah Castro**, estudante de odontologia da Unichristus.\n\nO objetivo é **educar e informar** sobre saúde bucal, compartilhando conhecimento de forma acessível para todos! 🦷";
    }

    // Busca no knowledge base
    let bestMatch: string | null = null;
    let highestScore = 0;

    for (const [, data] of Object.entries(knowledgeBase)) {
      for (const keyword of data.keywords) {
        const normalizedKeyword = keyword.toLowerCase()
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (normalizedMessage.includes(normalizedKeyword)) {
          const score = normalizedKeyword.length;
          if (score > highestScore) {
            highestScore = score;
            bestMatch = data.response;
          }
        }
      }
    }

    if (bestMatch) {
      return bestMatch;
    }

    // Resposta padrão com sugestões
    return "Hmm, não encontrei informações específicas sobre isso. 🤔\n\n**Posso te ajudar com:**\n• Escovação e técnica correta\n• Uso do fio dental\n• Prevenção de cáries\n• Saúde da gengiva\n• Mau hálito\n• Alimentação\n• Sensibilidade\n• Clareamento\n• Cuidados infantis\n\nDigite uma dessas palavras-chave ou peça uma **dica**!";
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = findBestMatch(inputText);
      setIsTyping(false);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 800 + Math.random() * 600);
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
                <p className="text-primary-foreground/80 text-xs">Informações de saúde oral</p>
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
                placeholder="Pergunte sobre saúde bucal..."
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
