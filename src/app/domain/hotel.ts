import { Habitacion } from './habitacion';
import { Servicio } from './servicio';

export class Hotel {

    constructor(public id: String, public nombre: String, public ubicacion: String, public estrellas: Number, public imagen?:
        String, public habitaciones?: Habitacion[], public servicios?: Servicio[]) { }

    get precioHabitacionMasBarata() {
        return Math.min.apply(Math, this.habitaciones.map(habitacion => habitacion.precioPorNoche))
    }


}
