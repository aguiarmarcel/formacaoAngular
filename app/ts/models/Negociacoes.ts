import {Negociacao} from './Negociacao';
import { MeuObjeto } from './MeuObjeto';

//Após a criação da interface MeuObjeto que extende Igualaval e Imprimivel, basta chama-lo aqui
export class Negociacoes  implements MeuObjeto<Negociacoes>{

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

    //Como estou usando interface, preciso declara-la lá em cima e chamar esse método
    //fazendo a comparação das negociacoes 
    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray); 
    }
}