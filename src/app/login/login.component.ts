import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { debounceTime, filter, map, pipe, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(public auth: AuthService, private router: Router) {
    this.message = "Invalid Credentials";
  }

  login(username: string, password: string){
    this.auth.login(username, password)
      .subscribe((result)=>{
          if(result['token']){
            // console.log(result);
            localStorage.setItem('username', result['firstName']);
            localStorage.setItem('email', result['email']);
            localStorage.setItem('token', result['token']);

            this.router.navigateByUrl('dashboard');
          }

      }, (err)=>{
        this.message = 'Incorrect credentials.';
        setTimeout(function () {
          this.message = '';
        }.bind(this), 2500);
        console.log(err);
      });
  }


  logout(): boolean {
    this.auth.logout();
    return false;
  }

}
