import { Unlock } from "lucide-react";

const CTAButton = () => {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("oferta");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <style>
        {`
          @keyframes heartbeat {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          .animate-heartbeat {
            animation: heartbeat 1.5s infinite;
          }
        `}
      </style>

      <a
        href="#oferta"
        onClick={scrollToOffer}
        // MUDANÇAS AQUI PARA O PC:
        // 1. px-6 md:px-16: Aumentei o padding lateral no mobile e MUITO no PC.
        // 2. py-5 md:py-7: Aumentei a altura no PC.
        // 3. md:text-3xl: Aumentei ainda mais a fonte no PC para ficar agressivo.
        // 4. gap-3: Aumentei um pouco o espaço entre texto e ícone.
        className="cursor-pointer inline-flex items-center justify-center gap-3 px-6 py-5 md:px-16 md:py-7 rounded-xl bg-primary text-primary-foreground font-display text-lg md:text-3xl font-bold tracking-wide animate-heartbeat transition-all active:scale-95 shadow-xl shadow-green-500/20 border border-green-400/30 w-full sm:w-auto"
      >
        <span className="whitespace-nowrap">QUERO ACESSAR AGORA</span>
        {/* Aumentei o ícone no PC também (md:w-8 md:h-8) */}
        <Unlock className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
      </a>
      
      {/* LINHA DE BENEFÍCIOS */}
      <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 w-full text-muted-foreground/70 md:text-sm">
        
        <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
          <span className="text-sm">⚡</span> Acesso Imediato
        </span>

        <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
          <span className="text-sm">🕒</span> Disponível 24/7
        </span>

        <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
          <span className="text-sm">🔒</span> 100% Sigiloso
        </span>

      </div>
    </div>
  );
};

export default CTAButton;