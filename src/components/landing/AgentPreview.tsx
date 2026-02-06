import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Copy, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const girlMessage = "Oi, tudo bem?";
const aiResponse = "Tudo ótimo agora que você apareceu 😏 Mas confessa... você mandou mensagem porque tava pensando em mim ou porque tava entediada? Seja honesta 👀";

const AgentPreview = () => {
  const [phase, setPhase] = useState<"girl" | "thinking" | "response">("girl");
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("thinking"), 1500);
    const t2 = setTimeout(() => setPhase("response"), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase !== "response") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(aiResponse.slice(0, i));
      if (i >= aiResponse.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [phase]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4">
      <ScrollReveal>
        <div className="container max-w-lg mx-auto">
          {/* Phone frame */}
          <div className="rounded-[2rem] border-2 border-border bg-card p-2 shadow-2xl">
            {/* Notch */}
            <div className="flex justify-center pt-2 pb-4">
              <div className="w-28 h-5 rounded-full bg-background" />
            </div>

            {/* Chat header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-foreground">Mestre da Lábia IA</p>
                <p className="text-xs text-primary font-body">Online</p>
              </div>
            </div>

            {/* Chat body */}
            <div className="min-h-[280px] p-4 space-y-4">
              {/* Girl message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start"
              >
                <div className="glass-red rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[75%]">
                  <p className="text-sm font-body text-foreground">{girlMessage}</p>
                </div>
              </motion.div>

              {/* Thinking indicator */}
              {phase === "thinking" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center"
                >
                  <div className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-body text-muted-foreground">Mestre da Lábia IA is thinking</span>
                    <span className="flex gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot-3" />
                    </span>
                  </div>
                </motion.div>
              )}

              {/* AI Response */}
              {phase === "response" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-end"
                >
                  <div className="glass-green rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm font-body text-foreground">{typedText}<span className="animate-pulse">|</span></p>
                    {typedText.length === aiResponse.length && (
                      <button
                        onClick={handleCopy}
                        className="mt-2 flex items-center gap-1.5 text-xs font-body text-primary hover:text-primary/80 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        {copied ? "Copiado!" : "Copiar"}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <p className="text-center text-muted-foreground font-body text-sm mt-6">
            Transforme mensagens mortas em encontros reais em <span className="text-primary font-semibold">3 segundos</span>.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AgentPreview;
