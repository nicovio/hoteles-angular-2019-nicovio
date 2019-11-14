import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel';
import { Habitacion } from 'src/app/domain/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  lasHayas: Hotel
  laCaldera: Hotel
  villa_Huapi: Hotel
  hoteles: Hotel[]

  constructor() {
    this.lasHayas = new Hotel("Las Hayas Resort", "Usuahia", 5, "https://i.ytimg.com/vi/fALV170YIyM/maxresdefault.jpg", [new Habitacion("Doble Económica", 5500), new Habitacion("Doble Estándar", 7000), new Habitacion("Triple Económica", 8500)])
    this.laCaldera = new Hotel("Hostería La Caldera", "Salta", 3, "http://www.hosterialacaldera.com.ar/images/home/05.jpg", [new Habitacion("Doble Económica", 3000), new Habitacion("Doble Estándar", 4000), new Habitacion("Triple Económica", 5000)])
    this.villa_Huapi = new Hotel("Villa Huapi", "Bariloche", 4, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8e2N6tSsK2RbrZayUqYRZI9G702GwfGaAOxQXeo2Ff5b-kBaP", [new Habitacion("Doble Económica", 4000), new Habitacion("Doble Estándar", 5000), new Habitacion("Triple Económica", 6000)])
    this.hoteles = [this.lasHayas, this.laCaldera, this.villa_Huapi]
  }

  async getHotelesRegistrados() {
    return Promise.all(this.hoteles)
  }

}
