import { Camera, Upload, Cpu, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Camera, title: "Print a Conversa", desc: "Tire um screenshot da conversa que travou." },
  { icon: Upload, title: "Envie pro Mestre", desc: "Cole o print na IA do Mestre da Lábia." },
  { icon: Cpu, title: "Receba o Script", desc: "A IA gera a resposta perfeita em segundos." },
  { icon: Trophy, title: "Conquiste", desc: "Copie, cole e veja a mágica acontecer." },
];

const HowItWorks = () => (
  <section className="py-20 px-4">
    <ScrollReveal>
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-4">COMO FUNCIONA</h2>
        <p className="text-muted-foreground font-body mb-14">4 passos para nunca mais levar vácuo</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="glass rounded-2xl p-6 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-xs font-body text-muted-foreground">Passo {i + 1}</span>
              <h3 className="text-base">{step.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default HowItWorks;
