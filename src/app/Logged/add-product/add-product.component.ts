import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ngDropdown = 0;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    
  }

  addProduct(product: any){
    this.productService.addProductFromService(product.value).subscribe(data => {
      console.log("Champion ajouté")
    })
  }
}
