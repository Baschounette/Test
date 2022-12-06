import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './Logged/add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register2', component: Register2Component},
  { path: 'login2', component: Login2Component},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'button', component: ButtonComponent},
  { path: 'button2', component: Button2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
