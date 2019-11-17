import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Hotel } from 'src/app/domain/hotel';
import { Reserva } from 'src/app/domain/reserva';
import { HotelService } from '../services/hotel.service';

function getCalendarioEs() {
  return {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    today: 'Hoy',
    clear: 'Borrar'
  }
}
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  providers: [MessageService]
})
export class HotelDetailComponent implements OnInit {

  reserva: Reserva
  hotel: Hotel
  minDateValue: Date
  es: any

  constructor(private route: ActivatedRoute, private hotelService: HotelService, private messageService: MessageService) { }

  async ngOnInit() {
    this.es = getCalendarioEs()
    this.minDateValue = new Date()
    const hotelId = this.route.snapshot.params.id
    try {
      this.hotel = await this.hotelService.getHotel(hotelId)
    } catch (error) {
      console.log(error)
    }
    this.reserva = new Reserva(this.hotel)
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Ok', detail: 'Reserva realizada con éxito!'  });
  }

  fechasInvalidas() {
    return this.reserva.fecha_desde >= this.reserva.fecha_hasta
  }

  noPuedeReservar() {
    return !this.ingresoFechas() || !this.reserva.habitacion || this.fechasInvalidas()
  }

  ingresoFechas() {
    return this.reserva.fecha_desde && this.reserva.fecha_hasta
  }

  mostrarErrorFechas() {
    return this.ingresoFechas() && this.fechasInvalidas()

  }

  async reservar() {
    try {
      await this.hotelService.nuevaReserva(this.reserva)
    } catch (error) {
      console.log(error)
    }
    this.showSuccess()
    this.reserva = new Reserva(this.hotel)
  }

}