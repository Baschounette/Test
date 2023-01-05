import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service/lib/cookie.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnChanges {

  public isDisplayProfil = false;
  public isDisplayMyReservation = false;
  public isDisplaySupport = false;
  public isDisplayAdmin = false;
  public isDisplayAddProduct = false;
  public isDisplayUsers = true;
  public isDisplayReservation = false;

  public isAdmin = false;

  public userLogged!: User;
  

  constructor (private userService: UserService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userLogged.role = this.cookieService.get('CookieRole')
    if (this.userLogged?.role === 'admin') {
      this.isAdmin = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

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