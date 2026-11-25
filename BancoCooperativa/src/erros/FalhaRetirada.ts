// HERANÇA + ABSTRAÇÃO: classe base abstrata de todas as falhas de retirada.
export abstract class FalhaRetirada extends Error {
    constructor(texto: string) {
        super(texto);
        this.name = new.target.name;
    }
}
