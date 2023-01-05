import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  public products: Product[] | undefined;
  public filters: String = '';

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

  searchByAsc() {
    this.productService.getAllProductOrderByAscFromService().subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchBydesc() {
    this.productService.getAllProductOrderByDescFromService().subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByPriceAsc() {
    this.productService.getAllProductOrderByPriceAscFromService().subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByPriceDesc() {
    this.productService.getAllProductOrderByPriceDescFromService().subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  
  searchByMage() {
    this.filters = "Mage"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByFighter() {
    this.filters = "Combattant"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByAssassin() {
    this.filters = "Assassin"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByTank() {
    this.filters = "Tank"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchBySupport() {
    this.filters = "Support"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  searchByShooter() {
    this.filters = "Tireur"
    this.productService.getProductByTypeFromService(this.filters).subscribe((res: Product[]) => {
      this.products = res;
    }) 
  }
  

}
