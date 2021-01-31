// Essa interface é importante para que caso a API seja alterada, os erros 
//serão acusados em tempo de runtime indicando onde estão os erros.
export interface NegociacaoParcial {

    vezes: number;
    montante: number;
}