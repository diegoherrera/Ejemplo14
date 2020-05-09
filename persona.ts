export class Persona {
    nombre:string;
    apellido:string; 
    edad: number;

    constructor(pnombre:string, papellido:string, pedad: number) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.edad = pedad;
    }
    imprimir():string {
        return "Nombre: " + this.nombre + " Apellido: " + this.apellido;
    }
}