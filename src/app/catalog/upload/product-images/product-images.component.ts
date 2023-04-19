import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent {
  title: string;
  error: string;
  id: string;

  constructor(
    private router: Router,
    private Product: ProductService,
  ) {
    this.title = "Upload Product Images";
    this.error = "";
    this.id = "643d8eb0213d7d659c896d82";
  }

  productUpload = new FormGroup({
    // images: new FormControl(),
  });

  file: File[];
  // file: File;

  ImageUpload(event:any):void {
    console.log(event.target.files[0])
    // file = event.target.files[0];
    this.file = event.target.files;
  }


  upload() {
    // console.log(this.productUpload.value.images);
    
    this.Product.upload(this.id , this.file)
      .subscribe((data) => {
        alert("Product Uploaded Successfully!");
      }, (err) => {
        // console.log(err.error.message);
        document.getElementById('err').style.display = 'block';
        this.error = err.error.message;
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
          this.error = "";
        }.bind(this), 4000);
        console.log(err);
      }, () => {
        // this.product['title'] = '';
      });
  }

  ngOnInit(): void {

  }

}
