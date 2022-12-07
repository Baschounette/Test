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
    let searchByName = name.value.searchName
    return this.http.get('http://localhost:8080/products/name/' + searchByName) as Observable<Product[]>
  }

  searchByPriceFromService(price: NgForm): Observable<Product[]> {
    let price1 = price.value.price1
    let price2 = price.value.price2
    return this.http.get('http://localhost:8080/products/price?price1=' + price1 + '&price2=' + price2) as Observable<Product[]>
  }

  getAllProductOrderByAscFromService(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products/productOrderByNameAsc') as Observable<Product[]>
  }

  getAllProductOrderByDescFromService(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products/productOrderByNameDesc') as Observable<Product[]>  
  }

  getProductByTypeFromService(filters: NgForm): Observable<Product[]> {
    let searchByType = filters.value.filter
    return this.http.get('http://localhost:8080/products/type/' + searchByType) as Observable<Product[]>
  }

  getAllProductOrderByPriceAscFromService(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products/productOrderByPriceAsc') as Observable<Product[]>
  }
 
  getAllProductOrderByPriceDescFromService(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products/productOrderByPriceDesc') as Observable<Product[]>
  }

}