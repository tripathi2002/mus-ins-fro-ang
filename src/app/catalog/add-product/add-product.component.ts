import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private productService: AddProductService, private router: Router){}

  product = new FormGroup({
    title: new FormControl('samsung'),
    description: new FormControl(''),
    price: new FormControl('100'),
    category: new FormControl('TV'),
    color: new FormControl('blue'),
    quantity: new FormControl('3'),
    brand: new FormControl('samsung'),
  });

  addProduct(){
    console.log(this.product.value);
    if(this.productService.add(this.product.value)){
      this.router.navigateByUrl('product-list');
      this.product.value.title = '';

    } else {
      console.log("error");
    }   
  }
}
