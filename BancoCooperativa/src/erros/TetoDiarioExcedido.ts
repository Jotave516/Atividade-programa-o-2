import { FalhaRetirada } from "./FalhaRetirada";

export class TetoDiarioExcedidoException extends FalhaRetirada {
    constructor() {
        super("Teto diário de retirada excedido.");
    }
}
