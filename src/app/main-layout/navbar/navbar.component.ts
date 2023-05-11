import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    // './../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './navbar.component.css',
  ]
})
export class NavbarComponent implements OnInit {
  username = "User";
  email = "example@gmail.com";

  ngOnInit(){
    if(localStorage.getItem('username')){
      this.username = localStorage.getItem('username');
    }
    if(localStorage.getItem('email')){
      this.email = localStorage.getItem('email');
    }
  }
}