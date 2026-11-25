"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorIncorretoException = void 0;
const FalhaRetirada_1 = require("./FalhaRetirada");
class ValorIncorretoException extends FalhaRetirada_1.FalhaRetirada {
    constructor() {
        super("Quantia inválida para retirada.");
    }
}
exports.ValorIncorretoException = ValorIncorretoException;
//# sourceMappingURL=ValorIncorreto.js.map