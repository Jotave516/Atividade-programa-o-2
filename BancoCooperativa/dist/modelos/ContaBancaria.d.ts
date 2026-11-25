import { Retirada } from "./Retirada";
import type { Correntista } from "./Correntista";
export declare class ContaBancaria {
    numeroConta: string;
    codAgencia: string;
    dataCriacao: Date;
    tetoDiario: number;
    correntista: Correntista;
    private saldo;
    private travada;
    registro: Retirada[];
    constructor(numeroConta: string, codAgencia: string, dataCriacao: Date, saldoAbertura: number, tetoDiario: number, correntista: Correntista);
    verSaldo(): number;
    travar(): void;
    destravar(): void;
    creditar(quantia: number): void;
    private totalRetiradoHoje;
    retirar(quantia: number): Retirada;
}
//# sourceMappingURL=ContaBancaria.d.ts.map