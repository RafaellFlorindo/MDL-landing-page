import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Copy, Bot, RefreshCw, Send, CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// Respostas simuladas para cada tom
const RESPONSES = {
  // O Segura não é ser "amiguinho", é mostrar observação sem babar ovo.
  segura: "Deve tá pagando os pecados do fim de semana, mas respeitei o foco",

  // Ousada tem que ter "push-pull". Tu elogia e tira logo em seguida. Isso buga a mente.
  ousada: "Tô na dúvida se foi treino de verdade ou só pra biscoitar no story kkkk 👀",

  // Engraçada não é ser palhaço de circo, é ter "cocky comedy" (arrogância engraçada).
  engracada: "Ia te chamar pra comer, mas vendo esse story minha consciência pesou kkkk"
};

const AgentPreview = () => {
  const [step, setStep] = useState<"input" | "thinking" | "result">("input");
  const [selectedTone, setSelectedTone] = useState<keyof typeof RESPONSES | null>(null);
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  
  // Referência para o container que tem scroll (o corpo do chat)
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Função ajustada: Rola APENAS o container do chat, não a página inteira
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      // Só rola se tiver conteúdo escondido
      if (scrollHeight > clientHeight) {
        chatContainerRef.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [step, typedText]); // Executa quando muda o passo ou digita texto

  // Lógica de Digitação (Typewriter Effect)
  useEffect(() => {
    if (step === "result" && selectedTone) {
      const fullText = RESPONSES[selectedTone];
      setTypedText("");
      let i = 0;
      
      const interval = setInterval(() => {
        i++;
        setTypedText(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 30); // Velocidade da digitação

      return () => clearInterval(interval);
    }
  }, [step, selectedTone]);

  const handleToneSelect = (tone: keyof typeof RESPONSES) => {
    setSelectedTone(tone);
    setStep("thinking");
    
    // Simula tempo de processamento da IA
    setTimeout(() => {
      setStep("result");
    }, 1500);
  };

  const handleReset = () => {
    setStep("input");
    setSelectedTone(null);
    setTypedText("");
    setCopied(false);
  };

  const handleCopy = () => {
    if (selectedTone) {
      navigator.clipboard.writeText(RESPONSES[selectedTone]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 px-4 overflow-hidden">
      {/* ADICIONEI ESTE BLOCO DE ESTILO PARA ESCONDER O SCROLLBAR */}
      <style>
        {`
          /* Esconde scrollbar no Chrome, Safari e Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Esconde scrollbar no IE, Edge e Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      <ScrollReveal>
        <div className="container max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Teste o <span className="text-secondary text-glow-purple">Poder da IA</span> Agora
            </h2>
            <p className="text-muted-foreground text-lg">
              Veja como o Mestre da Lábia transforma uma situação comum em um encontro garantido.
            </p>
          </div>

          {/* Phone Frame Container */}
          <div className="relative w-full max-w-[400px]">
            {/* Borda Externa do Celular */}
            <div className="rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-950 shadow-2xl overflow-hidden relative h-[650px] flex flex-col">
              
              {/* Header do Chat */}
              <div className="bg-zinc-900/90 backdrop-blur-md p-4 flex items-center gap-3 border-b border-white/5 z-10 sticky top-0">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
                    {/* FOTO DO PERFIL */}
                    <img src="/mdl.png" alt="Mestre da Lábia" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Mestre da Lábia</h3>
                  <p className="text-xs text-green-400 font-medium">
                    Online Agora
                  </p>
                </div>
              </div>

              {/* Corpo do Chat com REF para controle de scroll interno */}
              <div 
                ref={chatContainerRef}
                // ADICIONEI A CLASSE 'no-scrollbar' AQUI
                className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar bg-zinc-950"
              >
                
                {/* Mensagem do Usuário (Simulada) */}
                <div className="flex justify-end">
                  <div className="bg-zinc-800/80 text-zinc-200 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm shadow-md border border-white/5">
                    <p className="font-medium text-[10px] uppercase tracking-wider text-zinc-500 mb-2 border-b border-white/5 pb-1">Contexto</p>
                    <p className="leading-relaxed">"Quero responder o story dela. É uma foto na academia. Nunca nos falamos, mas tenho interesse."</p>
                  </div>
                </div>

                {/* Resposta da IA (Diagnóstico) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#111] border border-white/10 text-white rounded-2xl rounded-tl-sm px-4 py-4 max-w-[95%] text-sm shadow-xl relative overflow-hidden group">
                    {/* Efeito de brilho roxo sutil */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-600/50" />
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="w-4 h-4 text-purple-500" />
                      <span className="font-bold text-xs uppercase tracking-wider text-purple-500">Análise</span>
                    </div>
                    
                    <p className="mb-3 text-zinc-300 leading-relaxed">
                      Como vocês nunca conversaram, o objetivo é <span className="text-white font-bold bg-purple-500/10 px-1 rounded">quebrar o gelo sem parecer emocionado.</span>
                    </p>
                    <p className="text-zinc-400 text-xs">
                      Escolha como você quer abordar:
                    </p>
                  </div>
                </motion.div>

                {/* Thinking State */}
                <AnimatePresence>
                  {step === "thinking" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex justify-start"
                    >
                      <div className="bg-zinc-900 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                        <span className="text-xs text-zinc-400">Criando estratégia...</span>
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Resposta Final Gerada */}
                {step === "result" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start w-full"
                  >
                    <div className="w-full bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/30 rounded-2xl rounded-tl-sm p-4 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3 h-3 text-green-400" />
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Sugestão Perfeita</span>
                      </div>
                      <p className="text-sm text-green-50 font-medium leading-relaxed">
                        {typedText}
                        <span className="animate-pulse ml-0.5 text-green-400">|</span>
                      </p>
                      
                      {/* Ações da Resposta */}
                      {typedText.length >= (RESPONSES[selectedTone!]?.length || 0) && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-3 mt-4 pt-3 border-t border-green-500/20"
                        >
                          <button 
                            onClick={handleCopy}
                            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg hover:shadow-green-500/20 active:scale-95"
                          >
                            {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied ? "COPIADO" : "COPIAR RESPOSTA"}
                          </button>
                          <button 
                            onClick={handleReset}
                            className="p-2.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/10"
                            title="Tentar outro tom"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
                
              </div>

              {/* Área de Input / Botões de Seleção */}
              <div className="p-4 bg-zinc-900 border-t border-white/5 z-20 min-h-[140px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {step === "input" ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="grid grid-cols-3 gap-2 w-full"
                    >
                      <button
                        onClick={() => handleToneSelect("segura")}
                        className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 rounded-xl transition-all active:scale-95 group h-24"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform drop-shadow-lg">🛡️</span>
                        <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-wide">Segura</span>
                      </button>
                      
                      <button
                        onClick={() => handleToneSelect("ousada")}
                        className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-red-500/30 rounded-xl transition-all active:scale-95 group h-24"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform drop-shadow-lg">🔥</span>
                        <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-wide">Ousada</span>
                      </button>

                      <button
                        onClick={() => handleToneSelect("engracada")}
                        className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-yellow-500/30 rounded-xl transition-all active:scale-95 group h-24"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform drop-shadow-lg">😂</span>
                        <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-wide">Engraçada</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full flex items-center gap-3 text-zinc-500"
                    >
                      <div className="flex-1 h-12 bg-zinc-800/50 rounded-full flex items-center px-5 border border-white/5">
                        <span className="text-sm text-zinc-500 animate-pulse">Aguardando resposta da IA...</span>
                      </div>
                      <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                        <Send className="w-5 h-5 text-purple-500 opacity-50" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
            </div>
            
            {/* Decoração de fundo do celular */}
            <div className="absolute -z-10 inset-0 bg-purple-600/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default AgentPreview;