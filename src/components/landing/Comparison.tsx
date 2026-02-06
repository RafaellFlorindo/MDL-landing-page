import { X, Check, ArrowRight, ChevronsDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const withoutItems = [
  "Vácuo com todas mulheres",
  "Print rindo de você no grupo dela",
  'O famoso "Visto há 2h" ',
  "Sem pegar ninguém há meses",
  "Apelidado de sapo cego 🐸",
];

const withItems = [
  "Pega qualquer mulher sem medo",
  "Dorme na casa de uma por semana",
  "Faz ela te ver como um homem",
  "Ela que vai querer sair com você",
  "Mensagens com gatilhos comprovados",
];

const Comparison = () => (
  <section className="py-20 px-4 relative overflow-hidden">
    {/* Background Glow sutil */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 -z-10 pointer-events-none" />

    <ScrollReveal>
      {/* Aumentei para max-w-7xl para caber o título em 1 linha */}
      <div className="container max-w-7xl mx-auto">
        
        {/* TÍTULO AJUSTADO: Tenta ficar em 1 linha (whitespace-nowrap em telas grandes) ou quebra em 2 no máximo */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center mb-16 uppercase tracking-tight">
          O ABISMO ENTRE <span className="text-destructive whitespace-nowrap">QUEM DORME SOZINHO</span> E{" "}
          <span className="text-primary text-glow-green whitespace-nowrap">QUEM USA O MESTRE</span>
        </h2>

        <div className="relative grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Seta Conectora */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block text-muted-foreground/50">
             <ArrowRight className="w-12 h-12 animate-pulse" />
          </div>
          <div className="md:hidden flex justify-center -my-4 z-20 text-muted-foreground/50">
             <ChevronsDown className="w-10 h-10 animate-bounce" />
          </div>

          {/* Card "SEM O MESTRE" */}
          <div className="glass-red rounded-3xl p-8 border-destructive/30 bg-destructive/5 relative overflow-hidden group hover:bg-destructive/10 transition-all duration-300">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
              <h3 className="text-2xl font-display font-bold text-destructive flex items-center gap-3 uppercase tracking-wide">
                <div className="p-2 rounded-full bg-destructive/20 shrink-0">
                  <X className="w-6 h-6" />
                </div>
                SEM O MESTRE
              </h3>
              {/* Badge Melhorado: Fundo escuro, texto claro e bold */}
              <span className="text-xs font-bold text-red-100 bg-red-900/50 px-3 py-1 rounded-full border border-red-500/20 w-fit">
                (VOCÊ HOJE)
              </span>
            </div>

            <ul className="space-y-5">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-lg text-muted-foreground/90 group-hover:text-destructive/90 transition-colors">
                  <X className="w-5 h-5 text-destructive mt-1 shrink-0 opacity-70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card "COM O MESTRE" */}
          {/* ADICIONADO: group, hover:bg-primary/20, hover:scale para dar vida */}
          <div className="glass-green rounded-3xl p-8 border-primary/50 bg-primary/10 glow-green relative overflow-hidden group hover:bg-primary/20 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 -z-10" />
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
              <h3 className="text-2xl font-display font-bold text-primary flex items-center gap-3 uppercase tracking-wide">
                <div className="p-2 rounded-full bg-primary/20 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                COM O MESTRE
              </h3>
              {/* Badge Melhorado: Texto branco puro, bold e fundo verde visível */}
              <span className="text-xs font-bold text-white bg-green-600 px-3 py-1 rounded-full shadow-lg shadow-green-500/20 w-fit">
                (VOCÊ AMANHÃ)
              </span>
            </div>

            <ul className="space-y-5">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-lg text-foreground font-medium group-hover:text-white transition-colors">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default Comparison;