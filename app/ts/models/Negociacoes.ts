import { Imprimivel } from './Imprimivel';
import {Negociacao} from './Negociacao';

export class Negociacoes  implements Imprimivel{

    //Como Imprimivel agora é uma interface, basta que essa classe implemente Imprimivel
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        //resolvido o problema do strictNullChecks tipando o a sintaxe "as"
        return ([] as Negociacao[]).concat(this._negociacoes);
    }  
    
    paraTexto(): void { 

        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}