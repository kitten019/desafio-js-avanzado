"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
var _Cliente = require("./Cliente.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuestos = new _Impuestos["default"](10000, 1900); // monto bruto y deducciones respectivamente
var cliente = new _Cliente.Cliente('Juan', impuestos);
console.log(cliente.calcularImpuesto());
//En este caso, según el programa el cliente debe pagar un impuesto final de 1701