import type { MeioAviso } from "../contratos/MeioAviso";
import type { Correntista } from "./Correntista";

// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
export class MensagemTexto implements MeioAviso {
    avisar(correntista: Correntista, texto: string): void {
        console.log(`Mensagem de texto para ${correntista.titular}: ${texto}`);
    }
}
