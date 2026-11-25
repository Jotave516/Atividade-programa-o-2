import { FalhaRetirada } from "./FalhaRetirada";

export class ContaTravadaException extends FalhaRetirada {
    constructor() {
        super("A conta está travada.");
    }
}
