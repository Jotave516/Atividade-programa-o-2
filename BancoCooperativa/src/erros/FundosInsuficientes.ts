import { FalhaRetirada } from "./FalhaRetirada";

export class FundosInsuficientesException extends FalhaRetirada {
    constructor(public diferenca: number) {
        super(`Fundos insuficientes. Faltam R$ ${diferenca.toFixed(2)}.`);
    }
}
