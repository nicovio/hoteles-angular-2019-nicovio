import { Component, Input, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Hotel } from 'src/app/domain/hotel';

@Component({
  selector: 'app-hotel-display',
  templateUrl: './hotel-display.component.html',
  styleUrls: ['./hotel-display.component.css']
})
export class HotelDisplayComponent implements OnInit {

  @Input() hotel: Hotel
  @Input() mostrarPrecioNoche: boolean

  faMapMarker = faMapMarkerAlt

  constructor() { }

  ngOnInit() {
  }

  disabled() {
    return true
  }


}
