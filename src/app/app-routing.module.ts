import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddProductComponent } from './components/Logged/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/Logged/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sidebar', component: SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
