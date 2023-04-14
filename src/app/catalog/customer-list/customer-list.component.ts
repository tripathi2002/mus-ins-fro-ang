import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  title: string;
  customers: Customer[];

  constructor(private CustomerService: CustomerService){
    this.title = "Customers"; 
  }

  getCustomer(){
    this.CustomerService.getAllCustomer()
      .subscribe(
        (result)=>{
          // console.log(result);
            this.customers = result.users;
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
    this.getCustomer();
  }
}

