import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/services/add-product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  count: number = 0;
  title: string;
  constructor(private productSer: AddProductService){
    this.title = "Products";
  }

  getAllProduct(): void {
    this.productSer.getAllProduct()
      .subscribe(
        (result)=>{
          // console.log(result);
          this.products = result.product;
          this.count = result.count;
        //  console.log(this.products);
        }
      )
  }

  ngOnInit(): void {
    this.getAllProduct();
  }
}
