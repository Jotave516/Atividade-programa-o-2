import type { MeioAviso } from "../contratos/MeioAviso";
import type { Correntista } from "./Correntista";

// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
export class CorreioEletronico implements MeioAviso {
    avisar(correntista: Correntista, texto: string): void {
        console.log(`Correio eletrônico para ${correntista.titular}: ${texto}`);
    }
}
