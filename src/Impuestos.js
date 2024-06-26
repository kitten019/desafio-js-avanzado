export default class Impuesto {
    #montoBrutoAnual
    #deducciones
    constructor(montoBrutoAnual, deducciones) {
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }

    //Getter y Setters 
    get montoBrutoAnual() {
        return this.#montoBrutoAnual;
    }

    set montoBrutoAnual(montoBruto){
        return this.#montoBrutoAnual = montoBruto;
    }

    get deducciones(){
        return this.#deducciones;
    }

    set deducciones(montoDeducciones){
        return this.#deducciones = montoDeducciones;
    }
}