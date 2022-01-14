import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    get lista(): ReadonlyArray<Negociacao> {
        return this._negociacoes;
    }
}