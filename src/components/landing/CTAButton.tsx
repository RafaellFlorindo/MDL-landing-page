import { Unlock } from "lucide-react";
import React from "react";

interface CTAButtonProps {
  mode?: "scroll" | "checkout";
}

const CTAButton = ({ mode = "checkout" }: CTAButtonProps) => {
  
  // Função para realizar o scroll suave e lento manualmente
  const smoothScrollTo = (targetId: string, duration: number) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition); 
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("oferta", 2000); 
  };

  const destination = mode === "checkout" 
    ? "https://pay.kiwify.com.br/UDrZ0Rv" 
    : "#oferta";

  // Define se devemos anexar o evento de clique ou deixar nativo
  // Se for checkout, onClick é undefined (comportamento nativo do link)
  const clickHandler = mode === "scroll" ? handleScrollClick : undefined;

  return (
    <div className="flex flex-col items-center w-full relative z-30">
      <style>
        {`
          @keyframes heartbeat {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          .animate-heartbeat {
            animation: heartbeat 1.5s infinite;
            will-change: transform, box-shadow; /* Otimização de performance */
          }
        `}
      </style>

      <a
        href={destination}
        onClick={clickHandler}
        target={mode === "checkout" ? "_blank" : "_self"}
        rel="noopener noreferrer"
        // Adicionado 'relative z-30' para garantir que o clique pegue no botão e não no container
        // Adicionado 'touch-manipulation' (via style ou classe se tiver plugin) para evitar delay em mobile
        className="relative z-30 cursor-pointer inline-flex items-center justify-center gap-3 px-6 py-5 md:px-16 md:py-7 rounded-xl bg-primary text-primary-foreground font-display text-lg md:text-3xl font-bold tracking-wide animate-heartbeat transition-all active:scale-95 shadow-xl shadow-green-500/20 border border-green-400/30 w-full sm:w-auto"
        style={{ touchAction: "manipulation" }} 
      >
        <span className="whitespace-nowrap pointer-events-none">QUERO ACESSAR AGORA</span>
        <Unlock className="w-6 h-6 md:w-8 md:h-8 shrink-0 pointer-events-none" />
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