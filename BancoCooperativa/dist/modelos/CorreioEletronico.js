"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreioEletronico = void 0;
// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
class CorreioEletronico {
    avisar(correntista, texto) {
        console.log(`Correio eletrônico para ${correntista.titular}: ${texto}`);
    }
}
exports.CorreioEletronico = CorreioEletronico;
//# sourceMappingURL=CorreioEletronico.js.map