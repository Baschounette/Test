import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //Récupère tout les champions de la BDD
  getAllProductFromService(){
    return this.http.get('http://localhost:8080/products/allProduct')
  }
  
}
