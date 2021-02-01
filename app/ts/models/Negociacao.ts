import { Imprimivel } from './Imprimivel';

export class Negociacao extends Imprimivel{
    
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {

        //Como Negociacao é diferente da classe pai (Imprimivel), é obrigatório colocar super()
        //no construtor para que a classe pai seja chamada. 
        super();
    }

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
}
