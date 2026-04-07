import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { ShieldCheck } from "lucide-react"; // Certifique-se de ter o lucide-react instalado

const faqs = [
  {
    q: "Funciona pra quem é tímido?",
    a: "Com certeza! O Mestre da Lábia foi feito exatamente pra quem não sabe o que responder. Você só precisa copiar e colar. A IA faz todo o trabalho pesado.",
  },
  {
    q: "É uma assinatura mensal?",
    a: "Não! É um pagamento único de R$ 24,90 com acesso vitalício. Sem cobranças recorrentes, sem surpresas.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim. Após a confirmação do pagamento, você recebe o acesso instantaneamente por e-mail.",
  },
  {
    q: "Funciona em qual app? Tinder, Instagram, WhatsApp?",
    a: "Funciona em qualquer plataforma de mensagens. Basta enviar o print da conversa e a IA gera a resposta ideal para qualquer contexto.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "100%. Nenhuma conversa é armazenada. A IA processa a imagem e gera a resposta em tempo real sem salvar nada.",
  },
];

const FAQ = () => (
  <section className="py-20 px-4">
    <ScrollReveal>
      <div className="container max-w-2xl mx-auto">
        
        {/* === SEÇÃO DE GARANTIA ADICIONADA === */}
        <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 mb-20 text-center relative overflow-hidden">
          {/* Efeito de brilho opcional no fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-green-500/5 blur-3xl rounded-full -z-10" />
          
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-500/10 p-4 border border-green-500/20">
              <ShieldCheck className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            RISCO ZERO: <span className="text-green-500">Teste por 7 Dias</span>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Se você não conseguir marcar <span className="text-white font-bold">pelo menos um encontro</span> ou não curtir, nós devolvemos <span className="text-green-500 font-bold">100% do seu dinheiro</span>. Sem perguntas, sem burocracia.
          </p>
        </div>
        {/* ==================================== */}

        <h2 className="text-3xl md:text-5xl text-center mb-12">PERGUNTAS FREQUENTES</h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl px-6 border-border/50">
              <AccordionTrigger className="font-body font-semibold text-sm md:text-base text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>
  </section>
);

export default FAQ;