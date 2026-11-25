"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalhaRetirada = void 0;
// HERANÇA + ABSTRAÇÃO: classe base abstrata de todas as falhas de retirada.
class FalhaRetirada extends Error {
    constructor(texto) {
        super(texto);
        this.name = new.target.name;
    }
}
exports.FalhaRetirada = FalhaRetirada;
//# sourceMappingURL=FalhaRetirada.js.map