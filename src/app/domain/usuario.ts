import { Reserva } from './reserva';

export class Usuario {
    constructor(public username: String, public reservas: Reserva[] = []) { }

    agregarReserva(reserva: Reserva) {
        this.reservas.push(reserva)
    }
}
