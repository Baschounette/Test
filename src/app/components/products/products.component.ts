import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

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
    if(filters.value.filter === 'Mage' || filters.value.filter === 'Assassin' || filters.value.filter === 'Tireur'
     || filters.value.filter === 'Tank' || filters.value.filter === 'Combattant' || filters.value.filter === 'Support') {
      this.productService.getProductByTypeFromService("filters").subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value.filter === 'Ordre Alphabétique'){
      this.productService.getAllProductOrderByAscFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value.filter === 'Ordre Alphabétique Inverse'){
      this.productService.getAllProductOrderByDescFromService().subscribe((res: Product[]) => {
        this.products = res;
      }) 
    } else if (filters.value.filter === 'Prix Croissant'){
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
