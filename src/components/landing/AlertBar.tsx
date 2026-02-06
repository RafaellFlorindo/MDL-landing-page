import { AlertTriangle } from "lucide-react";

const AlertBar = () => (
  // Mudei py-2.5 para py-4 aqui na div principal
  <div className="w-full bg-red-600 py-4 px-4">
    <p className="flex items-center justify-center text-center text-sm font-bold text-white tracking-wide">
      <AlertTriangle className="w-4 h-4 mr-2" />
      ATENÇÃO: Método injusto. Use com responsabilidade. Não brinque com os sentimentos delas.
    </p>
  </div>
);

export default AlertBar;