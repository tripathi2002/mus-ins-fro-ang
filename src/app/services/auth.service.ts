import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

import { API_URL } from '../api'
import { AddProductService } from './add-product.service';

// export let API_KEY = 'http://127.0.0.1:1000/api';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient, 
    @Inject(API_URL) private URL: string
    ) { }

  login(email: string, password: string){
    return this.http.post(`${this.URL}/user/login`, {email, password})
      .pipe(map(res => res));
  }

  logout(): any {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}