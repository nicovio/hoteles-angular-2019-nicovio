import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel';
import { Habitacion } from 'src/app/domain/habitacion';
import { Servicio } from 'src/app/domain/servicio';
import { Reserva } from 'src/app/domain/reserva';
import { Usuario } from 'src/app/domain/usuario';

function servicioConPrecio(servicio: Servicio, precio: number) {
  servicio.precioPorNoche = precio
  return servicio
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  usuarioLogueado: Usuario
  lasHayas: Hotel
  laCaldera: Hotel
  villa_Huapi: Hotel
  hoteles: Hotel[]
  servicios: Servicio[]
  almuerzo: Servicio
  cena: Servicio
  cochera: Servicio
  lavanderia: Servicio

  constructor() {
    this.usuarioLogueado = new Usuario("nicovio")
    this.crearServicios()
    this.crearHoteles()
  }

  crearServicios() {
    this.almuerzo = new Servicio("Almuerzo")
    this.cena = new Servicio("Cena")
    this.cochera = new Servicio("Cochera")
    this.lavanderia = new Servicio("Lavandería")
  }

  crearHoteles() {
    this.lasHayas = new Hotel("1", "Las Hayas Resort", "Usuahia", 5, "https://i.ytimg.com/vi/fALV170YIyM/maxresdefault.jpg")
    this.lasHayas.habitaciones = [new Habitacion("Doble Económica", 5500), new Habitacion("Doble Estándar", 7000), new Habitacion("Triple Económica", 8500)]
    this.lasHayas.servicios = [servicioConPrecio(this.almuerzo, 500), servicioConPrecio(this.cena, 650), servicioConPrecio(this.cochera, 900), servicioConPrecio(this.lavanderia, 400)]
    this.laCaldera = new Hotel("2", "Hostería La Caldera", "Salta", 3, "http://www.hosterialacaldera.com.ar/images/home/05.jpg")
    this.laCaldera.habitaciones = [new Habitacion("Doble Económica", 3000), new Habitacion("Doble Estándar", 4000), new Habitacion("Triple Económica", 5000)]
    this.laCaldera.servicios = [servicioConPrecio(this.almuerzo, 350), servicioConPrecio(this.cena, 400), servicioConPrecio(this.cochera, 600), servicioConPrecio(this.lavanderia, 250)]
    this.villa_Huapi = new Hotel("3", "Villa Huapi", "Bariloche", 4, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8e2N6tSsK2RbrZayUqYRZI9G702GwfGaAOxQXeo2Ff5b-kBaP")
    this.villa_Huapi.habitaciones = [new Habitacion("Doble Económica", 4000), new Habitacion("Doble Estándar", 5000), new Habitacion("Triple Económica", 6000)]
    this.villa_Huapi.servicios = [servicioConPrecio(this.almuerzo, 400), servicioConPrecio(this.cena, 500), servicioConPrecio(this.cochera, 700), servicioConPrecio(this.lavanderia, 300)]
    this.hoteles = [this.lasHayas, this.laCaldera, this.villa_Huapi]
  }

  async getHotelesRegistrados() {
    return Promise.all(this.hoteles)
  }

  async getHotel(id: String) {
    const hotel = this.hoteles.find(hotel => hotel.id == id)
    return Promise.resolve(hotel)
  }

  async nuevaReserva(reserva: Reserva) {
    this.usuarioLogueado.agregarReserva(reserva)
  }

}
