import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  imports: [RouterOutlet, RouterLink]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
