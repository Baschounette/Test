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
  ngDropdown = 0;

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

  searchFilters(filters: NgForm){
    console.log(filters.value)
    if(filters.value === 'Mage' || filters.value === 'Assassin' || filters.value === 'Tireur'
     || filters.value === 'Tank' || filters.value === 'Combattant' || filters.value === 'Support') {
      this.productService.getProductByTypeFromService(filters).subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value === 'Ordre Alphabétique'){
      this.productService.getAllProductOrderByAscFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value === 'Ordre Alphabétique Inverse'){
      this.productService.getAllProductOrderByDescFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value === 'Prix Croissant'){
      this.productService.getAllProductOrderByPriceAscFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else {
      this.productService.getAllProductOrderByPriceDescFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    }
  }
}
