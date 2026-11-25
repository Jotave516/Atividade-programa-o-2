"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaTravadaException = void 0;
const FalhaRetirada_1 = require("./FalhaRetirada");
class ContaTravadaException extends FalhaRetirada_1.FalhaRetirada {
    constructor() {
        super("A conta está travada.");
    }
}
exports.ContaTravadaException = ContaTravadaException;
//# sourceMappingURL=ContaTravada.js.map