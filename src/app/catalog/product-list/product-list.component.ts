import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/services/add-product.service';

export interface Product {
  _id: number;
  title: string;
  brand: string;
  category: string;
  color: string;
  price: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  count: number = 0;
  constructor(private productSer: AddProductService){}

  getAllProduct(): void {
    this.productSer.getAllProduct()
      .subscribe(
        (result)=>{
          console.log(result);
          this.products = result.product;
          this.count = result.count;
         console.log(this.products);
        }
      )
  }

  ngOnInit(): void {
    this.getAllProduct();
  }
}
