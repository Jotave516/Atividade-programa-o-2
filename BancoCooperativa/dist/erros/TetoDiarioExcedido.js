"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TetoDiarioExcedidoException = void 0;
const FalhaRetirada_1 = require("./FalhaRetirada");
class TetoDiarioExcedidoException extends FalhaRetirada_1.FalhaRetirada {
    constructor() {
        super("Teto diário de retirada excedido.");
    }
}
exports.TetoDiarioExcedidoException = TetoDiarioExcedidoException;
//# sourceMappingURL=TetoDiarioExcedido.js.map