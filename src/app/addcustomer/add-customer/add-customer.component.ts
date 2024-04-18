
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerForm!: FormGroup;
  constructor(private fb: FormBuilder, private customerservice: CustomerService, private router: Router) { }

  ngOnInit(): void {
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
  @Output() customerview: EventEmitter<any> = new EventEmitter<any>();


  onSubmit() {
    if (this.customerForm.valid) {
      this.customerservice.addCustomer(this.customerForm.value).subscribe((res) => {
        this.customerview.emit(res);
        this.router.navigateByUrl('/customerlist');
        console.log(res)
      });
    }
  }
}

