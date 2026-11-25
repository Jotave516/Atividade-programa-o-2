"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemTexto = void 0;
// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
class MensagemTexto {
    avisar(correntista, texto) {
        console.log(`Mensagem de texto para ${correntista.titular}: ${texto}`);
    }
}
exports.MensagemTexto = MensagemTexto;
//# sourceMappingURL=MensagemTexto.js.map