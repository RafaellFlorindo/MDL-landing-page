import { AlertTriangle } from "lucide-react";

const AlertBar = () => (
  <div className="w-full bg-danger-muted border-b border-destructive/30 py-2.5 px-4">
    <p className="text-center text-sm font-body font-semibold text-destructive tracking-wide">
      <AlertTriangle className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
      ATENÇÃO: Método injusto. Use com responsabilidade. Não brinque com os sentimentos delas.
    </p>
  </div>
);

export default AlertBar;
