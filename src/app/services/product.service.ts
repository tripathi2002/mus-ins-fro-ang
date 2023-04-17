import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../api';
import { map } from 'rxjs';

@Injectable()
export class ProductService {

  path: string = '/product';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private url: string,
  ) { }

  getAllProduct(): any {
    return this.http.get(`${BASE_URL}${this.path}`)
      .pipe(
        map(res => {
          // console.log(res);
          return res; 
        })
      )
  }

  add(product: {}): any {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(
      `${BASE_URL}${this.path}`, product, { headers }
    ).pipe( map( res => res));
  }

}
