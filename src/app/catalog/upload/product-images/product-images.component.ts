import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit{
  title: string;
  error: string;
  id: string;

  constructor(
    private router: Router,
    private Product: ProductService,
  ) {
    this.title = "Upload Product Images";
    this.error = "";
    this.id = "6437ae8cfddd621ec20a5b84";
    // this.id = "643d8eb0213d7d659c896d82";
  }

  // productUpload = new FormGroup({
  //   images: new FormControl(),
  // });

  file: File[];
  // file: File;

  ImageUpload(event:any):void {
    // console.log(event.target.files[0])
    // file = event.target.files[0];
    this.file = event.target.files;
  }


  // upload() {
  //   // console.log(this.productUpload.value.images);
    
  //   this.Product.upload(this.id , this.file)
  //     .subscribe((data) => {
  //       alert("Product Uploaded Successfully!");
  //       console.log(data);
  //     }, (err) => {
  //       // console.log(err.error.message);
  //       document.getElementById('err').style.display = 'block';
  //       this.error = err.error.message;
  //       setTimeout(function () {
  //         document.getElementById('err').style.display = 'none';
  //         this.error = "";
  //       }.bind(this), 4000);
  //       console.log(err);
  //     }, () => {
  //       // this.product['title'] = '';
  //     });
  // }

  uploads(){
    const formData = new FormData();
    // console.log(this.productUpload.value.images.length);
    // for (let i=0;i<this.productUpload.value.images.length;i++){
    //   console.log(this.productUpload.value.images);
    // }
    console.log(this.file.length);
    console.log(this.file);
    for (let i = 0; i < this.file.length; i++) {
      // const element = this.file[i];
      // console.log(this.file[i]);
      formData.append('images', this.file[i]);
    }

    this.Product.uploads(this.id, formData)
      .subscribe(
        (result)=>{
            console.log(result);
        }, (err) => {
          console.log(err);
        }
      )
  }


  ngOnInit(): void {

  }

}
