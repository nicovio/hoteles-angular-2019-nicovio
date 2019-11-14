import { Component, OnInit } from '@angular/core';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBed = faBed;

  constructor() { }

  ngOnInit() {
  }

}
