import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //Récupère tout les champions de la BDD
  getAllProductFromService(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products/allProduct') as Observable<Product[]>
  }
  
  addProductFromService(product: Product){
    return this.http.post('http://localhost:8080/products/addProduct', product)
  }

  searchByNameFromService(name: NgForm): Observable<Product[]> {
    let searchName = name.value.searchName
    return this.http.get('http://localhost:8080/products/name/' + searchName) as Observable<Product[]>
  }
}
