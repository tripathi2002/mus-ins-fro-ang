import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  title: string;
  brands: Brand[];

  constructor(private brandService: BrandService){
    this.title = "Brands"; 
  }

  getBrands(){
    this.brandService.getAllBrand()
      .subscribe(
        (result)=>{
          // console.log(result);
            this.brands = result.brands;
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
    this.getBrands();
  }
}
