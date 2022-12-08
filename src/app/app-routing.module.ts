import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddProductComponent } from './components/Logged/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/Basch/login2/login2.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { Register2Component } from './components/Basch/register2/register2.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register2', component: Register2Component},
  { path: 'login2', component: Login2Component},
  { path: 'addProduct', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
