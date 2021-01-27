import {Negociacao} from './Negociacao';

export class Negociacoes{

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        //resolvido o problema do strictNullChecks tipando o a sintaxe "as"
        return ([] as Negociacao[]).concat(this._negociacoes);
    }    
}