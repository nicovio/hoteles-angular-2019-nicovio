import { Hotel } from './hotel';
import { Habitacion } from './habitacion';
import { Servicio } from './servicio';

export class Reserva {

    constructor(public hotel: Hotel, public servicios: Servicio[] = [], public habitacion?: Habitacion, public fecha_desde?: Date, public fecha_hasta?: Date, public id?: String) { }

    get precioTotal() {
        return this.cantidadDeNoches * (this.habitacion.precioPorNoche + this.precioServiciosPorDia)
    }

    get cantidadDeNoches() {
        return restarFechas(this.fecha_hasta, this.fecha_desde)
    }

    get precioServiciosPorDia() {
        return this.servicios.reduce((acum, servicio) => acum + servicio.precioPorNoche, 0)
    }

    esCancelable() {
        const hoy = new Date()
        return restarFechas(this.fecha_desde, hoy) >= 7
    }

    esValida() {
        return this.fecha_desde && this.fecha_hasta && this.fechaDesdeMenorAHasta() && this.habitacion
    }

    fechaDesdeMenorAHasta() {
        return this.fecha_desde < this.fecha_hasta
    }

}

function restarFechas(_fecha: Date, _otraFecha: Date) {
    const fecha = new Date(_fecha)
    const otraFecha = new Date(_otraFecha)
    fecha.setHours(0, 0, 0);
    otraFecha.setHours(0, 0, 0);
    return Math.round((fecha.getTime() - otraFecha.getTime()) / (1000 * 60 * 60 * 24))
}