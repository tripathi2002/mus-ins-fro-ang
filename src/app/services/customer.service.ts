import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../api';
import { map } from 'rxjs';

@Injectable()
export class CustomerService {

  path: string = '/user/allUser';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private url: string,
  ) { }

  getAllCustomer(): any {
    // let headers: HttpHeaders = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });

    return this.http.get(`${this.url}${this.path}`)
      .pipe(
        map(res => {
          // console.log(res);
          return res; 
        })
      );
  }

}
