import type { MeioAviso } from "../contratos/MeioAviso";
import type { ContaBancaria } from "./ContaBancaria";
export declare class Correntista {
    titular: string;
    cpf: string;
    moradia: string;
    rendaMensal: number;
    meioAviso: MeioAviso;
    contasVinculadas: ContaBancaria[];
    constructor(titular: string, cpf: string, moradia: string, rendaMensal: number, meioAviso: MeioAviso);
    vincularConta(conta: ContaBancaria): void;
}
//# sourceMappingURL=Correntista.d.ts.map