import { Correntista } from "./modelos/Correntista";
import { ContaBancaria } from "./modelos/ContaBancaria";
import { MensagemTexto } from "./modelos/MensagemTexto";
import { CorreioEletronico } from "./modelos/CorreioEletronico";
import { AlertaApp } from "./modelos/AlertaApp";

function testarRetirada(descricao: string, conta: ContaBancaria, quantia: number): void {
    console.log(`\n${descricao}`);
    try {
        conta.retirar(quantia);
        console.log("Retirada concluída.");
    } catch (falha) {
        if (falha instanceof Error) console.log(`Falha registrada: ${falha.name}`);
    }
    console.log(`Saldo atual: R$ ${conta.verSaldo().toFixed(2)}`);
}

// Canais (todos seguem a interface MeioAviso)
const sms = new MensagemTexto();
const email = new CorreioEletronico();
const app = new AlertaApp();

// Correntistas
const lucas = new Correntista("Lucas", "456.789.123-00", "Av. Boa Viagem, 800", 5200, email);
const beatriz = new Correntista("Beatriz", "987.654.321-99", "Rua das Flores, 45", 1800, app);
const carlos = new Correntista("Carlos", "321.654.987-55", "Travessa do Sol, 12", 7500, sms);

// Retiradas permitidas
const valida1 = new ContaBancaria("7701", "015", new Date("2025-06-18"), 3500, 1500, lucas);
const valida2 = new ContaBancaria("7702", "015", new Date("2024-11-03"), 1250, 600, beatriz);
testarRetirada("Retirada permitida 1", valida1, 750);
testarRetirada("Retirada permitida 2", valida2, 320);

// Valor inválido
const invalida1 = new ContaBancaria("8801", "022", new Date("2026-03-25"), 900, 700, carlos);
const invalida2 = new ContaBancaria("8802", "022", new Date("2026-04-02"), 2400, 1000, lucas);
testarRetirada("Quantia inválida: zero", invalida1, 0);
testarRetirada("Quantia inválida: negativo", invalida2, -275);

// Conta travada
const bloqueada1 = new ContaBancaria("9901", "031", new Date("2023-09-14"), 4800, 2000, beatriz);
const bloqueada2 = new ContaBancaria("9902", "031", new Date("2022-12-01"), 650, 300, carlos);
bloqueada1.travar();
bloqueada2.travar();
testarRetirada("Conta travada 1", bloqueada1, 400);
testarRetirada("Conta travada 2", bloqueada2, 90);

// Fundos insuficientes
const saldo1 = new ContaBancaria("6601", "040", new Date("2026-07-07"), 230, 1000, lucas);
const saldo2 = new ContaBancaria("6602", "040", new Date("2026-08-19"), 75, 800, beatriz);
testarRetirada("Fundos insuficientes 1 (R$ 300 com R$ 230)", saldo1, 300);
testarRetirada("Fundos insuficientes 2", saldo2, 500);

// Teto diário excedido
const limite1 = new ContaBancaria("5501", "050", new Date("2025-01-30"), 6000, 900, carlos);
const limite2 = new ContaBancaria("5502", "050", new Date("2025-02-14"), 3000, 450, beatriz);
testarRetirada("Teto diário: primeira retirada (conta 1)", limite1, 600);
testarRetirada("Teto diário: primeira retirada (conta 2)", limite2, 400);
testarRetirada("Teto diário excedido 1", limite1, 350);
testarRetirada("Teto diário excedido 2", limite2, 100);

// Associação Correntista -> Contas
console.log("\nContas vinculadas a Lucas:");
for (const conta of lucas.contasVinculadas) {
    console.log(`Número ${conta.numeroConta} | Agência ${conta.codAgencia}`);
}
