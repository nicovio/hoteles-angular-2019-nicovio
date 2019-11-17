import { Component, OnInit } from '@angular/core';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBed = faBed;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
  }

}
