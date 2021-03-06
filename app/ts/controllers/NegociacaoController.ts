import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;
    
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor() {        
        this._negociacoesView.update(this._negociacoes);

    }

    @throttle()
    adiciona() {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor.');
            return
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);    

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação realizada com sucesso!');

    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()//Instância para tratar a questão da requisição excessiva ao servidor
    async importarDados() {

        try {
        
            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {

                if (res.ok) {
                    return  res;
                } else {
                    throw new Error(res.statusText);
                }
            });

            const negociacoesJaImportadas = this._negociacoes.paraArray();
            
                //Código que compara a importação e não deixa que seja importada repetidamente    
            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada =>
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao =>
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
            
        } catch(err) {
            this._mensagemView.update(err.message);
        }
    }    
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}