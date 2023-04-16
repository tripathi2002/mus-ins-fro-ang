import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  title: string;
  error: string;
  constructor(
    private router: Router,
    private Category: CategoryService,
    ){
    this.title = "Add Category";
    this.error = "";
  }

  category = new FormGroup({
    title: new FormControl('')
  });


  add(){
        // console.log("Hello");
    this.Category.addCategory(this.category.value)
      .subscribe((data)=> {
        alert("Category Added Successfully!");
      }, (err)=>{
        document.getElementById('err').style.display = 'block';
        this.error = err.message;
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
          this.error = "";
        }.bind(this), 4000);
        console.log(err);
      }, ()=>{
        // this.category['title'] = '';
      });
  }
}
