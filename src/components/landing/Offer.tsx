import { Check, Zap, Infinity, ShieldCheck, MessageSquare, BookOpen } from "lucide-react";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Acesso vitalício ao Mestre da Lábia IA",
  "Respostas ilimitadas geradas por IA",
  "Scripts para Tinder, Instagram e WhatsApp",
  "Guia de Abertura de Conversa",
  "Atualizações gratuitas para sempre",
  "Suporte prioritário",
];

const Offer = () => (
  <section className="py-20 px-4" id="oferta">
    <ScrollReveal>
      <div className="container max-w-xl mx-auto">
        {/* Adicionei 'relative' aqui para garantir o contexto de empilhamento */}
        <div className="relative rounded-2xl border-2 border-secondary/40 glow-purple p-8 md:p-10 text-center space-y-6 overflow-visible">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-xs font-body font-semibold text-secondary uppercase tracking-wider">Oferta Especial</span>
          </div>

          <h2 className="text-3xl md:text-4xl">ACESSO COMPLETO</h2>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
                <span className="text-muted-foreground font-body line-through text-lg">
                  R$ 97,00
                </span>
                <span className="bg-red-500/15 text-red-400 text-xs font-semibold px-2 py-0.5 rounded-md">
                  -80% OFF
                </span>
            </div>
            
            <p className="text-5xl md:text-6xl font-display text-primary text-glow-green">
              R$ 19,90
            </p>
            <p className="text-sm text-muted-foreground font-body">Pagamento único · Acesso vitalício</p>
          </div>

          <ul className="text-left space-y-3 max-w-sm mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 font-body text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {/* --- CORREÇÃO AQUI --- */}
          {/* O div abaixo garante que o botão fique ACIMA de qualquer efeito de glow ou borda */}
          <div className="relative z-20 pointer-events-auto">
             <CTAButton />
          </div>
          {/* --------------------- */}

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-body">
            <ShieldCheck className="w-4 h-4" />
            Garantia de 7 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default Offer;