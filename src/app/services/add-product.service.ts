import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

let API_KEY = 'http://127.0.0.1:1000/api';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }
  token = localStorage.getItem('token');
  
  add(body:{}): boolean {
    this.http.post(`${API_KEY}/product`, body)
      .pipe(
        map(res => res)
      ).subscribe((data) => {
        console.log(data);

      });
      console.log("data1");
    // if () {
      return true;
    // } else {
      // return false;
    // }

  }


}
