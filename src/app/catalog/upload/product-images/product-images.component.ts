import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  title: string;
  error: string;
  id: string;

  constructor(
    private router: Router,
    private Product: ProductService,
    private route: ActivatedRoute
  ) {
    this.title = "Upload Product Images";
    this.error = "";
    // this.id = "6437ae8cfddd621ec20a5b84";
    // this.id = "";
  }

  file: File[];
  imageUrls: string[] = [];

  ImageUpload(event: any): void {
    this.file = event.target.files;
    this.imageUrls = Array.from(this.file).map(file => URL.createObjectURL(file));
    // console.log(this.imageUrls);
  }

  uploads() {
    const formData = new FormData();
    console.log("hii");
    for (let i = 0; i < this.file.length; i++) {
      formData.append('images', this.file[i]);
    }

    this.Product.uploads(this.id, formData)
      .subscribe(
        (result) => {
          alert("Product Image Added Successfully!");
          this.router.navigateByUrl('/product');
          // console.log(result);

        }, (err) => {
          document.getElementById('err').style.display = 'block';
          // this.error = err.error.message;
          this.error = err.message;
          setTimeout(function () {
            document.getElementById('err').style.display = 'none';
            this.error = "";
          }.bind(this), 4000);
          console.log(err.message);
        }
      )
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.id);
  }
}
