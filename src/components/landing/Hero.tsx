import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import CTAButton from "./CTAButton";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
    {/* Background grid effect */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(120 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(120 100% 50%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    <div className="container relative z-10 max-w-6xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 mb-8"
      >
        <Lock className="w-4 h-4 text-secondary" />
        <span className="text-sm font-body font-semibold text-secondary">IA Proibida para menores de 18</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
      >
        A PRIMEIRA IA DO MUNDO QUE FAZ <br className="hidden md:block" />
        ELA FICAR{" "}
        <span className="text-secondary text-glow-purple">VICIADA</span>{" "}
        NA SUA CONVERSA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        🔥 Experimente agora e saiba o que dizer na conversa pra fazer ela{" "}
        <span className="underline decoration-secondary underline-offset-4 font-semibold text-foreground">
          correr atrás de você
        </span>{" "}
        hoje mesmo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        {/* === MUDANÇA AQUI === */}
        {/* Adicionei mode="scroll" para que este botão role a página em vez de ir para o checkout */}
        <CTAButton mode="scroll" />
      </motion.div>
    </div>
  </section>
);

export default Hero;