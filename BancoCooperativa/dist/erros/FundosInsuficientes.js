"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundosInsuficientesException = void 0;
const FalhaRetirada_1 = require("./FalhaRetirada");
class FundosInsuficientesException extends FalhaRetirada_1.FalhaRetirada {
    diferenca;
    constructor(diferenca) {
        super(`Fundos insuficientes. Faltam R$ ${diferenca.toFixed(2)}.`);
        this.diferenca = diferenca;
    }
}
exports.FundosInsuficientesException = FundosInsuficientesException;
//# sourceMappingURL=FundosInsuficientes.js.map