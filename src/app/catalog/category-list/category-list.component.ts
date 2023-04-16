import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  title: string;
  categories: Category[];

  constructor(private categoryService: CategoryService){
    this.title = "Categories"; 
  }

  getcategory(){
    this.categoryService.getAllCateory()
      .subscribe(
        (result)=>{
          // console.log(result);
            this.categories = result.categories;
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
    this.getcategory();
  }
}
