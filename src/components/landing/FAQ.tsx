import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Funciona pra quem é tímido?",
    a: "Com certeza! O Mestre da Lábia foi feito exatamente pra quem não sabe o que responder. Você só precisa copiar e colar. A IA faz todo o trabalho pesado.",
  },
  {
    q: "É uma assinatura mensal?",
    a: "Não! É um pagamento único de R$ 19,90 com acesso vitalício. Sem cobranças recorrentes, sem surpresas.",
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
