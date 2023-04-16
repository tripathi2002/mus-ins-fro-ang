import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../api';
import { map, Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  path: string = '/category/product';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private url: string,
  ) { }

  // /api/category/product

  getAllCateory(): any {
    return this.http.get(`${BASE_URL}${this.path}`)
      .pipe(
        map(res => {
          // console.log(res);
          return res; 
        })
      )
  }

  addCategory(category: {}): any {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(
      `${BASE_URL}${this.path}`, category, { headers }
    ).pipe( map( res => res));
  }

}
