import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public connected = false;

  constructor (private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("Connecté ?") === "Connecté") {
      this.connected = true
    }
  }

  deconnect() {
    this.connected = false;
    localStorage.removeItem("Name")
    localStorage.removeItem("Role")
    localStorage.removeItem("Connecté ?")
    this.router.navigate(['homepage'])
  }
}
