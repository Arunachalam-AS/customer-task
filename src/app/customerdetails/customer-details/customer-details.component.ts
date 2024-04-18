// customer-details.component.ts
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit,AfterViewInit {
  customer: any;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.customerService.getCustomer(id).subscribe(customer => {
      this.customer = customer;
    });
  }
  ngAfterViewInit(): void {
    const id = this.route.snapshot.params['id'];
    this.customerService.getCustomer(id).subscribe(customer => {
      this.customer = customer;
    });
  }
}
