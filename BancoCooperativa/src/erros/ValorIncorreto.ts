import { FalhaRetirada } from "./FalhaRetirada";

export class ValorIncorretoException extends FalhaRetirada {
    constructor() {
        super("Quantia inválida para retirada.");
    }
}
