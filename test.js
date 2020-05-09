"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var persona_1 = require("./persona");
var PersonaEducada = /** @class */ (function (_super) {
    __extends(PersonaEducada, _super);
    function PersonaEducada(pnombre, papellido, pedad, paltura) {
        var _this = _super.call(this, pnombre, papellido, pedad) || this;
        _this.altura = paltura;
        return _this;
    }
    return PersonaEducada;
}(persona_1.Persona));
//persona para definir el objeto 1
var objetoPersonaEducada = new PersonaEducada("DIEGO", "HERRERA", 18, 1.80);
console.log(JSON.stringify(objetoPersonaEducada));
console.log(objetoPersonaEducada.imprimir());
