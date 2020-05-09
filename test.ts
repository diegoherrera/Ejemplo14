
import { Persona } from "./persona";


class PersonaEducada extends Persona {
    altura: number;
    constructor(pnombre:string, papellido:string, pedad: number, paltura: number) {
       super(pnombre,papellido, pedad);
       this.altura = paltura;
    }
}

//persona para definir el objeto 1
let objetoPersonaEducada = new PersonaEducada("DIEGO", "HERRERA", 18, 1.80);
console.log(JSON.stringify(objetoPersonaEducada));
console.log(objetoPersonaEducada.imprimir());