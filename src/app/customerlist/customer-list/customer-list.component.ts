// customer-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers!: any[];
  errorMessage: string = '';
  imagePath = "./assets/list.png";

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe(
      res => {
        this.customers = res;
        console.log(this.customers)
        this.errorMessage = '';

      },
      error => {
        this.errorMessage = 'Error fetching customers. Please try again later.';
      }
    );
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id)
      .subscribe(() => {
        this.customers = this.customers.filter(c => c.id !== id);
      });
  }
}
