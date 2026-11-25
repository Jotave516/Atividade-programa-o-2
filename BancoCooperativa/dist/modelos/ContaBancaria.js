"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
const Retirada_1 = require("./Retirada");
const FalhaRetirada_1 = require("../erros/FalhaRetirada");
const ValorIncorreto_1 = require("../erros/ValorIncorreto");
const ContaTravada_1 = require("../erros/ContaTravada");
const FundosInsuficientes_1 = require("../erros/FundosInsuficientes");
const TetoDiarioExcedido_1 = require("../erros/TetoDiarioExcedido");
class ContaBancaria {
    numeroConta;
    codAgencia;
    dataCriacao;
    tetoDiario;
    correntista;
    // ENCAPSULAMENTO: saldo e trava só mudam por meio dos métodos.
    saldo;
    travada = false;
    // ASSOCIAÇÃO 0..*: a conta guarda as retiradas realizadas.
    registro = [];
    constructor(numeroConta, codAgencia, dataCriacao, saldoAbertura, tetoDiario, 
    // ASSOCIAÇÃO: toda conta pertence a um correntista.
    correntista) {
        this.numeroConta = numeroConta;
        this.codAgencia = codAgencia;
        this.dataCriacao = dataCriacao;
        this.tetoDiario = tetoDiario;
        this.correntista = correntista;
        this.saldo = saldoAbertura;
        correntista.vincularConta(this);
    }
    verSaldo() {
        return this.saldo;
    }
    travar() {
        this.travada = true;
    }
    destravar() {
        this.travada = false;
    }
    creditar(quantia) {
        if (!Number.isFinite(quantia) || quantia <= 0) {
            throw new ValorIncorreto_1.ValorIncorretoException();
        }
        this.saldo += quantia;
    }
    // Soma só as retiradas feitas hoje.
    totalRetiradoHoje() {
        const hoje = new Date().toDateString();
        return this.registro
            .filter((s) => s.momento.toDateString() === hoje)
            .reduce((total, s) => total + s.quantia, 0);
    }
    retirar(quantia) {
        try {
            if (!Number.isFinite(quantia) || quantia <= 0) {
                throw new ValorIncorreto_1.ValorIncorretoException();
            }
            if (this.travada) {
                throw new ContaTravada_1.ContaTravadaException();
            }
            if (quantia > this.saldo) {
                throw new FundosInsuficientes_1.FundosInsuficientesException(quantia - this.saldo);
            }
            if (this.totalRetiradoHoje() + quantia > this.tetoDiario) {
                throw new TetoDiarioExcedido_1.TetoDiarioExcedidoException();
            }
            this.saldo -= quantia;
            const retirada = new Retirada_1.Retirada(quantia);
            this.registro.push(retirada);
            return retirada;
        }
        catch (falha) {
            // Avisa o correntista pelo meioAviso dele (a ContaBancaria não sabe qual é) e repassa o falha.
            if (falha instanceof FalhaRetirada_1.FalhaRetirada) {
                this.correntista.meioAviso.avisar(this.correntista, falha.message);
            }
            throw falha;
        }
    }
}
exports.ContaBancaria = ContaBancaria;
//# sourceMappingURL=ContaBancaria.js.map