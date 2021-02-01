import { Imprimivel } from '../models/index';

//Função utilitária que recebe como parâmetros um ou mais elementos para o método paraTexto 
export function imprime(...objetos: Imprimivel[]) {//Como o objeto Imprimivel é abstrato, 
    //basta chama-lo para que o objeto se extenda para as filhas, no caso Negociacao e Negociacoes 
    
    objetos.forEach(objeto => objeto.paraTexto());
}