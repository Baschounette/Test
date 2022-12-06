import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './Logged/add-product/add-product.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';

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
    AddProductComponent,
    ButtonComponent,
    Button2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
