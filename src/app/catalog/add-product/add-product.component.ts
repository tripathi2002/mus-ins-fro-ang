import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: [
    // './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './add-product.component.css',
  ]
})
export class AddProductComponent {
  title: string = 'Add Product';

  constructor(private productService: AddProductService){}

  product = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('100'),
    category: new FormControl(''),
    color: new FormControl('blue'),
    quantity: new FormControl('3'),
  });

  addProduct(){
    console.log(this.product.value);
    if(this.productService.add(this.product.value)){
      this.product.value.title = '';
    } else {
      console.log("error");
    }   
  }
}
