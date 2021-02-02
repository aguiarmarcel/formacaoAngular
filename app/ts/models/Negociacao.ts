import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao>{
    
    //Como Imprimivel agora é uma interface, basta que essa classe implemente Imprimivel
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }

    
    //Como estou usando interface, preciso declara-la lá em cima e chamar esse método
    //fazendo a comparação das datas 
    ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getUTCFullYear() == negociacao.data.getUTCFullYear();
    }
}
