"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retirada = void 0;
class Retirada {
    quantia;
    momento;
    constructor(quantia, momento = new Date()) {
        this.quantia = quantia;
        this.momento = momento;
    }
}
exports.Retirada = Retirada;
//# sourceMappingURL=Retirada.js.map