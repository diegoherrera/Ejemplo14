"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(pnombre, papellido, pedad) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.edad = pedad;
    }
    Persona.prototype.imprimir = function () {
        return "Nombre: " + this.nombre + " Apellido: " + this.apellido;
    };
    return Persona;
}());
exports.Persona = Persona;
