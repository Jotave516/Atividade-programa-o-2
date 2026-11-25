import type { MeioAviso } from "../contratos/MeioAviso";
import type { Correntista } from "./Correntista";

// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
export class AlertaApp implements MeioAviso {
    avisar(correntista: Correntista, texto: string): void {
        console.log(`Alerta no app para ${correntista.titular}: ${texto}`);
    }
}
