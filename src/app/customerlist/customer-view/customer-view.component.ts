
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customerForm!: FormGroup;

  imagePath = "./assets/list1.png";
  customerId!: number;
  customer: any;
  editMode: boolean = false;
  updatedCustomer: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = +params['id'];
      this.loadCustomerDetails();
    });
    this.customerForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: [''],
        city: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
        geo: this.fb.group({
          lat: [''],
          lng: ['']
        })
      }),
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      website: ['', Validators.required],
      company: this.fb.group({
        companyName: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required]
      })
    });
  }
  loadCustomerDetails() {
    this.customerService.getCustomer(this.customerId).subscribe(
      (data) => {
        this.customer = data;
        this.customerForm.patchValue({
          id: this.customer.id,
          name: this.customer.name,
          username: this.customer.username,
          email: this.customer.email,
          address: {
            street: this.customer.address.street,
            suite: this.customer.address.suite,
            city: this.customer.address.city,
            zipcode: this.customer.address.zipcode
          },
          phone: this.customer.phone,
          website: this.customer.website,
          company: {
            companyName: this.customer.name,
            catchPhrase: this.customer.company.catchPhrase,
            bs: this.customer.company.bs
          }

        })
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editCustomer() { 
    this.updatedCustomer = { ...this.customer };
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
    this.loadCustomerDetails();
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerForm.value, this.customerId).subscribe(
      (res: any) => {
        this.editMode = false;
        console.log(res)
        this.loadCustomerDetails();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}