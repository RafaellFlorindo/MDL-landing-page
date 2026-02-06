import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Tava há 6 meses na seca... agora ela tá aqui em casa. Essa IA é sinistra.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    text: "A mina me deu vácuo por 3 dias. Usei o Mestre e em 20min ela respondeu querendo sair.",
    stars: 5,
  },
  {
    name: "Bruno T.",
    text: "Sempre fui tímido demais pra puxar assunto. Agora pareço outro cara no chat. Ela não para de rir.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 px-4">
    <ScrollReveal>
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-4">
          RESULTADOS <span className="text-primary text-glow-green">REAIS</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-14">
          Veja o que nossos usuários estão dizendo
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 space-y-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/90 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm font-display text-muted-foreground">
                  {t.name[0]}
                </div>
                <span className="font-body text-sm font-semibold text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default Testimonials;
