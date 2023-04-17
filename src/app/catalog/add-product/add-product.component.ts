import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand.model';
import { Category } from 'src/app/models/category.model';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
// import { AddProductService } from 'src/app/services/add-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: [
    // './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './add-product.component.css',
  ]
})
export class AddProductComponent implements OnInit {
  title: string;
  error: string;

  categories: Category[];
  brands: Brand[];


  catid: string = '642b10fff80d2b1615598d40';
  braid: string = '642b1ef8b1e030147b055867';
  constructor(
    private router: Router,
    private Product: ProductService,
    private CategorySer: CategoryService,
    private BrandSer: BrandService,
  ) {
    this.title = "Add Product";
    this.error = "";
  }

  product = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    color: new FormControl(''),
    category: new FormControl(),
    brand: new FormControl(),
  });


  add() {
    // console.log("Hello");
    this.Product.add(this.product.value)
      .subscribe((data) => {
        alert("Product Added Successfully!");
      }, (err) => {
        document.getElementById('err').style.display = 'block';
        this.error = err.message;
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
    this.CategorySer.getAllCateory()
      .subscribe((result)=>{
        console.log(result);
        this.categories = result.categories;
        console.log(this.categories);
      });
    this.BrandSer.getAllBrand()
      .subscribe((result)=> {
        this.brands = result.brands;
        console.log(result);
      });
  }

}

//   title: string = 'Add Product';

//   constructor(private productService: AddProductService, private router: Router){}

//   product = new FormGroup({
//     title: new FormControl('samsung'),
//     description: new FormControl(''),
//     price: new FormControl('100'),
//     category: new FormControl('TV'),
//     color: new FormControl('blue'),
//     quantity: new FormControl('3'),
//     brand: new FormControl('samsung'),
//   });

//   addProduct(){
//     console.log(this.product.value);
//     if(this.productService.add(this.product.value)){
//       this.router.navigateByUrl('product-list');
//       this.product.value.title = '';

//     } else {
//       console.log("error");
//     }   
//   }
// }
