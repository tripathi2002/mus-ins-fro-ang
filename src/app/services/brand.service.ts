import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class BrandService {
  path: string = '/brand';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private url: string,
  ) { }

  getAllBrand(): any {
    // let headers: HttpHeaders = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });

    return this.http.get(`${BASE_URL}${this.path}`)
      .pipe(
        map(res => {
          // console.log(res);
          return res; 
        })
      )
  }
}
