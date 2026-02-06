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

    <div className="container relative z-10 max-w-4xl text-center">
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
        className="text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-6"
      >
        A 1ª IA DO MUNDO QUE FAZ ELA FICAR{" "}
        <span className="text-secondary text-glow-purple">VICIADA</span>{" "}
        NA SUA CONVERSA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Pare de ser o "amiguinho" que leva vácuo. Copie e cole as respostas do
        Mestre da Lábia e veja ela implorando para te ver hoje à noite.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <CTAButton />
      </motion.div>
    </div>
  </section>
);

export default Hero;
