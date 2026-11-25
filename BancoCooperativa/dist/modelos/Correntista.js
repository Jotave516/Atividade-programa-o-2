"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correntista = void 0;
class Correntista {
    titular;
    cpf;
    moradia;
    rendaMensal;
    meioAviso;
    // ASSOCIAÇÃO 1..*: um correntista possui uma ou mais contasVinculadas.
    contasVinculadas = [];
    constructor(titular, cpf, moradia, rendaMensal, 
    // ASSOCIAÇÃO com a interface: o correntista só conhece o contrato.
    meioAviso) {
        this.titular = titular;
        this.cpf = cpf;
        this.moradia = moradia;
        this.rendaMensal = rendaMensal;
        this.meioAviso = meioAviso;
    }
    vincularConta(conta) {
        this.contasVinculadas.push(conta);
    }
}
exports.Correntista = Correntista;
//# sourceMappingURL=Correntista.js.map