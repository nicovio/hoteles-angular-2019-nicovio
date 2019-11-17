import { Hotel } from './hotel';
import { Habitacion } from './habitacion';
import { Servicio } from './servicio';

export class Reserva {

    constructor(public hotel: Hotel, public servicios: Servicio[] = [], public habitacion?: Habitacion, public fecha_desde?: Date, public fecha_hasta?: Date) { }

    get precioTotal() {
        return this.cantidadDeDias * (this.habitacion.precioPorNoche + this.precioServiciosPorDia)
    }

    get cantidadDeDias() {
        return Math.round((this.fecha_hasta.getTime() - this.fecha_desde.getTime()) / (1000 * 60 * 60 * 24))
    }

    get precioServiciosPorDia() {
        return this.servicios.reduce((acum, servicio) => acum + servicio.precioPorNoche, 0)
    }

} 