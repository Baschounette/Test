import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public isDisplayProfil = false;
  public isDisplayMyReservation = false;
  public isDisplaySupport = false;
  public isDisplayAdmin = false;
  public isDisplayAddProduct = false;
  public isDisplayUsers = true;
  public isDisplayReservation = false;

  public isAdmin = false;
  

  constructor (private userService: UserService) { }

  ngOnInit(): void {
    if (localStorage.getItem("Role") === "admin") {
      this.isAdmin = true
    }
  }

  changeButton() {
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displayProfil(){
    this.changeButton()
    this.isDisplayProfil = true
  }

  displayMyReservation(){
    this.changeButton()
    this.isDisplayMyReservation = true
  }

  displaySupport(){
    this.changeButton()
    this.isDisplaySupport = true
  }

  displayAdmin(){
    this.changeButton()
    this.isDisplayAdmin = true
  }

  displayAddProduct(){
    this.changeButton()
    this.isDisplayAddProduct = true
  }

  displayUsers(){
    this.changeButton()
    this.isDisplayUsers = true
  }

  displayReservation(){
    this.changeButton()
    this.isDisplayReservation = true
  }
}