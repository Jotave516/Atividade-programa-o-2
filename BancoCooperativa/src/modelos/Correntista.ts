import type { MeioAviso } from "../contratos/MeioAviso";
import type { ContaBancaria } from "./ContaBancaria";

export class Correntista {
    // ASSOCIAÇÃO 1..*: um correntista possui uma ou mais contasVinculadas.
    public contasVinculadas: ContaBancaria[] = [];

    constructor(
        public titular: string,
        public cpf: string,
        public moradia: string,
        public rendaMensal: number,
        // ASSOCIAÇÃO com a interface: o correntista só conhece o contrato.
        public meioAviso: MeioAviso
    ) {}

    vincularConta(conta: ContaBancaria): void {
        this.contasVinculadas.push(conta);
    }
}
