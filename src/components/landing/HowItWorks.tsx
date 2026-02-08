import { Camera, Send, Sparkles, Copy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { 
    icon: Camera, 
    title: "Tire Print", 
    desc: "Da mensagem dela",
    number: "1",
    color: "bg-cyan-500", 
    iconColor: "text-white"
  },
  { 
    icon: Send, 
    title: "Envie pra IA", 
    desc: "No nosso sistema",
    number: "2",
    color: "bg-purple-100", 
    iconColor: "text-white"
  },
  { 
    icon: Sparkles, 
    title: "Receba a Resposta", 
    desc: "Texto matador gerado na hora",
    number: "3",
    color: "bg-emerald-500", 
    iconColor: "text-white"
  },
  { 
    icon: Copy, 
    title: "Copie e Cole", 
    desc: "E marque o encontro",
    number: "4",
    color: "bg-orange-500", 
    iconColor: "text-white"
  },
];

const HowItWorks = () => (
  <section className="py-24 px-4 bg-black text-white">
    <ScrollReveal>
      <div className="container max-w-6xl mx-auto text-center">
        
        {/* Título Principal */}
        <h2 className="text-3xl md:text-5xl font-black mb-20 uppercase leading-tight">
          É como ter um{' '}
          {/* ALTERAÇÃO AQUI: 
              1. Mudei para text-purple-400 (mais claro/vibrante)
              2. Adicionei drop-shadow com a cor roxa para criar o brilho neon
          */}
          <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
            coach de sedução
          </span>
          <br />
          no bolso 24h
        </h2>

        {/* Container dos Steps */}
        <div className="relative">
          
          {/* Linha conectora (Apenas Desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-gray-800 -z-0 translate-y-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="relative group">
                
                {/* Badge do Número (Círculo Pequeno) */}
                <div className="absolute -top-3 left-0 lg:-left-3 z-10 w-8 h-8 rounded-full bg-[#0f1219] border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-[#11141c] rounded-2xl p-8 flex flex-col items-center border border-white/5 hover:border-purple-600/30 transition-colors duration-300 h-full">
                  
                  {/* Ícone com Fundo Colorido */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  
                  {/* Descrição */}
                  <p className="text-sm font-medium text-gray-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default HowItWorks;