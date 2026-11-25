import { Retirada } from "./Retirada";
import { FalhaRetirada } from "../erros/FalhaRetirada";
import { ValorIncorretoException } from "../erros/ValorIncorreto";
import { ContaTravadaException } from "../erros/ContaTravada";
import { FundosInsuficientesException } from "../erros/FundosInsuficientes";
import { TetoDiarioExcedidoException } from "../erros/TetoDiarioExcedido";
import type { Correntista } from "./Correntista";

export class ContaBancaria {
    // ENCAPSULAMENTO: saldo e trava só mudam por meio dos métodos.
    private saldo: number;
    private travada = false;

    // ASSOCIAÇÃO 0..*: a conta guarda as retiradas realizadas.
    public registro: Retirada[] = [];

    constructor(
        public numeroConta: string,
        public codAgencia: string,
        public dataCriacao: Date,
        saldoAbertura: number,
        public tetoDiario: number,
        // ASSOCIAÇÃO: toda conta pertence a um correntista.
        public correntista: Correntista
    ) {
        this.saldo = saldoAbertura;
        correntista.vincularConta(this);
    }

    verSaldo(): number {
        return this.saldo;
    }

    travar(): void {
        this.travada = true;
    }

    destravar(): void {
        this.travada = false;
    }

    creditar(quantia: number): void {
        if (!Number.isFinite(quantia) || quantia <= 0) {
            throw new ValorIncorretoException();
        }
        this.saldo += quantia;
    }

    // Soma só as retiradas feitas hoje.
    private totalRetiradoHoje(): number {
        const hoje = new Date().toDateString();
        return this.registro
            .filter((s) => s.momento.toDateString() === hoje)
            .reduce((total, s) => total + s.quantia, 0);
    }

    retirar(quantia: number): Retirada {
        try {
            if (!Number.isFinite(quantia) || quantia <= 0) {
                throw new ValorIncorretoException();
            }
            if (this.travada) {
                throw new ContaTravadaException();
            }
            if (quantia > this.saldo) {
                throw new FundosInsuficientesException(quantia - this.saldo);
            }
            if (this.totalRetiradoHoje() + quantia > this.tetoDiario) {
                throw new TetoDiarioExcedidoException();
            }

            this.saldo -= quantia;
            const retirada = new Retirada(quantia);
            this.registro.push(retirada);
            return retirada;
        } catch (falha) {
            // Avisa o correntista pelo meioAviso dele (a ContaBancaria não sabe qual é) e repassa o falha.
            if (falha instanceof FalhaRetirada) {
                this.correntista.meioAviso.avisar(this.correntista, falha.message);
            }
            throw falha;
        }
    }
}
