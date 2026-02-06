import { X, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const withoutItems = [
  "Ghosting sem explicação",
  "Friendzone eterna",
  "Conversas mornas e sem graça",
  "Sem encontros há meses",
  "Ela demora horas pra responder",
];

const withItems = [
  "Respostas instantâneas e animadas",
  "Tensão sexual desde a 1ª msg",
  "Agenda lotada de encontros",
  "Ela te chama pra sair",
  "Mensagens que fazem ela rir",
];

const Comparison = () => (
  <section className="py-20 px-4">
    <ScrollReveal>
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-12">
          O ABISMO ENTRE <span className="text-destructive">FRACASSAR</span> E{" "}
          <span className="text-primary text-glow-green">CONQUISTAR</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without */}
          <div className="glass-red rounded-2xl p-6">
            <h3 className="text-xl mb-6 text-destructive flex items-center gap-2">
              <X className="w-6 h-6" /> SEM O MESTRE
            </h3>
            <ul className="space-y-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-muted-foreground">
                  <X className="w-4 h-4 text-destructive mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="glass-green rounded-2xl p-6 glow-green">
            <h3 className="text-xl mb-6 text-primary flex items-center gap-2">
              <Check className="w-6 h-6" /> COM O MESTRE
            </h3>
            <ul className="space-y-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-foreground">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
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
