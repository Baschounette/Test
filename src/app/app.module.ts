import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { Login2Component } from './components/Basch/login2/login2.component';
import { Register2Component } from './components/Basch/register2/register2.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/Logged/add-product/add-product.component';
import { AdminboardComponent } from './components/Logged/adminboard/adminboard.component';
import { Register3Component } from './components/register3/register3.component';
import { SidebarComponent } from './components/Logged/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfilComponent } from './components/Logged/profil/profil.component';
import { MyReservationComponent } from './components/Logged/my-reservation/my-reservation.component';
import { SupportComponent } from './components/Logged/support/support.component';
import { UsersComponent } from './components/Logged/users/users.component';
import { ReservationComponent } from './components/Logged/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ProductsComponent,
    FooterComponent,
    Login2Component,
    Register2Component,
    Register3Component,
    AddProductComponent,
    AdminboardComponent,
    SidebarComponent,
    ProfilComponent,
    MyReservationComponent,
    SupportComponent,
    UsersComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
