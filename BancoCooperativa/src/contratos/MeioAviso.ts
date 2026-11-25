import type { Correntista } from "../modelos/Correntista";

// O contrato: todo meioAviso sabe avisar uma texto para um correntista.
export interface MeioAviso {
    avisar(correntista: Correntista, texto: string): void;
}
