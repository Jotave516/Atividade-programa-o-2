"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaApp = void 0;
// POLIMORFISMO: cada meioAviso implementa o contrato do seu jeito.
class AlertaApp {
    avisar(correntista, texto) {
        console.log(`Alerta no app para ${correntista.titular}: ${texto}`);
    }
}
exports.AlertaApp = AlertaApp;
//# sourceMappingURL=AlertaApp.js.map