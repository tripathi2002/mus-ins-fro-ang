import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  title: string;
  error: string;
  constructor(
    private router: Router,
    private Brand: BrandService,
    ){
    this.title = "Add Brand";
    this.error = "";
  }

  brand = new FormGroup({
    title: new FormControl('')
  });


  add(){
        // console.log("Hello");
    this.Brand.addBrand(this.brand.value)
      .subscribe((data)=> {
        alert("Brand Added Successfully!");
      }, (err)=>{
        document.getElementById('err').style.display = 'block';
        this.error = err.message;
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
          this.error = "";
        }.bind(this), 4000);
        console.log(err);
      }, ()=>{
        // this.brand['title'] = '';
      });
  }

}
