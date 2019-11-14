import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from 'src/app/domain/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hoteles: Hotel[]

  constructor(private hotelesService: HotelService) { }

  async ngOnInit() {
    this.hoteles = await this.hotelesService.getHotelesRegistrados()
  }

}
