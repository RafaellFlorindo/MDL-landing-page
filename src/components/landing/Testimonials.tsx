import { Star, Check, MessageSquare, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// ... Mantenha sua constante 'testimonials' original aqui ...
const testimonials = [
  {
    name: "Carlos M.",
    text: "Cara, é bizarro, eu tava na seca há 6 meses, usei o quebra gelo que a IA mandou e a morena da academia topou sair. Resumindo ela dormiu aqui em casa na primeira noite",
    tag: "1ª noite",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Felipe R.",
    text: "Eu travava só de pensar em mandar oi, o mestre me deu confiança. Agora sou eu que tenho que parar de responder porque tem muita mulher chamando",
    tag: "+5 matches/dia",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Gustavo S.",
    text: "Paguei 19 reais rindo, só o primeiro encontro que eu consegui já valeu 100x o valor, o negócio é bruxaria pura.",
    tag: "+2 encontros/sem", // Ajustado para brevidade
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  },
];

const Testimonials = () => (
  <section className="py-24 px-4 bg-black text-white">
    <ScrollReveal>
      <div className="container max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge Roxo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
            <MessageSquare className="w-4 h-4" />
            Resultados Reais
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-wide">
            Veja o que está rolando
            <br />
            {/* === MUDANÇA AQUI: Cor atualizada para o padrão Neon === */}
            <span className="text-secondary text-glow-purple">no grupo VIP</span>
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8 px-2">
          {testimonials.map((t, i) => (
            <div key={t.name} className="relative group">
              
              {/* Tag Flutuante (Verde) */}
              <div className="absolute -top-3 right-4 z-20 bg-emerald-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] transform hover:scale-105 transition-transform">
                {t.tag}
              </div>

              {/* Card Container */}
              <div className="bg-[#0f1219] border border-gray-800 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden hover:border-gray-700 transition-colors">
                
                {/* Ícone de Aspas no Fundo (Background) */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-purple-900/20 fill-purple-900/20 rotate-180 pointer-events-none" />

                {/* Estrelas */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="font-body text-gray-300 leading-relaxed text-base mb-8 flex-grow relative z-10">
                  "{t.text}"
                </p>

                {/* Info do Usuário */}
                <div className="flex items-center gap-4 mt-auto border-t border-gray-800/50 pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg leading-none mb-1">{t.name}</h4>
                    <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold tracking-wide">
                      <Check className="w-3 h-3 stroke-[3]" />
                      Compra verificada
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default Testimonials;