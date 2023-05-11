import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  title: string;
  error: string;

  user: Customer;
  constructor(
    private auth: AuthService
  ){}


  customer = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(),
    role: new FormControl('admin'),
    password: new FormControl('stu'),
  });

  add(){ 
    this.auth.register(this.customer.value)
      .subscribe((data) => {
        alert("Customer Added Successfully!");
      }, (err) => {
        document.getElementById('err').style.display = 'block';
        this.error = err.error.message;
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
          this.error = "";
        }.bind(this), 4000);
        console.log(err);
      }, () => {
        // this.product['title'] = '';
      });
  }
}
