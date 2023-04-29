import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  title: string;
  error: string;

  user: Customer;

  customer = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(),
    role: new FormControl('admin'),
    password: new FormControl('stu'),
  });
}
