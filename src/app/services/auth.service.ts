import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let API_KEY = 'http://127.0.0.1:1000/api';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }


  login(user: string, password: string): boolean {

    if(user === 'user' && password === 'p'){
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, userClass: AuthService }
];