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
    // this.id = "6437ae8cfddd621ec20a5b84";
    this.id = "643d8eb0213d7d659c896d82";
  }

  file: File[];
  imageUrls: string[] = [];

  ImageUpload(event:any):void {
    this.file = event.target.files;
    this.imageUrls = Array.from(this.file).map(file=> URL.createObjectURL(file));
    console.log(this.imageUrls);
  }
    
  uploads(){
    const formData = new FormData();
  
    for (let i = 0; i < this.file.length; i++) {
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

  ngOnInit(): void {  }
}
