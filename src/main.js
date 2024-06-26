import Impuesto from "./Impuestos.js";
import { Cliente } from "./Cliente.js";

let impuestos = new Impuesto(10000, 1900); // monto bruto y deducciones respectivamente
let cliente = new Cliente('Juan', impuestos);

console.log(cliente.calcularImpuesto());
//En este caso, según el programa el cliente debe pagar un impuesto final de 1701