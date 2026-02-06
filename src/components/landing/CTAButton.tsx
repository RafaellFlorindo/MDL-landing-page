import { Unlock } from "lucide-react";

const CTA_URL = "https://pay.kiwify.com.br/UDrZ0Rv";

const CTAButton = () => (
  <a
    href={CTA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-lg md:text-xl tracking-wider animate-pulse-glow transition-transform hover:scale-105 active:scale-95"
  >
    QUERO DESTRAVAR MINHAS CONVERSAS AGORA
    <Unlock className="w-5 h-5" />
  </a>
);

export default CTAButton;
