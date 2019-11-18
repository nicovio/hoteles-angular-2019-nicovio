import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/domain/reserva';
import { HotelService } from '../services/hotel.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MisReservasComponent implements OnInit {

  reservas: Reserva[]

  constructor(private hotelService: HotelService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  async ngOnInit() {
    try {
      this.reservas = await this.hotelService.reservasLogueado()
    } catch (error) {
      console.log(error)
    }
  }

  async cancelar(reserva: Reserva) {
    this.confirmationService.confirm({
      message: '¿Desea cancelar esta reserva?',
      header: 'Cancelar reserva',
      icon: 'pi pi-info-circle',
      accept: async () => {
        this.hotelService.cancelarReserva(reserva)
        this.messageService.add({ severity: 'info', summary: 'Reserva cancelada' });
        await this.ngOnInit()
      },
      reject: () => {
      }
    })
  }

}
