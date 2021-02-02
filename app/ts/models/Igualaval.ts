//Interface para evitar que os registros sejam iguais fazendo as devidas comparações 
export interface Igualaval<T> {

    ehIgual(objeto: T): boolean;
}