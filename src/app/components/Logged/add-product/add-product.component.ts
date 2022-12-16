import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


interface DisplayChampionType {
  value : String;
  viewValue : String;
}

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
// NgForm = Formulaire d'Angular
  addProduct(product: NgForm){
    this.productService.addProductFromService(product.value).subscribe(() => {
      console.log("Champion ajouté")
    })
  }

  isDisplayChampionType: DisplayChampionType[] = [
    {value: 'Type de Champion-0', viewValue: 'Type de Champion'},
    {value: 'Assassin-1', viewValue: 'Assassin'},
    {value: 'Mage-2', viewValue: 'Mage'},
    {value: 'Tireur-3', viewValue: 'Tireur'},
    {value: 'Support-4', viewValue: 'Support'},
    {value: 'Tank-5', viewValue: 'Tank'},
    {value: 'Combattant-6', viewValue: 'Combattant'},
  ];
}
