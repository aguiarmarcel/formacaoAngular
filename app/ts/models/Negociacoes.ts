import {Negociacao} from './Negociacao';

export class Negociacoes{

    //Como está classe não está definindo um construtor, o TypeScript adota o construtor 
    //da classe pai(imprimivel).
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