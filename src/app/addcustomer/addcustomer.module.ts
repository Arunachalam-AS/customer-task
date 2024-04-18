import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcustomerRoutingModule } from './addcustomer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    AddcustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddcustomerModule { }
