import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

let API_KEY = 'http://127.0.0.1:1000/api';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient, private router: Router) { }
  
  add(body:{}): boolean {
    let flag = 0;
    let token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders({
      "Authorization": token,
    }); 

    this.http.post(`${API_KEY}/product`, body, {headers})
      .pipe(
        map(res => res)
      ).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('product-list');
      }, (err)=>{
        console.log(err);
      });
    // this.http.post(`${API_KEY}/product`, body, {headers})
    //   .pipe(
    //     map(res => res)
    //   ).subscribe((data) => {
    //     console.log(data);
    //     flag = 1;
    //   });
      console.log("data1");
    if (flag) {
      return true;
    } else {
      return false;
    }

  }

  getAllProduct(): any {
    return this.http.get(`${API_KEY}/product`)
      .pipe(
        map(res => res)
      );
  }

}
