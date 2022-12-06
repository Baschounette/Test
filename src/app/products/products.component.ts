import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] | undefined;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
      this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProductFromService().subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  searchByName(name: NgForm){
    this.productService.searchByNameFromService(name).subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  searchByPrice(price: NgForm){
    this.productService.searchByPriceFromService(price).subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  annuler() {
    this.getAllProduct()
  }

}
