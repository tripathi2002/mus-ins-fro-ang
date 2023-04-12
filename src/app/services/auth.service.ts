import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AddProductService } from './add-product.service';

let API_KEY = 'http://127.0.0.1:1000/api';

@Injectable()
export class AuthService {
  username: string = "";
  email: string = "";
  token: string = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): boolean {
    this.http.post(`${API_KEY}/user/admin-login`, { email, password })
      .pipe(
        map(res => res)
      ).subscribe((data) => {
        console.log(data);
        this.username = data['firstName'];
        this.token = `Bearer ${data['token']}`;
        this.email = data['email'];
      });
    if (this.token) {
      console.log("data1");

      localStorage.setItem('username', this.username);
      localStorage.setItem('email', this.email);
      localStorage.setItem('token', this.token);
      this.username = "";
      this.email = "";
      this.token = null;
      return true;
    } else {
      return false;
    }
    // if (email === this.user) {
    //   localStorage.setItem('username', email);
    //   return true;
    // }
    // return false;
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

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService },
  { provide: AddProductService, useClass: AddProductService },
  { provide: API_KEY, useValue: API_KEY },
];