import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public isDisplayProfil = true;
  public isDisplayMyReservation = false;
  public isDisplaySupport = false;
  public isDisplayAdmin = false;
  public isDisplayAddProduct = false;
  public isDisplayUsers = false;
  public isDisplayReservation = false;
  

  constructor () { }

  ngOnInit(): void {
    
  }

  displayProfil(){
    this.isDisplayProfil = true
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displayMyReservation(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = true
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displaySupport(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = true
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displayAdmin(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = true
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displayAddProduct(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = true
    this.isDisplayUsers = false
    this.isDisplayReservation = false
  }

  displayUsers(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = true
    this.isDisplayReservation = false
  }

  displayReservation(){
    this.isDisplayProfil = false
    this.isDisplayMyReservation = false
    this.isDisplaySupport = false
    this.isDisplayAdmin = false
    this.isDisplayAddProduct = false
    this.isDisplayUsers = false
    this.isDisplayReservation = true
  }
}
