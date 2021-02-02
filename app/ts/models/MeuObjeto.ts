import { Igualaval } from "./Igualaval";
import { Imprimivel } from "./Imprimivel";

//Com mais essa interface, podemos extendendo e agregando Imprimivel e Igualaval
//É possível criar quantas interfaces for preciso e estende-las. já as classes 
//abstratas, não. 
export interface MeuObjeto<T> extends Imprimivel, Igualaval<T> {

}