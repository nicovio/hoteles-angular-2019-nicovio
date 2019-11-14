import { Habitacion } from './habitacion';

export class Hotel {

    constructor(public nombre: String, public ubicacion: String, public estrellas: Number, public imagen?: String, public habitaciones?: Habitacion[]) { }

    get habitacionMasBarata() {
        return Math.min.apply(Math, this.habitaciones.map(habitacion => habitacion.precio))
    }


}
