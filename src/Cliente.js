export class Cliente {
    #nombre
    constructor(nombre, impuesto) {
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }

    //Getter clase
    get nombre() {
        return this.#nombre;
    }

    //Setter clase
    set nombre(nombreNuevo) {
        return this.#nombre = nombreNuevo;
    }

    //Método
    calcularImpuesto() {
        return (`El impuesto final a pagar es de ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones)*0.21}`)
    }
}